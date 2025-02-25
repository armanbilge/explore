import org.scalajs.linker.interface.ModuleSplitStyle
import scala.sys.process.*
import Dependencies.*

val reactJS = "17.0.2"

ThisBuild / Test / bspEnabled                                        := false
ThisBuild / ScalafixConfig / bspEnabled.withRank(KeyRanks.Invisible) := false

ThisBuild / evictionErrorLevel := Level.Info
ThisBuild / resolvers ++= Resolver.sonatypeOssRepos("snapshots")

ThisBuild / coverageEnabled := false

ThisBuild / lucumaCssExts += "svg"

addCommandAlias(
  "quickTest",
  "modelTestsJVM/test"
)

addCommandAlias(
  "fixImports",
  "; scalafix OrganizeImports; Test/scalafix OrganizeImports"
)

addCommandAlias(
  "fix",
  "; prePR; fixCSS"
)

ThisBuild / description                         := "Explore"
Global / onChangedBuildSource                   := ReloadOnSourceChanges
ThisBuild / scalafixDependencies += "edu.gemini" % "lucuma-schemas_3" % Versions.lucumaSchemas
ThisBuild / scalafixScalaBinaryVersion          := "2.13"
ThisBuild / scalaVersion                        := "3.3.0"
ThisBuild / crossScalaVersions                  := Seq("3.3.0")
ThisBuild / scalacOptions ++= Seq("-language:implicitConversions")
ThisBuild / scalafixResolvers += coursierapi.MavenRepository.of(
  "https://s01.oss.sonatype.org/content/repositories/snapshots/"
)

val stage = taskKey[Unit]("Prepare static files to deploy to Heroku")

// For simplicity, the build's stage only deals with the explore app.
stage := {
  val jsFiles = (explore / Compile / fullLinkJS).value
  if (sys.env.getOrElse("POST_STAGE_CLEAN", "false").equals("true")) {
    println("Cleaning up...")
    // Remove coursier cache
    val coursierCacheDir = csrCacheDirectory.value
    sbt.IO.delete(coursierCacheDir)
  }
}

lazy val root = tlCrossRootProject
  .aggregate(model, modelTests, common, explore, workers)
  .settings(name := "explore-root")

lazy val model = crossProject(JVMPlatform, JSPlatform)
  .crossType(CrossType.Full)
  .in(file("model"))
  .settings(commonSettings: _*)
  .settings(commonLibSettings: _*)
  .jvmSettings(commonJVMSettings)

lazy val modelTestkit = crossProject(JVMPlatform, JSPlatform)
  .crossType(CrossType.Full)
  .in(file("model-testkit"))
  .dependsOn(model)
  .settings(commonSettings: _*)
  .settings(commonLibSettings: _*)
  .settings(testkitLibSettings: _*)
  .jsSettings(commonModuleTest: _*)
  .jvmSettings(commonJVMSettings)

lazy val modelTests = crossProject(JVMPlatform, JSPlatform)
  .crossType(CrossType.Full)
  .in(file("model-tests"))
  .dependsOn(modelTestkit)
  .settings(commonSettings: _*)
  .settings(commonLibSettings: _*)
  .jsSettings(commonModuleTest: _*)
  .jvmSettings(commonJVMSettings)

lazy val workers = project
  .in(file("workers"))
  .settings(commonSettings: _*)
  .settings(commonJsLibSettings: _*)
  .settings(commonLibSettings: _*)
  .settings(esModule: _*)
  .settings(
    libraryDependencies ++= LucumaCatalog.value ++
      Http4sDom.value ++
      Log4Cats.value ++
      ScalaWebAppUtil.value,
    Test / scalaJSLinkerConfig ~= {
      import org.scalajs.linker.interface.OutputPatterns
      _.withOutputPatterns(OutputPatterns.fromJSFile("%s.mjs"))
    }
  )
  .enablePlugins(ScalaJSPlugin)
  .dependsOn(model.js)

lazy val common = project
  .in(file("common"))
  .dependsOn(model.js, modelTestkit.js % Test)
  .settings(commonSettings: _*)
  .settings(commonJsLibSettings: _*)
  .settings(commonModuleTest: _*)
  .settings(
    libraryDependencies ++=
      LucumaSSO.value ++
        LucumaBC.value ++
        LucumaCatalog.value ++
        LucumaSchemas.value ++
        LucumaReact.value ++
        In(Test)(LucumaUITestKit.value),
    buildInfoKeys    := Seq[BuildInfoKey](
      scalaVersion,
      sbtVersion,
      git.gitHeadCommit,
      "herokuSourceVersion" -> sys.env.get("SOURCE_VERSION"),
      "buildDateTime"       -> System.currentTimeMillis()
    ),
    buildInfoPackage := "explore"
  )
  .enablePlugins(ScalaJSPlugin, BuildInfoPlugin, CluePlugin)

lazy val explore: Project = project
  .in(file("explore"))
  .dependsOn(model.js, common)
  .settings(commonSettings: _*)
  .settings(commonJsLibSettings: _*)
  .settings(esModule: _*)
  .enablePlugins(ScalaJSPlugin, LucumaCssPlugin)
  .settings(
    Test / test          := {},
    coverageEnabled      := false,
    libraryDependencies ++=
      GeminiLocales.value ++
        ReactAladin.value ++
        LucumaReact.value,
    // Build workers when you build explore
    Compile / fastLinkJS := (Compile / fastLinkJS)
      .dependsOn(workers / Compile / fastLinkJS)
      .value,
    Compile / fullLinkJS := (Compile / fullLinkJS).dependsOn(workers / Compile / fullLinkJS).value
  )

lazy val commonSettings = lucumaGlobalSettings ++ Seq(
  scalacOptions ~= (_.filterNot(Set("-Vtype-diffs")))
)

lazy val commonLibSettings = Seq(
  libraryDependencies ++=
    Cats.value ++
      CatsEffect.value ++
      CatsRetry.value ++
      Circe.value ++
      Clue.value ++
      CoulombRefined.value ++
      Crystal.value ++
      FS2.value ++
      FS2Data.value ++
      Http4sCore.value ++
      Kittens.value ++
      LucumaCore.value ++
      LucumaSchemas.value ++
      LucumaRefined.value ++
      LucumaAgs.value ++
      LucumaITCClient.value ++
      RefinedAlgebra.value ++
      Monocle.value ++
      Mouse.value ++
      PPrint.value ++
      Boopickle.value ++
      In(Test)(
        MUnit.value ++
          Discipline.value ++
          CatsTimeTestkit.value ++
          MUnitCatsEffect.value ++
          MonocleLaw.value
      ),
  testFrameworks += new TestFramework("munit.Framework")
)

lazy val testkitLibSettings = Seq(
  libraryDependencies ++= Discipline.value ++
    MonocleLaw.value ++
    CatsTimeTestkit.value ++
    LucumaCoreTestKit.value ++
    LucumaCatalogTestKit.value ++
    LucumaSchemasTestkit.value
)

lazy val commonJVMSettings = Seq(
  libraryDependencies ++=
    FS2IO.value
)

lazy val commonJsLibSettings = commonLibSettings ++ Seq(
  libraryDependencies ++=
    ClueScalaJS.value ++
      Http4sDom.value ++
      FS2Dom.value ++
      Log4Cats.value ++
      ScalaCollectionContrib.value ++
      ScalaJSReact.value ++
      ScalaJSDom.value ++
      LucumaUI.value ++
      In(Test)(
        ScalaJSReactTest.value
      ),
  dependencyOverrides ++= ScalaJSReact.value
)

lazy val commonModuleTest = Seq(
  Test / scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.CommonJSModule) }
)

lazy val esModule = Seq(
  scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) },
  Compile / fastLinkJS / scalaJSLinkerConfig ~= { _.withSourceMap(false) },
  Compile / fullLinkJS / scalaJSLinkerConfig ~= { _.withSourceMap(false) },
  Compile / fastLinkJS / scalaJSLinkerConfig ~= (_.withModuleSplitStyle(
    // Linking with smaller modules seems to take way longer.
    // ModuleSplitStyle.SmallModulesFor(List("explore"))
    ModuleSplitStyle.FewestModules
  )),
  Compile / fullLinkJS / scalaJSLinkerConfig ~= (_.withModuleSplitStyle(
    ModuleSplitStyle.FewestModules
  ))
)

val lintCSS = TaskKey[Unit]("lintCSS", "Lint CSS files")
lintCSS := {
  if (("npm run lint-dark" #&& "npm run lint-light" !) != 0)
    throw new Exception("Error in CSS format")
}

val fixCSS = TaskKey[Unit]("fixCSS", "Fix CSS files")
fixCSS := {
  if (("npm run fix-dark" #&& "npm run fix-light" !) != 0)
    throw new Exception("Error in CSS fix")
}

val pushCond          = "github.event_name == 'push'"
val prCond            = "github.event_name == 'pull_request'"
val masterCond        = "github.ref == 'refs/heads/master'"
val notMasterCond     = "github.ref != 'refs/heads/master'"
val geminiRepoCond    = "startsWith(github.repository, 'gemini')"
val notDependabotCond = "github.actor != 'dependabot[bot]'"
def allConds(conds: String*) = conds.mkString("(", " && ", ")")
def anyConds(conds: String*) = conds.mkString("(", " || ", ")")

val faNpmAuthToken = "FONTAWESOME_NPM_AUTH_TOKEN" -> "${{ secrets.FONTAWESOME_NPM_AUTH_TOKEN }}"

lazy val setupNode = WorkflowStep.Use(
  UseRef.Public("actions", "setup-node", "v3"),
  name = Some("Use Node.js"),
  params = Map("node-version" -> "16", "cache" -> "npm")
)

lazy val sbtStage = WorkflowStep.Sbt(List("stage"), name = Some("Stage"))

lazy val lucumaCssStep = WorkflowStep.Sbt(List("lucumaCss"), name = Some("Extract CSS files"))

// https://stackoverflow.com/a/55610612
lazy val npmInstall = WorkflowStep.Run(
  List("npm clean-install"),
  name = Some("npm clean-install")
)

lazy val npmBuild = WorkflowStep.Run(
  List("npm run build"),
  name = Some("Build application"),
  env = Map(
    "NODE_OPTIONS" -> "--max-old-space-size=8192"
  )
)

// https://frontside.com/blog/2020-05-26-github-actions-pull_request/#how-does-pull_request-affect-actionscheckout
lazy val overrideCiCommit = WorkflowStep.Run(
  List("""echo "CI_COMMIT_SHA=${{ github.event.pull_request.head.sha}}" >> $GITHUB_ENV"""),
  name = Some("override CI_COMMIT_SHA"),
  cond = Some(prCond)
)

lazy val bundlemon = WorkflowStep.Run(
  List("yarn bundlemon"),
  name = Some("Run BundleMon"),
  env = Map(
    "BUNDLEMON_PROJECT_ID"     -> "61a698e5de59ab000954f941",
    "BUNDLEMON_PROJECT_APIKEY" -> "${{ secrets.BUNDLEMON_PROJECT_APIKEY }}"
  )
)

def firebaseDeploy(name: String, cond: String, live: Boolean) = WorkflowStep.Use(
  UseRef.Public("FirebaseExtended", "action-hosting-deploy", "v0"),
  name = Some(name),
  cond = Some(cond),
  params = Map(
    "repoToken"              -> "${{ secrets.GITHUB_TOKEN }}",
    "firebaseServiceAccount" -> "${{ secrets.FIREBASE_SERVICE_ACCOUNT_EXPLORE_GEMINI }}",
    "projectId"              -> "explore-gemini",
    "target"                 -> "staging"
  ) ++ (if (live) Map("channelId" -> "live") else Map.empty)
)

lazy val firebaseDeployReview = firebaseDeploy(
  "Deploy review app to Firebase",
  allConds(prCond,
           notDependabotCond,
           "github.event.pull_request.head.repo.full_name == github.repository"
  ),
  live = false
)

lazy val firebaseDeployStaging = firebaseDeploy(
  "Deploy staging app to Firebase",
  pushCond,
  live = true
)

lazy val herokuProvision = WorkflowStep.Run(
  List("heroku plugins:install heroku-cli-static"),
  name = Some("Heroku - Provision static plugin")
)

lazy val herokuDeploy = WorkflowStep.Run(
  List("cd ./heroku", "heroku static:deploy -a ${{ secrets.HEROKU_APP_NAME }}"),
  name = Some("Heroku - Deploy"),
  env = Map("HEROKU_API_KEY" -> "${{ secrets.HEROKU_API_KEY }}")
)

def setupVars(mode: String) = WorkflowStep.Run(
  List(
    raw"""sed '/^[[:blank:]]*[\\.\\}\\@]/d;/^[[:blank:]]*\..*/d;/^[[:blank:]]*$$/d;/\/\/.*/d' common/src/main/webapp/less/variables-$mode.less > vars.css""",
    "cat vars.css"
  ),
  name = Some(s"Setup and expand vars $mode"),
  cond = if (mode == "dark") None else Some("github.event_name != 'pull_request'")
)

def runLinters(mode: String) = WorkflowStep.Use(
  UseRef.Public("wearerequired", "lint-action", "v2.3.0"),
  name = Some(s"Run linters in $mode mode"),
  params = Map(
    "github_token"         -> "${{ secrets.GITHUB_TOKEN }}",
    "prettier"             -> "true",
    "stylelint"            -> "true",
    "stylelint_args"       -> "common/src/main/webapp/sass",
    "stylelint_extensions" -> "css,sass,scss"
  ),
  cond = if (mode == "dark") None else Some("github.event_name != 'pull_request'")
)

ThisBuild / githubWorkflowGeneratedUploadSteps := Seq.empty
ThisBuild / githubWorkflowSbtCommand           := "sbt -v -J-Xmx6g"
ThisBuild / githubWorkflowBuildPreamble ++= Seq(setupNode, npmInstall)
ThisBuild / githubWorkflowEnv += faNpmAuthToken

ThisBuild / githubWorkflowAddedJobs +=
  WorkflowJob(
    "full",
    "full",
    WorkflowStep.Checkout ::
      WorkflowStep.SetupJava(githubWorkflowJavaVersions.value.toList.take(1)) :::
      setupNode ::
      githubWorkflowGeneratedCacheSteps.value.toList :::
      sbtStage ::
      npmInstall ::
      npmBuild ::
      overrideCiCommit ::
      bundlemon ::
      // firebaseDeployReview ::
      // firebaseDeployStaging ::
      Nil,
    scalas = List(scalaVersion.value),
    javas = githubWorkflowJavaVersions.value.toList.take(1),
    cond = Some(allConds(anyConds(masterCond, prCond), geminiRepoCond))
  )

ThisBuild / githubWorkflowAddedJobs +=
  WorkflowJob(
    "heroku",
    "Deploy to Heroku",
    WorkflowStep.Checkout ::
      herokuProvision ::
      WorkflowStep.SetupJava(githubWorkflowJavaVersions.value.toList.take(1)) :::
      setupNode ::
      githubWorkflowGeneratedCacheSteps.value.toList :::
      sbtStage ::
      npmInstall ::
      npmBuild ::
      herokuDeploy ::
      Nil,
    scalas = List(scalaVersion.value),
    javas = githubWorkflowJavaVersions.value.toList.take(1),
    cond = Some(allConds(pushCond, masterCond, geminiRepoCond))
  )

ThisBuild / githubWorkflowAddedJobs +=
  WorkflowJob(
    "lint",
    "Run linters",
    WorkflowStep.Checkout ::
      WorkflowStep.SetupJava(githubWorkflowJavaVersions.value.toList.take(1)) :::
      setupNode ::
      npmInstall ::
      lucumaCssStep ::
      setupVars("dark") ::
      runLinters("dark") ::
      setupVars("light") ::
      runLinters("light") ::
      Nil,
    scalas = List(scalaVersion.value),
    javas = githubWorkflowJavaVersions.value.toList.take(1),
    cond = Some(allConds(anyConds(masterCond, prCond), geminiRepoCond, notDependabotCond))
  )
