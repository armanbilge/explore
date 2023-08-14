'use strict';
import * as $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9 from "./internal-030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.js";
function $is_Lorg_log4s_LogLevel(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_log4s_LogLevel)))
}
function $isArrayOf_Lorg_log4s_LogLevel(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_log4s_LogLevel)))
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_ExceptionInfo$() {
  /*<skip>*/
}
$c_Lorg_log4s_log4sjs_ExceptionInfo$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_ExceptionInfo$.prototype.constructor = $c_Lorg_log4s_log4sjs_ExceptionInfo$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_ExceptionInfo$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_ExceptionInfo$.prototype = $c_Lorg_log4s_log4sjs_ExceptionInfo$.prototype;
$c_Lorg_log4s_log4sjs_ExceptionInfo$.prototype.apply__jl_Throwable__Lorg_log4s_log4sjs_ExceptionInfo = (function(t) {
  var this$1 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_Option$().apply__O__s_Option(t);
  if (this$1.isEmpty__Z()) {
    var this$2 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$()
  } else {
    var arg1 = this$1.get__O();
    var _$1 = arg1;
    var this$2 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some(new ($a_Lorg_log4s_log4sjs_ExceptionInfo$ThrowableException())(_$1))
  };
  return (this$2.isEmpty__Z() ? $m_Lorg_log4s_log4sjs_ExceptionInfo$NoException$() : this$2.get__O())
});
$c_Lorg_log4s_log4sjs_ExceptionInfo$.prototype.apply__sjs_js_Error__Lorg_log4s_log4sjs_ExceptionInfo = (function(e) {
  var this$1 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_Option$().apply__O__s_Option(e);
  if (this$1.isEmpty__Z()) {
    var this$2 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$()
  } else {
    var arg1 = this$1.get__O();
    var this$2 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some(new ($a_Lorg_log4s_log4sjs_ExceptionInfo$JsErrorException())(arg1))
  };
  return (this$2.isEmpty__Z() ? $m_Lorg_log4s_log4sjs_ExceptionInfo$NoException$() : this$2.get__O())
});
var $d_Lorg_log4s_log4sjs_ExceptionInfo$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_ExceptionInfo$: 0
}, false, "org.log4s.log4sjs.ExceptionInfo$", {
  Lorg_log4s_log4sjs_ExceptionInfo$: 1,
  O: 1
});
$c_Lorg_log4s_log4sjs_ExceptionInfo$.prototype.$classData = $d_Lorg_log4s_log4sjs_ExceptionInfo$;
var $n_Lorg_log4s_log4sjs_ExceptionInfo$;
function $m_Lorg_log4s_log4sjs_ExceptionInfo$() {
  if ((!$n_Lorg_log4s_log4sjs_ExceptionInfo$)) {
    $n_Lorg_log4s_log4sjs_ExceptionInfo$ = new $c_Lorg_log4s_log4sjs_ExceptionInfo$()
  };
  return $n_Lorg_log4s_log4sjs_ExceptionInfo$
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_LevelThreshold$() {
  /*<skip>*/
}
$c_Lorg_log4s_log4sjs_LevelThreshold$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_LevelThreshold$.prototype.constructor = $c_Lorg_log4s_log4sjs_LevelThreshold$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_LevelThreshold$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_LevelThreshold$.prototype = $c_Lorg_log4s_log4sjs_LevelThreshold$.prototype;
$c_Lorg_log4s_log4sjs_LevelThreshold$.prototype.unapply__Lorg_log4s_log4sjs_LogThreshold__s_Option = (function(lt) {
  if ((lt instanceof $c_Lorg_log4s_log4sjs_LevelThreshold)) {
    var lt$2 = ((lt === null) ? null : lt.Lorg_log4s_log4sjs_LevelThreshold__f_inner);
    return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some(lt$2)
  } else {
    return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$()
  }
});
$c_Lorg_log4s_log4sjs_LevelThreshold$.prototype.equals$extension__Lorg_log4s_LogLevel__O__Z = (function(this$, x$0) {
  if ((x$0 instanceof $c_Lorg_log4s_log4sjs_LevelThreshold)) {
    var x$0$2 = ((x$0 === null) ? null : x$0.Lorg_log4s_log4sjs_LevelThreshold__f_inner);
    return (this$ === x$0$2)
  } else {
    return false
  }
});
var $d_Lorg_log4s_log4sjs_LevelThreshold$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_LevelThreshold$: 0
}, false, "org.log4s.log4sjs.LevelThreshold$", {
  Lorg_log4s_log4sjs_LevelThreshold$: 1,
  O: 1
});
$c_Lorg_log4s_log4sjs_LevelThreshold$.prototype.$classData = $d_Lorg_log4s_log4sjs_LevelThreshold$;
var $n_Lorg_log4s_log4sjs_LevelThreshold$;
function $m_Lorg_log4s_log4sjs_LevelThreshold$() {
  if ((!$n_Lorg_log4s_log4sjs_LevelThreshold$)) {
    $n_Lorg_log4s_log4sjs_LevelThreshold$ = new $c_Lorg_log4s_log4sjs_LevelThreshold$()
  };
  return $n_Lorg_log4s_log4sjs_LevelThreshold$
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4s$() {
  this.Lorg_log4s_log4sjs_Log4s$__f_Config = null;
  this.Lorg_log4s_log4sjs_Log4s$__f_MDC = null;
  this.Lorg_log4s_log4sjs_Log4s$__f_LogThreshold = null;
  $n_Lorg_log4s_log4sjs_Log4s$ = this;
  this.Lorg_log4s_log4sjs_Log4s$__f_Config = $m_Lorg_log4s_log4sjs_Log4sConfig$();
  this.Lorg_log4s_log4sjs_Log4s$__f_MDC = $m_Lorg_log4s_log4sjs_Log4sMDC$();
  this.Lorg_log4s_log4sjs_Log4s$__f_LogThreshold = new $c_Lorg_log4s_log4sjs_Log4s$$anon$1();
  new $c_Lorg_log4s_log4sjs_Log4s$$anon$2()
}
$c_Lorg_log4s_log4sjs_Log4s$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4s$.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4s$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4s$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4s$.prototype = $c_Lorg_log4s_log4sjs_Log4s$.prototype;
Object.defineProperty($c_Lorg_log4s_log4sjs_Log4s$.prototype, "MDC", {
  "get": (function() {
    return this.Lorg_log4s_log4sjs_Log4s$__f_MDC
  }),
  "configurable": true
});
Object.defineProperty($c_Lorg_log4s_log4sjs_Log4s$.prototype, "Config", {
  "get": (function() {
    return this.Lorg_log4s_log4sjs_Log4s$__f_Config
  }),
  "configurable": true
});
Object.defineProperty($c_Lorg_log4s_log4sjs_Log4s$.prototype, "LogThreshold", {
  "get": (function() {
    return this.Lorg_log4s_log4sjs_Log4s$__f_LogThreshold
  }),
  "configurable": true
});
$c_Lorg_log4s_log4sjs_Log4s$.prototype.getLogger = (function(arg) {
  var prep0 = arg;
  var this$1 = $m_Lorg_slf4j_LoggerFactory$();
  return new $c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance(this$1, prep0)
});
var $d_Lorg_log4s_log4sjs_Log4s$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4s$: 0
}, false, "org.log4s.log4sjs.Log4s$", {
  Lorg_log4s_log4sjs_Log4s$: 1,
  O: 1
});
$c_Lorg_log4s_log4sjs_Log4s$.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4s$;
var $n_Lorg_log4s_log4sjs_Log4s$;
function $m_Lorg_log4s_log4sjs_Log4s$() {
  if ((!$n_Lorg_log4s_log4sjs_Log4s$)) {
    $n_Lorg_log4s_log4sjs_Log4s$ = new $c_Lorg_log4s_log4sjs_Log4s$()
  };
  return $n_Lorg_log4s_log4sjs_Log4s$
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4s$$anon$1() {
  this.Lorg_log4s_log4sjs_Log4s$$anon$1__f_AllThreshold = null;
  this.Lorg_log4s_log4sjs_Log4s$$anon$1__f_OffThreshold = null;
  this.Lorg_log4s_log4sjs_Log4s$$anon$1__f_AllThreshold = $m_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$();
  this.Lorg_log4s_log4sjs_Log4s$$anon$1__f_OffThreshold = $m_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$()
}
$c_Lorg_log4s_log4sjs_Log4s$$anon$1.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4s$$anon$1.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4s$$anon$1;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4s$$anon$1() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4s$$anon$1.prototype = $c_Lorg_log4s_log4sjs_Log4s$$anon$1.prototype;
Object.defineProperty($c_Lorg_log4s_log4sjs_Log4s$$anon$1.prototype, "AllThreshold", {
  "get": (function() {
    return this.Lorg_log4s_log4sjs_Log4s$$anon$1__f_AllThreshold
  }),
  "configurable": true
});
Object.defineProperty($c_Lorg_log4s_log4sjs_Log4s$$anon$1.prototype, "OffThreshold", {
  "get": (function() {
    return this.Lorg_log4s_log4sjs_Log4s$$anon$1__f_OffThreshold
  }),
  "configurable": true
});
var $d_Lorg_log4s_log4sjs_Log4s$$anon$1 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4s$$anon$1: 0
}, false, "org.log4s.log4sjs.Log4s$$anon$1", {
  Lorg_log4s_log4sjs_Log4s$$anon$1: 1,
  O: 1
});
$c_Lorg_log4s_log4sjs_Log4s$$anon$1.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4s$$anon$1;
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4s$$anon$2() {
  this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Trace = null;
  this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Debug = null;
  this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Info = null;
  this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Warn = null;
  this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Error = null;
  this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Trace = $m_Lorg_log4s_Trace$();
  this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Debug = $m_Lorg_log4s_Debug$();
  this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Info = $m_Lorg_log4s_Info$();
  this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Warn = $m_Lorg_log4s_Warn$();
  this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Error = $m_Lorg_log4s_Error$()
}
$c_Lorg_log4s_log4sjs_Log4s$$anon$2.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4s$$anon$2.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4s$$anon$2;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4s$$anon$2() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4s$$anon$2.prototype = $c_Lorg_log4s_log4sjs_Log4s$$anon$2.prototype;
Object.defineProperty($c_Lorg_log4s_log4sjs_Log4s$$anon$2.prototype, "Info", {
  "get": (function() {
    return this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Info
  }),
  "configurable": true
});
Object.defineProperty($c_Lorg_log4s_log4sjs_Log4s$$anon$2.prototype, "Error", {
  "get": (function() {
    return this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Error
  }),
  "configurable": true
});
Object.defineProperty($c_Lorg_log4s_log4sjs_Log4s$$anon$2.prototype, "Warn", {
  "get": (function() {
    return this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Warn
  }),
  "configurable": true
});
Object.defineProperty($c_Lorg_log4s_log4sjs_Log4s$$anon$2.prototype, "Debug", {
  "get": (function() {
    return this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Debug
  }),
  "configurable": true
});
Object.defineProperty($c_Lorg_log4s_log4sjs_Log4s$$anon$2.prototype, "Trace", {
  "get": (function() {
    return this.Lorg_log4s_log4sjs_Log4s$$anon$2__f_Trace
  }),
  "configurable": true
});
var $d_Lorg_log4s_log4sjs_Log4s$$anon$2 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4s$$anon$2: 0
}, false, "org.log4s.log4sjs.Log4s$$anon$2", {
  Lorg_log4s_log4sjs_Log4s$$anon$2: 1,
  O: 1
});
$c_Lorg_log4s_log4sjs_Log4s$$anon$2.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4s$$anon$2;
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4sConfig$Node(children, state) {
  this.Lorg_log4s_log4sjs_Log4sConfig$Node__f_children = null;
  this.Lorg_log4s_log4sjs_Log4sConfig$Node__f_state = null;
  this.Lorg_log4s_log4sjs_Log4sConfig$Node__f_children = children;
  this.Lorg_log4s_log4sjs_Log4sConfig$Node__f_state = state
}
$c_Lorg_log4s_log4sjs_Log4sConfig$Node.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4sConfig$Node.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4sConfig$Node;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4sConfig$Node() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4sConfig$Node.prototype = $c_Lorg_log4s_log4sjs_Log4sConfig$Node.prototype;
function $isArrayOf_Lorg_log4s_log4sjs_Log4sConfig$Node(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_log4s_log4sjs_Log4sConfig$Node)))
}
var $d_Lorg_log4s_log4sjs_Log4sConfig$Node = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4sConfig$Node: 0
}, false, "org.log4s.log4sjs.Log4sConfig$Node", {
  Lorg_log4s_log4sjs_Log4sConfig$Node: 1,
  O: 1
});
$c_Lorg_log4s_log4sjs_Log4sConfig$Node.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4sConfig$Node;
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4sConsoleAppender$() {
  /*<skip>*/
}
$c_Lorg_log4s_log4sjs_Log4sConsoleAppender$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4sConsoleAppender$.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4sConsoleAppender$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4sConsoleAppender$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4sConsoleAppender$.prototype = $c_Lorg_log4s_log4sjs_Log4sConsoleAppender$.prototype;
$c_Lorg_log4s_log4sjs_Log4sConsoleAppender$.prototype.$lessinit$greater$default$1__Lorg_log4s_log4sjs_MessageFormatter = (function() {
  return new ($a_Lorg_log4s_log4sjs_StandardMessageFormatter())()
});
var $d_Lorg_log4s_log4sjs_Log4sConsoleAppender$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4sConsoleAppender$: 0
}, false, "org.log4s.log4sjs.Log4sConsoleAppender$", {
  Lorg_log4s_log4sjs_Log4sConsoleAppender$: 1,
  O: 1
});
$c_Lorg_log4s_log4sjs_Log4sConsoleAppender$.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4sConsoleAppender$;
var $n_Lorg_log4s_log4sjs_Log4sConsoleAppender$;
function $m_Lorg_log4s_log4sjs_Log4sConsoleAppender$() {
  if ((!$n_Lorg_log4s_log4sjs_Log4sConsoleAppender$)) {
    $n_Lorg_log4s_log4sjs_Log4sConsoleAppender$ = new $c_Lorg_log4s_log4sjs_Log4sConsoleAppender$()
  };
  return $n_Lorg_log4s_log4sjs_Log4sConsoleAppender$
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4sMDC$() {
  /*<skip>*/
}
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4sMDC$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4sMDC$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4sMDC$.prototype = $c_Lorg_log4s_log4sjs_Log4sMDC$.prototype;
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.get__T__T = (function(key) {
  var this$2 = $m_Lorg_log4s_MDC$().get__T__s_Option(key);
  $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_$less$colon$less$();
  return (this$2.isEmpty__Z() ? null : this$2.get__O())
});
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.update__T__T__V = (function(key, value) {
  var x1 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_Option$().apply__O__s_Option(value);
  if ((x1 instanceof $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some)) {
    var this$1 = $m_Lorg_log4s_MDC$();
    $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_scm_MapOps__update__O__O__V(this$1, key, value);
    return (void 0)
  };
  var x = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$();
  if ((x === x1)) {
    var this$2 = $m_Lorg_log4s_MDC$();
    this$2.subtractOne__T__Lorg_log4s_MDC$(key);
    return (void 0)
  };
  throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(x1)
});
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.getCopyOfContextMap__sjs_js_Dictionary = (function() {
  var this$2 = $m_Lorg_log4s_MDC$();
  $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_$less$colon$less$();
  var map = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this$2);
  var result = {};
  map.foreach__F1__V(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction1(((x0$1$2) => {
    var x0$1 = x0$1$2;
    if ((x0$1 !== null)) {
      var key = x0$1._1__O();
      var value = x0$1._2__O();
      result[key] = value
    } else {
      throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(x0$1)
    }
  })));
  return result
});
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.withCtx__T__T__sjs_js_Function1 = (function(key, value) {
  var properties = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$d_T2.getArrayOf().constr)([$j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_T2__O__O__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_T2(), key, value)]));
  return this.withCtx__sjs_js_Dictionary__sjs_js_Function1($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(properties))
});
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.withCtx__sjs_js_Dictionary__sjs_js_Function1 = (function(values) {
  return ((fn) => {
    var this$4 = $m_Lorg_log4s_MDC$();
    var this$3 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjs_js_WrappedDictionary(values);
    var kvs = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sci_Seq$().from__sc_IterableOnce__sci_Seq(this$3);
    var this$8 = ($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_$less$colon$less$(), $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sci_Map$().from__sc_IterableOnce__sci_Map(kvs)).withFilter__F1__sc_MapOps$WithFilter(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction1(((x$1) => {
      var x$1$1 = x$1;
      return ((x$1$1 !== null) && (x$1$1._1__O(), x$1$1._2__O(), true))
    }))).map__F1__sc_IterableOps(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction1(((x$1$2) => {
      var x$1$3 = x$1$2;
      if ((x$1$3 !== null)) {
        var a$1 = x$1$3._1__O();
        var b$1 = x$1$3._2__O();
        var _2 = this$4.get__T__s_Option(a$1);
        var tmp = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_T2__O__O__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_T2(), a$1, _2);
        $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_scm_MapOps__update__O__O__V(this$4, a$1, b$1);
        return tmp
      };
      throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(x$1$3)
    })));
    $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_$less$colon$less$();
    try {
      return fn()
    } finally {
      var this$9 = this$8.withFilter__F1__sc_MapOps$WithFilter(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction1(((x$1$3$1) => {
        var x$1$4 = x$1$3$1;
        return ((x$1$4 !== null) && (x$1$4._1__O(), x$1$4._2__O(), true))
      })));
      var f = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction1(((x$1$4$1) => {
        var x$1$5 = x$1$4$1;
        if ((x$1$5 !== null)) {
          var a$3 = x$1$5._1__O();
          var o$1 = x$1$5._2__O();
          var x = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$();
          if ((x === o$1)) {
            return this$4.subtractOne__T__Lorg_log4s_MDC$(a$3)
          };
          if ((o$1 instanceof $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some)) {
            var v = o$1.s_Some__f_value;
            $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_scm_MapOps__update__O__O__V(this$4, a$3, v);
            return (void 0)
          };
          throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(o$1)
        };
        throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(x$1$5)
      }));
      this$9.filtered__sc_Iterable().foreach__F1__V(f)
    }
  })
});
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.get = (function(arg) {
  var prep0 = arg;
  return this.get__T__T(prep0)
});
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.withCtx = (function(arg, ...rest) {
  switch ((rest.length | 0)) {
    case 0: {
      return this.withCtx__sjs_js_Dictionary__sjs_js_Function1(arg);
      break
    }
    case 1: {
      var prep0$2 = arg;
      var prep1 = rest[0];
      return this.withCtx__T__T__sjs_js_Function1(prep0$2, prep1);
      break
    }
    default: {
      throw new TypeError("No matching overload")
    }
  }
});
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.getCopyOfContextMap = (function() {
  return this.getCopyOfContextMap__sjs_js_Dictionary()
});
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.clear = (function() {
  $m_Lorg_slf4j_MDC$mdc$().clear__V()
});
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.remove = (function(arg) {
  var prep0 = arg;
  var this$1 = $m_Lorg_log4s_MDC$();
  this$1.subtractOne__T__Lorg_log4s_MDC$(prep0)
});
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.update = (function(arg, arg$2) {
  var prep0 = arg;
  var prep1 = arg$2;
  this.update__T__T__V(prep0, prep1)
});
var $d_Lorg_log4s_log4sjs_Log4sMDC$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4sMDC$: 0
}, false, "org.log4s.log4sjs.Log4sMDC$", {
  Lorg_log4s_log4sjs_Log4sMDC$: 1,
  O: 1
});
$c_Lorg_log4s_log4sjs_Log4sMDC$.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4sMDC$;
var $n_Lorg_log4s_log4sjs_Log4sMDC$;
function $m_Lorg_log4s_log4sjs_Log4sMDC$() {
  if ((!$n_Lorg_log4s_log4sjs_Log4sMDC$)) {
    $n_Lorg_log4s_log4sjs_Log4sMDC$ = new $c_Lorg_log4s_log4sjs_Log4sMDC$()
  };
  return $n_Lorg_log4s_log4sjs_Log4sMDC$
}
function $is_Lorg_log4s_log4sjs_LogThreshold(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_log4s_log4sjs_LogThreshold)))
}
function $isArrayOf_Lorg_log4s_log4sjs_LogThreshold(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_log4s_log4sjs_LogThreshold)))
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_LogThreshold$() {
  this.Lorg_log4s_log4sjs_LogThreshold$__f_order = null;
  $n_Lorg_log4s_log4sjs_LogThreshold$ = this;
  $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_package$();
  var f = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction1(((x$1) => {
    var x$1$1 = x$1;
    var x = $m_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$();
    if ((x === x$1$1)) {
      return 2147483647
    };
    if ((x$1$1 !== null)) {
      var x18 = $m_Lorg_log4s_log4sjs_LevelThreshold$().unapply__Lorg_log4s_log4sjs_LogThreshold__s_Option(x$1$1);
      if ((!x18.isEmpty__Z())) {
        var x19 = x18.get__O();
        var x$3 = $m_Lorg_log4s_Error$();
        if ((x$3 === x19)) {
          return 40000
        };
        var x$5 = $m_Lorg_log4s_Warn$();
        if ((x$5 === x19)) {
          return 30000
        };
        var x$7 = $m_Lorg_log4s_Info$();
        if ((x$7 === x19)) {
          return 20000
        };
        var x$9 = $m_Lorg_log4s_Debug$();
        if ((x$9 === x19)) {
          return 10000
        };
        var x$11 = $m_Lorg_log4s_Trace$();
        if ((x$11 === x19)) {
          return 5000
        }
      }
    };
    var x$13 = $m_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$();
    if ((x$13 === x$1$1)) {
      return (-2147483648)
    };
    throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(x$1$1)
  }));
  var ord = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_math_Ordering$Int$();
  this.Lorg_log4s_log4sjs_LogThreshold$__f_order = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_math_Ordering$$anon$5(ord, f)
}
$c_Lorg_log4s_log4sjs_LogThreshold$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_LogThreshold$.prototype.constructor = $c_Lorg_log4s_log4sjs_LogThreshold$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_LogThreshold$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_LogThreshold$.prototype = $c_Lorg_log4s_log4sjs_LogThreshold$.prototype;
var $d_Lorg_log4s_log4sjs_LogThreshold$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_LogThreshold$: 0
}, false, "org.log4s.log4sjs.LogThreshold$", {
  Lorg_log4s_log4sjs_LogThreshold$: 1,
  O: 1
});
$c_Lorg_log4s_log4sjs_LogThreshold$.prototype.$classData = $d_Lorg_log4s_log4sjs_LogThreshold$;
var $n_Lorg_log4s_log4sjs_LogThreshold$;
function $m_Lorg_log4s_log4sjs_LogThreshold$() {
  if ((!$n_Lorg_log4s_log4sjs_LogThreshold$)) {
    $n_Lorg_log4s_log4sjs_LogThreshold$ = new $c_Lorg_log4s_log4sjs_LogThreshold$()
  };
  return $n_Lorg_log4s_log4sjs_LogThreshold$
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_LoggerParser$() {
  /*<skip>*/
}
$c_Lorg_log4s_log4sjs_LoggerParser$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_LoggerParser$.prototype.constructor = $c_Lorg_log4s_log4sjs_LoggerParser$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_LoggerParser$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_LoggerParser$.prototype = $c_Lorg_log4s_log4sjs_LoggerParser$.prototype;
$c_Lorg_log4s_log4sjs_LoggerParser$.prototype.apply__T__sci_Seq = (function(loggerName) {
  var part = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_scm_StringBuilder__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_scm_StringBuilder());
  var result = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sci_Seq$().newBuilder__scm_Builder();
  var len = loggerName.length;
  var i = 0;
  while ((i < len)) {
    matchResult2: {
      $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sc_StringOps$();
      var i$1 = i;
      var x2 = loggerName.charCodeAt(i$1);
      if (((x2 === 92) && (i < (((-1) + len) | 0)))) {
        $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sc_StringOps$();
        var i$2 = ((1 + i) | 0);
        var x1 = loggerName.charCodeAt(i$2);
        matchAlts1: {
          matchAlts2: {
            if ((x1 === 92)) {
              break matchAlts2
            };
            if ((x1 === 46)) {
              break matchAlts2
            };
            break matchAlts1
          };
          part.addOne__C__scm_StringBuilder(x1);
          i = ((1 + i) | 0);
          break matchResult2
        };
        part.addOne__C__scm_StringBuilder(92);
        break matchResult2
      };
      if (((x2 === 46) && (i < (((-1) + len) | 0)))) {
        var elem = part.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content;
        result.addOne__O__scm_Growable(elem);
        part.scm_StringBuilder__f_underlying.setLength__I__V(0);
        break matchResult2
      };
      part.addOne__C__scm_StringBuilder(x2)
    };
    i = ((1 + i) | 0)
  };
  if ((!part.isEmpty__Z())) {
    var elem$1 = part.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    result.addOne__O__scm_Growable(elem$1)
  };
  return result.result__O()
});
var $d_Lorg_log4s_log4sjs_LoggerParser$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_LoggerParser$: 0
}, false, "org.log4s.log4sjs.LoggerParser$", {
  Lorg_log4s_log4sjs_LoggerParser$: 1,
  O: 1
});
$c_Lorg_log4s_log4sjs_LoggerParser$.prototype.$classData = $d_Lorg_log4s_log4sjs_LoggerParser$;
var $n_Lorg_log4s_log4sjs_LoggerParser$;
function $m_Lorg_log4s_log4sjs_LoggerParser$() {
  if ((!$n_Lorg_log4s_log4sjs_LoggerParser$)) {
    $n_Lorg_log4s_log4sjs_LoggerParser$ = new $c_Lorg_log4s_log4sjs_LoggerParser$()
  };
  return $n_Lorg_log4s_log4sjs_LoggerParser$
}
function $is_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat)))
}
function $isArrayOf_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat)))
}
/** @constructor */
function $c_Lorg_slf4j_Logger() {
  /*<skip>*/
}
$c_Lorg_slf4j_Logger.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_slf4j_Logger.prototype.constructor = $c_Lorg_slf4j_Logger;
/** @constructor */
function $h_Lorg_slf4j_Logger() {
  /*<skip>*/
}
$h_Lorg_slf4j_Logger.prototype = $c_Lorg_slf4j_Logger.prototype;
$c_Lorg_slf4j_Logger.prototype.debug = (function(arg, ...rest) {
  switch ((rest.length | 0)) {
    case 0: {
      var prep0 = arg;
      this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Debug$(), prep0, this.doLog$default$3__Lorg_log4s_log4sjs_ExceptionInfo());
      return (void 0);
      break
    }
    case 1: {
      if ((rest[0] instanceof $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_Throwable)) {
        var prep0$3 = arg;
        var prep1$2 = rest[0];
        this.debug__T__jl_Throwable__V(prep0$3, prep1$2);
        return (void 0)
      } else {
        var prep0$2 = arg;
        var prep1 = rest[0];
        this.debug__T__sjs_js_Error__V(prep0$2, prep1);
        return (void 0)
      };
      break
    }
    default: {
      throw new TypeError("No matching overload")
    }
  }
});
$c_Lorg_slf4j_Logger.prototype.isDebugEnabled = (function() {
  return this.isEnabled__Lorg_log4s_LogLevel__Z($m_Lorg_log4s_Debug$())
});
$c_Lorg_slf4j_Logger.prototype.isWarnEnabled = (function() {
  return this.isEnabled__Lorg_log4s_LogLevel__Z($m_Lorg_log4s_Warn$())
});
$c_Lorg_slf4j_Logger.prototype.isErrorEnabled = (function() {
  return this.isEnabled__Lorg_log4s_LogLevel__Z($m_Lorg_log4s_Error$())
});
$c_Lorg_slf4j_Logger.prototype.error = (function(arg, ...rest) {
  switch ((rest.length | 0)) {
    case 0: {
      var prep0 = arg;
      this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Error$(), prep0, this.doLog$default$3__Lorg_log4s_log4sjs_ExceptionInfo());
      return (void 0);
      break
    }
    case 1: {
      if ((rest[0] instanceof $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_Throwable)) {
        var prep0$3 = arg;
        var prep1$2 = rest[0];
        this.error__T__jl_Throwable__V(prep0$3, prep1$2);
        return (void 0)
      } else {
        var prep0$2 = arg;
        var prep1 = rest[0];
        this.error__T__sjs_js_Error__V(prep0$2, prep1);
        return (void 0)
      };
      break
    }
    default: {
      throw new TypeError("No matching overload")
    }
  }
});
$c_Lorg_slf4j_Logger.prototype.info = (function(arg, ...rest) {
  switch ((rest.length | 0)) {
    case 0: {
      var prep0 = arg;
      this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Info$(), prep0, this.doLog$default$3__Lorg_log4s_log4sjs_ExceptionInfo());
      return (void 0);
      break
    }
    case 1: {
      if ((rest[0] instanceof $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_Throwable)) {
        var prep0$3 = arg;
        var prep1$2 = rest[0];
        this.info__T__jl_Throwable__V(prep0$3, prep1$2);
        return (void 0)
      } else {
        var prep0$2 = arg;
        var prep1 = rest[0];
        this.info__T__sjs_js_Error__V(prep0$2, prep1);
        return (void 0)
      };
      break
    }
    default: {
      throw new TypeError("No matching overload")
    }
  }
});
$c_Lorg_slf4j_Logger.prototype.isInfoEnabled = (function() {
  return this.isEnabled__Lorg_log4s_LogLevel__Z($m_Lorg_log4s_Info$())
});
$c_Lorg_slf4j_Logger.prototype.trace = (function(arg, ...rest) {
  switch ((rest.length | 0)) {
    case 0: {
      var prep0 = arg;
      this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Trace$(), prep0, this.doLog$default$3__Lorg_log4s_log4sjs_ExceptionInfo());
      return (void 0);
      break
    }
    case 1: {
      if ((rest[0] instanceof $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_Throwable)) {
        var prep0$3 = arg;
        var prep1$2 = rest[0];
        this.trace__T__jl_Throwable__V(prep0$3, prep1$2);
        return (void 0)
      } else {
        var prep0$2 = arg;
        var prep1 = rest[0];
        this.trace__T__sjs_js_Error__V(prep0$2, prep1);
        return (void 0)
      };
      break
    }
    default: {
      throw new TypeError("No matching overload")
    }
  }
});
$c_Lorg_slf4j_Logger.prototype.isTraceEnabled = (function() {
  return this.isEnabled__Lorg_log4s_LogLevel__Z($m_Lorg_log4s_Trace$())
});
$c_Lorg_slf4j_Logger.prototype.warn = (function(arg, ...rest) {
  switch ((rest.length | 0)) {
    case 0: {
      var prep0 = arg;
      this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Warn$(), prep0, this.doLog$default$3__Lorg_log4s_log4sjs_ExceptionInfo());
      return (void 0);
      break
    }
    case 1: {
      if ((rest[0] instanceof $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_Throwable)) {
        var prep0$3 = arg;
        var prep1$2 = rest[0];
        this.warn__T__jl_Throwable__V(prep0$3, prep1$2);
        return (void 0)
      } else {
        var prep0$2 = arg;
        var prep1 = rest[0];
        this.warn__T__sjs_js_Error__V(prep0$2, prep1);
        return (void 0)
      };
      break
    }
    default: {
      throw new TypeError("No matching overload")
    }
  }
});
$c_Lorg_slf4j_Logger.prototype.getName = (function() {
  return this.Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance__f_name
});
/** @constructor */
function $c_Lorg_slf4j_MDC$() {
  /*<skip>*/
}
$c_Lorg_slf4j_MDC$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_slf4j_MDC$.prototype.constructor = $c_Lorg_slf4j_MDC$;
/** @constructor */
function $h_Lorg_slf4j_MDC$() {
  /*<skip>*/
}
$h_Lorg_slf4j_MDC$.prototype = $c_Lorg_slf4j_MDC$.prototype;
$c_Lorg_slf4j_MDC$.prototype.get__T__T = (function(key) {
  var this$2 = $m_Lorg_slf4j_MDC$mdc$().apply__sci_Map().get__O__s_Option(key);
  $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_$less$colon$less$();
  return (this$2.isEmpty__Z() ? null : this$2.get__O())
});
$c_Lorg_slf4j_MDC$.prototype.getCopyOfContextMap__ju_Map = (function() {
  return $m_sc_JavaConverters$().mapAsJavaMapConverter__sc_Map__sc_JavaConverters$AsJava($m_Lorg_slf4j_MDC$mdc$().apply__sci_Map()).asJava__O()
});
$c_Lorg_slf4j_MDC$.prototype.put__T__T__V = (function(key, val) {
  $m_Lorg_slf4j_MDC$mdc$().update__sci_Map__V($m_Lorg_slf4j_MDC$mdc$().apply__sci_Map().$plus__T2__sci_MapOps($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_T2__O__O__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_T2(), key, val)))
});
$c_Lorg_slf4j_MDC$.prototype.remove__T__V = (function(key) {
  var $$x1 = $m_Lorg_slf4j_MDC$mdc$();
  var this$1 = $m_Lorg_slf4j_MDC$mdc$().apply__sci_Map();
  $$x1.update__sci_Map__V(this$1.removed__O__sci_MapOps(key))
});
var $d_Lorg_slf4j_MDC$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_slf4j_MDC$: 0
}, false, "org.slf4j.MDC$", {
  Lorg_slf4j_MDC$: 1,
  O: 1
});
$c_Lorg_slf4j_MDC$.prototype.$classData = $d_Lorg_slf4j_MDC$;
var $n_Lorg_slf4j_MDC$;
function $m_Lorg_slf4j_MDC$() {
  if ((!$n_Lorg_slf4j_MDC$)) {
    $n_Lorg_slf4j_MDC$ = new $c_Lorg_slf4j_MDC$()
  };
  return $n_Lorg_slf4j_MDC$
}
/** @constructor */
function $c_Lorg_slf4j_MDC$mdc$() {
  this.Lorg_slf4j_MDC$mdc$__f_dynamicMDC = null;
  $n_Lorg_slf4j_MDC$mdc$ = this;
  this.Lorg_slf4j_MDC$mdc$__f_dynamicMDC = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_ThreadLocal__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_ThreadLocal())
}
$c_Lorg_slf4j_MDC$mdc$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_slf4j_MDC$mdc$.prototype.constructor = $c_Lorg_slf4j_MDC$mdc$;
/** @constructor */
function $h_Lorg_slf4j_MDC$mdc$() {
  /*<skip>*/
}
$h_Lorg_slf4j_MDC$mdc$.prototype = $c_Lorg_slf4j_MDC$mdc$.prototype;
$c_Lorg_slf4j_MDC$mdc$.prototype.apply__sci_Map = (function() {
  var $$x1 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_Option$();
  var inner = this.Lorg_slf4j_MDC$mdc$__f_dynamicMDC;
  var this$2 = $$x1.apply__O__s_Option(inner.get__O());
  return (this$2.isEmpty__Z() ? $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sci_Map$EmptyMap$() : this$2.get__O())
});
$c_Lorg_slf4j_MDC$mdc$.prototype.update__sci_Map__V = (function(m) {
  if (m.isEmpty__Z()) {
    this.Lorg_slf4j_MDC$mdc$__f_dynamicMDC.remove__V()
  } else {
    var inner = this.Lorg_slf4j_MDC$mdc$__f_dynamicMDC;
    inner.set__O__V(m)
  }
});
$c_Lorg_slf4j_MDC$mdc$.prototype.clear__V = (function() {
  this.Lorg_slf4j_MDC$mdc$__f_dynamicMDC.remove__V()
});
var $d_Lorg_slf4j_MDC$mdc$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_slf4j_MDC$mdc$: 0
}, false, "org.slf4j.MDC$mdc$", {
  Lorg_slf4j_MDC$mdc$: 1,
  O: 1
});
$c_Lorg_slf4j_MDC$mdc$.prototype.$classData = $d_Lorg_slf4j_MDC$mdc$;
var $n_Lorg_slf4j_MDC$mdc$;
function $m_Lorg_slf4j_MDC$mdc$() {
  if ((!$n_Lorg_slf4j_MDC$mdc$)) {
    $n_Lorg_slf4j_MDC$mdc$ = new $c_Lorg_slf4j_MDC$mdc$()
  };
  return $n_Lorg_slf4j_MDC$mdc$
}
/** @constructor */
function $c_sc_JavaConverters$AsJava(op) {
  this.sc_JavaConverters$AsJava__f_op = null;
  this.sc_JavaConverters$AsJava__f_op = op
}
$c_sc_JavaConverters$AsJava.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_sc_JavaConverters$AsJava.prototype.constructor = $c_sc_JavaConverters$AsJava;
/** @constructor */
function $h_sc_JavaConverters$AsJava() {
  /*<skip>*/
}
$h_sc_JavaConverters$AsJava.prototype = $c_sc_JavaConverters$AsJava.prototype;
$c_sc_JavaConverters$AsJava.prototype.asJava__O = (function() {
  return this.sc_JavaConverters$AsJava__f_op.apply__O()
});
var $d_sc_JavaConverters$AsJava = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  sc_JavaConverters$AsJava: 0
}, false, "scala.collection.JavaConverters$AsJava", {
  sc_JavaConverters$AsJava: 1,
  O: 1
});
$c_sc_JavaConverters$AsJava.prototype.$classData = $d_sc_JavaConverters$AsJava;
/** @constructor */
function $c_sc_JavaConverters$AsScala(op) {
  this.sc_JavaConverters$AsScala__f_op = null;
  this.sc_JavaConverters$AsScala__f_op = op
}
$c_sc_JavaConverters$AsScala.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_sc_JavaConverters$AsScala.prototype.constructor = $c_sc_JavaConverters$AsScala;
/** @constructor */
function $h_sc_JavaConverters$AsScala() {
  /*<skip>*/
}
$h_sc_JavaConverters$AsScala.prototype = $c_sc_JavaConverters$AsScala.prototype;
$c_sc_JavaConverters$AsScala.prototype.asScala__O = (function() {
  return this.sc_JavaConverters$AsScala__f_op.apply__O()
});
var $d_sc_JavaConverters$AsScala = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  sc_JavaConverters$AsScala: 0
}, false, "scala.collection.JavaConverters$AsScala", {
  sc_JavaConverters$AsScala: 1,
  O: 1
});
$c_sc_JavaConverters$AsScala.prototype.$classData = $d_sc_JavaConverters$AsScala;
/** @constructor */
function $c_Lorg_log4s_log4sjs_LevelThreshold(inner) {
  this.Lorg_log4s_log4sjs_LevelThreshold__f_inner = null;
  this.Lorg_log4s_log4sjs_LevelThreshold__f_inner = inner
}
$c_Lorg_log4s_log4sjs_LevelThreshold.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_LevelThreshold.prototype.constructor = $c_Lorg_log4s_log4sjs_LevelThreshold;
/** @constructor */
function $h_Lorg_log4s_log4sjs_LevelThreshold() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_LevelThreshold.prototype = $c_Lorg_log4s_log4sjs_LevelThreshold.prototype;
$c_Lorg_log4s_log4sjs_LevelThreshold.prototype.hashCode__I = (function() {
  var this$ = this.Lorg_log4s_log4sjs_LevelThreshold__f_inner;
  return this$.hashCode__I()
});
$c_Lorg_log4s_log4sjs_LevelThreshold.prototype.equals__O__Z = (function(x$0) {
  return $m_Lorg_log4s_log4sjs_LevelThreshold$().equals$extension__Lorg_log4s_LogLevel__O__Z(this.Lorg_log4s_log4sjs_LevelThreshold__f_inner, x$0)
});
function $isArrayOf_Lorg_log4s_log4sjs_LevelThreshold(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_log4s_log4sjs_LevelThreshold)))
}
var $d_Lorg_log4s_log4sjs_LevelThreshold = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_LevelThreshold: 0
}, false, "org.log4s.log4sjs.LevelThreshold", {
  Lorg_log4s_log4sjs_LevelThreshold: 1,
  O: 1,
  Lorg_log4s_log4sjs_LogThreshold: 1
});
$c_Lorg_log4s_log4sjs_LevelThreshold.prototype.$classData = $d_Lorg_log4s_log4sjs_LevelThreshold;
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4sConfig$() {
  this.Lorg_log4s_log4sjs_Log4sConfig$__f_standardAppender$lzy1 = null;
  this.Lorg_log4s_log4sjs_Log4sConfig$__f_standardAppenderbitmap$1 = false;
  this.Lorg_log4s_log4sjs_Log4sConfig$__f_defaultAppenderSetting$lzy1 = null;
  this.Lorg_log4s_log4sjs_Log4sConfig$__f_defaultAppenderSettingbitmap$1 = false;
  this.Lorg_log4s_log4sjs_Log4sConfig$__f_emptyLoggerState$lzy1 = null;
  this.Lorg_log4s_log4sjs_Log4sConfig$__f_emptyLoggerStatebitmap$1 = false
}
$c_Lorg_log4s_log4sjs_Log4sConfig$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4sConfig$.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4sConfig$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4sConfig$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4sConfig$.prototype = $c_Lorg_log4s_log4sjs_Log4sConfig$.prototype;
$c_Lorg_log4s_log4sjs_Log4sConfig$.prototype.org$log4s$log4sjs$Log4sConfig$$$standardAppender__Lorg_log4s_log4sjs_Log4sConsoleAppender = (function() {
  if ((!this.Lorg_log4s_log4sjs_Log4sConfig$__f_standardAppenderbitmap$1)) {
    this.Lorg_log4s_log4sjs_Log4sConfig$__f_standardAppender$lzy1 = new ($a_Lorg_log4s_log4sjs_Log4sConsoleAppender())();
    this.Lorg_log4s_log4sjs_Log4sConfig$__f_standardAppenderbitmap$1 = true
  };
  return this.Lorg_log4s_log4sjs_Log4sConfig$__f_standardAppender$lzy1
});
$c_Lorg_log4s_log4sjs_Log4sConfig$.prototype.org$log4s$log4sjs$Log4sConfig$$$defaultAppenderSetting__Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting = (function() {
  if ((!this.Lorg_log4s_log4sjs_Log4sConfig$__f_defaultAppenderSettingbitmap$1)) {
    var appenders = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_package$().s_package$__f_Nil;
    this.Lorg_log4s_log4sjs_Log4sConfig$__f_defaultAppenderSetting$lzy1 = new $c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting(appenders, true);
    this.Lorg_log4s_log4sjs_Log4sConfig$__f_defaultAppenderSettingbitmap$1 = true
  };
  return this.Lorg_log4s_log4sjs_Log4sConfig$__f_defaultAppenderSetting$lzy1
});
$c_Lorg_log4s_log4sjs_Log4sConfig$.prototype.org$log4s$log4sjs$Log4sConfig$$$emptyLoggerState__Lorg_log4s_log4sjs_Log4sConfig$LoggerState = (function() {
  if ((!this.Lorg_log4s_log4sjs_Log4sConfig$__f_emptyLoggerStatebitmap$1)) {
    $m_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$();
    $m_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$();
    var threshold = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$();
    $m_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$();
    var appenders = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$();
    this.Lorg_log4s_log4sjs_Log4sConfig$__f_emptyLoggerState$lzy1 = new $c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState(threshold, appenders);
    this.Lorg_log4s_log4sjs_Log4sConfig$__f_emptyLoggerStatebitmap$1 = true
  };
  return this.Lorg_log4s_log4sjs_Log4sConfig$__f_emptyLoggerState$lzy1
});
$c_Lorg_log4s_log4sjs_Log4sConfig$.prototype.doLog__Lorg_log4s_log4sjs_LoggedEvent__V = (function(e) {
  var state = $m_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$().apply__sci_Seq__Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState(e.loggerPath);
  if (state.isEnabled__Lorg_log4s_LogLevel__Z(e.level)) {
    state.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_appenders.foreach__F1__V(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction1(((appender) => {
      appender.append(e)
    })))
  }
});
$c_Lorg_log4s_log4sjs_Log4sConfig$.prototype.isPathEnabled__sci_Seq__Lorg_log4s_LogLevel__Z = (function(path, ll) {
  return $m_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$().apply__sci_Seq__Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState(path).isEnabled__Lorg_log4s_LogLevel__Z(ll)
});
var $d_Lorg_log4s_log4sjs_Log4sConfig$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4sConfig$: 0
}, false, "org.log4s.log4sjs.Log4sConfig$", {
  Lorg_log4s_log4sjs_Log4sConfig$: 1,
  O: 1,
  Lorg_log4s_log4sjs_Log4sConfig: 1
});
$c_Lorg_log4s_log4sjs_Log4sConfig$.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4sConfig$;
var $n_Lorg_log4s_log4sjs_Log4sConfig$;
function $m_Lorg_log4s_log4sjs_Log4sConfig$() {
  if ((!$n_Lorg_log4s_log4sjs_Log4sConfig$)) {
    $n_Lorg_log4s_log4sjs_Log4sConfig$ = new $c_Lorg_log4s_log4sjs_Log4sConfig$()
  };
  return $n_Lorg_log4s_log4sjs_Log4sConfig$
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4sLoggerFactory() {
  /*<skip>*/
}
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4sLoggerFactory;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4sLoggerFactory() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4sLoggerFactory.prototype = $c_Lorg_log4s_log4sjs_Log4sLoggerFactory.prototype;
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance(outer, name) {
  this.Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance__f_name = null;
  this.Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance__f_path = null;
  this.Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance__f_$outer = null;
  this.Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance__f_name = name;
  if ((outer === null)) {
    throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_NullPointerException__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_NullPointerException())
  };
  this.Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance__f_$outer = outer;
  this.Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance__f_path = $m_Lorg_log4s_log4sjs_LoggerParser$().apply__T__sci_Seq(name)
}
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype = new $h_Lorg_slf4j_Logger();
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype = $c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype;
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.isEnabled__Lorg_log4s_LogLevel__Z = (function(level) {
  return $m_Lorg_log4s_log4sjs_Log4sConfig$().isPathEnabled__sci_Seq__Lorg_log4s_LogLevel__Z(this.Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance__f_path, level)
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V = (function(level, message, throwable) {
  var event = new ($a_Lorg_log4s_log4sjs_Log4sEvent())(this.Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance__f_name, this.Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance__f_path, level, message, $m_Lorg_slf4j_MDC$mdc$().apply__sci_Map(), $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_jl_Thread$().jl_Thread$__f_SingleThread.jl_Thread__f_name, throwable, new Date());
  $m_Lorg_log4s_log4sjs_Log4sConfig$().doLog__Lorg_log4s_log4sjs_LoggedEvent__V(event)
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.doLog$default$3__Lorg_log4s_log4sjs_ExceptionInfo = (function() {
  return $m_Lorg_log4s_log4sjs_ExceptionInfo$NoException$()
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.trace__T__jl_Throwable__V = (function(message, t) {
  this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Trace$(), message, $m_Lorg_log4s_log4sjs_ExceptionInfo$().apply__jl_Throwable__Lorg_log4s_log4sjs_ExceptionInfo(t))
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.trace__T__sjs_js_Error__V = (function(message, e) {
  this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Trace$(), message, $m_Lorg_log4s_log4sjs_ExceptionInfo$().apply__sjs_js_Error__Lorg_log4s_log4sjs_ExceptionInfo(e))
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.debug__T__jl_Throwable__V = (function(message, t) {
  this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Debug$(), message, $m_Lorg_log4s_log4sjs_ExceptionInfo$().apply__jl_Throwable__Lorg_log4s_log4sjs_ExceptionInfo(t))
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.debug__T__sjs_js_Error__V = (function(message, e) {
  this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Debug$(), message, $m_Lorg_log4s_log4sjs_ExceptionInfo$().apply__sjs_js_Error__Lorg_log4s_log4sjs_ExceptionInfo(e))
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.info__T__jl_Throwable__V = (function(message, t) {
  this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Info$(), message, $m_Lorg_log4s_log4sjs_ExceptionInfo$().apply__jl_Throwable__Lorg_log4s_log4sjs_ExceptionInfo(t))
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.info__T__sjs_js_Error__V = (function(message, e) {
  this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Info$(), message, $m_Lorg_log4s_log4sjs_ExceptionInfo$().apply__sjs_js_Error__Lorg_log4s_log4sjs_ExceptionInfo(e))
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.warn__T__jl_Throwable__V = (function(message, t) {
  this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Warn$(), message, $m_Lorg_log4s_log4sjs_ExceptionInfo$().apply__jl_Throwable__Lorg_log4s_log4sjs_ExceptionInfo(t))
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.warn__T__sjs_js_Error__V = (function(message, e) {
  this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Warn$(), message, $m_Lorg_log4s_log4sjs_ExceptionInfo$().apply__sjs_js_Error__Lorg_log4s_log4sjs_ExceptionInfo(e))
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.error__T__jl_Throwable__V = (function(message, t) {
  this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Error$(), message, $m_Lorg_log4s_log4sjs_ExceptionInfo$().apply__jl_Throwable__Lorg_log4s_log4sjs_ExceptionInfo(t))
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.error__T__sjs_js_Error__V = (function(message, e) {
  this.doLog__Lorg_log4s_LogLevel__T__Lorg_log4s_log4sjs_ExceptionInfo__V($m_Lorg_log4s_Error$(), message, $m_Lorg_log4s_log4sjs_ExceptionInfo$().apply__sjs_js_Error__Lorg_log4s_log4sjs_ExceptionInfo(e))
});
var $d_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance: 0
}, false, "org.log4s.log4sjs.Log4sLoggerFactory$Log4sLoggerInstance", {
  Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance: 1,
  Lorg_slf4j_Logger: 1,
  O: 1
});
$c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance;
var $b_Lorg_log4s_log4sjs_ExceptionInfo;
function $a_Lorg_log4s_log4sjs_ExceptionInfo() {
  if ((!$b_Lorg_log4s_log4sjs_ExceptionInfo)) {
    $b_Lorg_log4s_log4sjs_ExceptionInfo = class $b_Lorg_log4s_log4sjs_ExceptionInfo extends Object {
      constructor() {
        super()
      };
    }
  };
  return $b_Lorg_log4s_log4sjs_ExceptionInfo
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$() {
  this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState$__f_defaultRootState = null;
  this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState$__f_root = null;
  $n_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$ = this;
  var threshold = $m_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$();
  var appenders = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_package$().s_package$__f_Seq.apply__sci_Seq__sc_SeqOps($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_log4s_log4sjs_Log4sConsoleAppender.getArrayOf().constr)([$m_Lorg_log4s_log4sjs_Log4sConfig$().org$log4s$log4sjs$Log4sConfig$$$standardAppender__Lorg_log4s_log4sjs_Log4sConsoleAppender()])));
  this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState$__f_defaultRootState = new $c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState(threshold, appenders);
  this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState$__f_root = new $c_Lorg_log4s_log4sjs_Log4sConfig$Node($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_scm_Map$().empty__O(), $m_Lorg_log4s_log4sjs_Log4sConfig$().org$log4s$log4sjs$Log4sConfig$$$emptyLoggerState__Lorg_log4s_log4sjs_Log4sConfig$LoggerState())
}
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$.prototype = $c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$.prototype;
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$.prototype.toString__T = (function() {
  return "LoggerState"
});
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$.prototype.apply__sci_Seq__Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState = (function(parts) {
  var tree = this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState$__f_root.Lorg_log4s_log4sjs_Log4sConfig$Node__f_children;
  var state = this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState$__f_defaultRootState.withChild__Lorg_log4s_log4sjs_Log4sConfig$LoggerState__Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState(this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState$__f_root.Lorg_log4s_log4sjs_Log4sConfig$Node__f_state);
  var path$tailLocal1 = parts;
  var state$tailLocal1 = state;
  var tree$tailLocal1 = tree;
  while (true) {
    if (path$tailLocal1.isEmpty__Z()) {
      return state$tailLocal1
    } else {
      var x17 = tree$tailLocal1.get__O__s_Option(path$tailLocal1.head__O());
      var x = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$();
      if ((x === x17)) {
        return state$tailLocal1
      };
      if ((x17 instanceof $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some)) {
        var n = x17.s_Some__f_value;
        var tree$tailLocal1$tmp1 = n.Lorg_log4s_log4sjs_Log4sConfig$Node__f_children;
        var state$tailLocal1$tmp1 = state$tailLocal1.withChild__Lorg_log4s_log4sjs_Log4sConfig$LoggerState__Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState(n.Lorg_log4s_log4sjs_Log4sConfig$Node__f_state);
        var path$tailLocal1$tmp1 = path$tailLocal1.tail__O();
        tree$tailLocal1 = tree$tailLocal1$tmp1;
        state$tailLocal1 = state$tailLocal1$tmp1;
        path$tailLocal1 = path$tailLocal1$tmp1;
        continue
      };
      throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(x17)
    }
  }
});
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$.prototype.fromProduct__s_Product__Lorg_log4s_log4sjs_Log4sConfig$LoggerState = (function(x$0) {
  return new $c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState(x$0.productElement__I__O(0), x$0.productElement__I__O(1))
});
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$.prototype.fromProduct__s_Product__O = (function(p) {
  return this.fromProduct__s_Product__Lorg_log4s_log4sjs_Log4sConfig$LoggerState(p)
});
var $d_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4sConfig$LoggerState$: 0
}, false, "org.log4s.log4sjs.Log4sConfig$LoggerState$", {
  Lorg_log4s_log4sjs_Log4sConfig$LoggerState$: 1,
  O: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1
});
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$;
var $n_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$;
function $m_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$() {
  if ((!$n_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$)) {
    $n_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$ = new $c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$()
  };
  return $n_Lorg_log4s_log4sjs_Log4sConfig$LoggerState$
}
/** @constructor */
function $c_Lorg_slf4j_LoggerFactory$() {
  /*<skip>*/
}
$c_Lorg_slf4j_LoggerFactory$.prototype = new $h_Lorg_log4s_log4sjs_Log4sLoggerFactory();
$c_Lorg_slf4j_LoggerFactory$.prototype.constructor = $c_Lorg_slf4j_LoggerFactory$;
/** @constructor */
function $h_Lorg_slf4j_LoggerFactory$() {
  /*<skip>*/
}
$h_Lorg_slf4j_LoggerFactory$.prototype = $c_Lorg_slf4j_LoggerFactory$.prototype;
var $d_Lorg_slf4j_LoggerFactory$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_slf4j_LoggerFactory$: 0
}, false, "org.slf4j.LoggerFactory$", {
  Lorg_slf4j_LoggerFactory$: 1,
  Lorg_log4s_log4sjs_Log4sLoggerFactory: 1,
  O: 1,
  Lorg_slf4j_ILoggerFactory: 1
});
$c_Lorg_slf4j_LoggerFactory$.prototype.$classData = $d_Lorg_slf4j_LoggerFactory$;
var $n_Lorg_slf4j_LoggerFactory$;
function $m_Lorg_slf4j_LoggerFactory$() {
  if ((!$n_Lorg_slf4j_LoggerFactory$)) {
    $n_Lorg_slf4j_LoggerFactory$ = new $c_Lorg_slf4j_LoggerFactory$()
  };
  return $n_Lorg_slf4j_LoggerFactory$
}
/** @constructor */
function $c_sc_JavaConverters$() {
  /*<skip>*/
}
$c_sc_JavaConverters$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_sc_JavaConverters$.prototype.constructor = $c_sc_JavaConverters$;
/** @constructor */
function $h_sc_JavaConverters$() {
  /*<skip>*/
}
$h_sc_JavaConverters$.prototype = $c_sc_JavaConverters$.prototype;
$c_sc_JavaConverters$.prototype.mapAsJavaMapConverter__sc_Map__sc_JavaConverters$AsJava = (function(m) {
  return new $c_sc_JavaConverters$AsJava(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction0((() => {
    var this$2 = $m_sc_JavaConverters$();
    return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_convert_AsJavaConverters__asJava__sc_Map__ju_Map(this$2, m)
  })))
});
$c_sc_JavaConverters$.prototype.mapAsScalaMapConverter__ju_Map__sc_JavaConverters$AsScala = (function(m) {
  return new $c_sc_JavaConverters$AsScala(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction0((() => {
    var this$2 = $m_sc_JavaConverters$();
    return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_convert_AsScalaConverters__asScala__ju_Map__scm_Map(this$2, m)
  })))
});
var $d_sc_JavaConverters$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  sc_JavaConverters$: 0
}, false, "scala.collection.JavaConverters$", {
  sc_JavaConverters$: 1,
  O: 1,
  sc_convert_AsJavaConverters: 1,
  sc_convert_AsScalaConverters: 1
});
$c_sc_JavaConverters$.prototype.$classData = $d_sc_JavaConverters$;
var $n_sc_JavaConverters$;
function $m_sc_JavaConverters$() {
  if ((!$n_sc_JavaConverters$)) {
    $n_sc_JavaConverters$ = new $c_sc_JavaConverters$()
  };
  return $n_sc_JavaConverters$
}
/** @constructor */
function $c_s_math_Ordered$$anon$1(ord$1, x$1) {
  this.s_math_Ordered$$anon$1__f_ord$1 = null;
  this.s_math_Ordered$$anon$1__f_x$1 = null;
  this.s_math_Ordered$$anon$1__f_ord$1 = ord$1;
  this.s_math_Ordered$$anon$1__f_x$1 = x$1
}
$c_s_math_Ordered$$anon$1.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_s_math_Ordered$$anon$1.prototype.constructor = $c_s_math_Ordered$$anon$1;
/** @constructor */
function $h_s_math_Ordered$$anon$1() {
  /*<skip>*/
}
$h_s_math_Ordered$$anon$1.prototype = $c_s_math_Ordered$$anon$1.prototype;
$c_s_math_Ordered$$anon$1.prototype.compareTo__O__I = (function(that) {
  return this.compare__O__I(that)
});
$c_s_math_Ordered$$anon$1.prototype.compare__O__I = (function(that) {
  return this.s_math_Ordered$$anon$1__f_ord$1.compare__O__O__I(this.s_math_Ordered$$anon$1__f_x$1, that)
});
var $d_s_math_Ordered$$anon$1 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  s_math_Ordered$$anon$1: 0
}, false, "scala.math.Ordered$$anon$1", {
  s_math_Ordered$$anon$1: 1,
  O: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1
});
$c_s_math_Ordered$$anon$1.prototype.$classData = $d_s_math_Ordered$$anon$1;
var $b_Lorg_log4s_log4sjs_ExceptionInfo$JsErrorException;
function $a_Lorg_log4s_log4sjs_ExceptionInfo$JsErrorException() {
  if ((!$b_Lorg_log4s_log4sjs_ExceptionInfo$JsErrorException)) {
    $b_Lorg_log4s_log4sjs_ExceptionInfo$JsErrorException = class $b_Lorg_log4s_log4sjs_ExceptionInfo$JsErrorException extends $a_Lorg_log4s_log4sjs_ExceptionInfo() {
      constructor(arg) {
        super();
        Object.defineProperty(this, "error", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        this.error = arg
      };
    }
  };
  return $b_Lorg_log4s_log4sjs_ExceptionInfo$JsErrorException
}
var $b_Lorg_log4s_log4sjs_ExceptionInfo$NoException$;
function $a_Lorg_log4s_log4sjs_ExceptionInfo$NoException$() {
  if ((!$b_Lorg_log4s_log4sjs_ExceptionInfo$NoException$)) {
    $b_Lorg_log4s_log4sjs_ExceptionInfo$NoException$ = class $b_Lorg_log4s_log4sjs_ExceptionInfo$NoException$ extends $a_Lorg_log4s_log4sjs_ExceptionInfo() {
      constructor() {
        super()
      };
    }
  };
  return $b_Lorg_log4s_log4sjs_ExceptionInfo$NoException$
}
var $n_Lorg_log4s_log4sjs_ExceptionInfo$NoException$;
function $m_Lorg_log4s_log4sjs_ExceptionInfo$NoException$() {
  if ((!$n_Lorg_log4s_log4sjs_ExceptionInfo$NoException$)) {
    $n_Lorg_log4s_log4sjs_ExceptionInfo$NoException$ = new ($a_Lorg_log4s_log4sjs_ExceptionInfo$NoException$())()
  };
  return $n_Lorg_log4s_log4sjs_ExceptionInfo$NoException$
}
var $b_Lorg_log4s_log4sjs_ExceptionInfo$ThrowableException;
function $a_Lorg_log4s_log4sjs_ExceptionInfo$ThrowableException() {
  if ((!$b_Lorg_log4s_log4sjs_ExceptionInfo$ThrowableException)) {
    $b_Lorg_log4s_log4sjs_ExceptionInfo$ThrowableException = class $b_Lorg_log4s_log4sjs_ExceptionInfo$ThrowableException extends $a_Lorg_log4s_log4sjs_ExceptionInfo() {
      constructor(arg) {
        var prep0 = arg;
        super();
        Object.defineProperty(this, "throwable", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        this.throwable = prep0
      };
    }
  };
  return $b_Lorg_log4s_log4sjs_ExceptionInfo$ThrowableException
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting(appenders, additive) {
  this.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_appenders = null;
  this.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_additive = false;
  this.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_appenders = appenders;
  this.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_additive = additive
}
$c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype = $c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype;
$c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_T__hashCode__I("AppenderSetting");
  acc = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_appenders;
  var data$1 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_Statics$().anyHash__O__I(x);
  acc = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var data$2 = (this.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_additive ? 1231 : 1237);
  acc = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_Statics$().finalizeHash__I__I__I(hash$3, 2)
});
$c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting)) {
    var x$0$2 = x$0;
    if ((this.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_additive === x$0$2.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_additive)) {
      var x = this.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_appenders;
      var x$2 = x$0$2.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_appenders;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype.toString__T = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype.productArity__I = (function() {
  return 2
});
$c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype.productPrefix__T = (function() {
  return "AppenderSetting"
});
$c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_appenders
  };
  if ((n === 1)) {
    return this.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_additive
  };
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
function $isArrayOf_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting)))
}
var $d_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting: 0
}, false, "org.log4s.log4sjs.Log4sConfig$AppenderSetting", {
  Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting;
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState(threshold, appenders) {
  this.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_threshold = null;
  this.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_appenders = null;
  this.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_threshold = threshold;
  this.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_appenders = appenders
}
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype = $c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype;
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState)) {
    var x$0$2 = x$0;
    var x = this.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_threshold;
    var x$2 = x$0$2.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_threshold;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_appenders;
      var x$4 = x$0$2.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_appenders;
      return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype.toString__T = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype.productArity__I = (function() {
  return 2
});
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype.productPrefix__T = (function() {
  return "ConcreteLoggerState"
});
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_threshold
  };
  if ((n === 1)) {
    return this.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_appenders
  };
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype.withChild__Lorg_log4s_log4sjs_Log4sConfig$LoggerState__Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState = (function(ls) {
  var this$1 = ls.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_threshold;
  var newThreshold = (this$1.isEmpty__Z() ? this.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_threshold : this$1.get__O());
  matchResult7: {
    var \u03b41$___1;
    var \u03b41$___2;
    var this$2 = ls.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_appenders;
    var x9 = (this$2.isEmpty__Z() ? $m_Lorg_log4s_log4sjs_Log4sConfig$().org$log4s$log4sjs$Log4sConfig$$$defaultAppenderSetting__Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting() : this$2.get__O());
    if ((x9 !== null)) {
      var x11 = x9.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_appenders;
      var x12 = x9.Lorg_log4s_log4sjs_Log4sConfig$AppenderSetting__f_additive;
      var \u03b41$___1 = x11;
      var \u03b41$___2 = x12;
      break matchResult7
    };
    throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(x9)
  };
  var childAppenders$2 = \u03b41$___1;
  var childAdditive$2 = (!(!\u03b41$___2));
  if (childAdditive$2) {
    var this$5 = this.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_appenders;
    var newAppenders = this$5.concat__sc_IterableOnce__O(childAppenders$2)
  } else {
    var newAppenders = childAppenders$2
  };
  return new $c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState(newThreshold, newAppenders)
});
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype.isEnabled__Lorg_log4s_LogLevel__Z = (function(ll) {
  var x = this.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState__f_threshold;
  var ord = $m_Lorg_log4s_log4sjs_LogThreshold$().Lorg_log4s_log4sjs_LogThreshold$__f_order;
  var this$3 = new $c_s_math_Ordered$$anon$1(ord, x);
  var that = new $c_Lorg_log4s_log4sjs_LevelThreshold(ll);
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_s_math_Ordered__$less$eq__O__Z(this$3, that)
});
function $isArrayOf_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState)))
}
var $d_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState: 0
}, false, "org.log4s.log4sjs.Log4sConfig$ConcreteLoggerState", {
  Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4sConfig$ConcreteLoggerState;
/** @constructor */
function $c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState(threshold, appenders) {
  this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_threshold = null;
  this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_appenders = null;
  this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_threshold = threshold;
  this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_appenders = appenders
}
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype.constructor = $c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState;
/** @constructor */
function $h_Lorg_log4s_log4sjs_Log4sConfig$LoggerState() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype = $c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype;
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState)) {
    var x$0$2 = x$0;
    var x = this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_threshold;
    var x$2 = x$0$2.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_threshold;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_appenders;
      var x$4 = x$0$2.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_appenders;
      return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype.toString__T = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype.productArity__I = (function() {
  return 2
});
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype.productPrefix__T = (function() {
  return "LoggerState"
});
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_threshold
  };
  if ((n === 1)) {
    return this.Lorg_log4s_log4sjs_Log4sConfig$LoggerState__f_appenders
  };
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
function $isArrayOf_Lorg_log4s_log4sjs_Log4sConfig$LoggerState(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_log4s_log4sjs_Log4sConfig$LoggerState)))
}
var $d_Lorg_log4s_log4sjs_Log4sConfig$LoggerState = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4sConfig$LoggerState: 0
}, false, "org.log4s.log4sjs.Log4sConfig$LoggerState", {
  Lorg_log4s_log4sjs_Log4sConfig$LoggerState: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_log4s_log4sjs_Log4sConfig$LoggerState.prototype.$classData = $d_Lorg_log4s_log4sjs_Log4sConfig$LoggerState;
function $s_Lorg_log4s_log4sjs_Log4sConsoleAppender__append__Lorg_log4s_log4sjs_Log4sConsoleAppender__Lorg_log4s_log4sjs_LoggedEvent__V(this$1, event) {
  var formatted = this$1.formatter.render(event);
  matchResult1: {
    var x1 = event.level;
    matchAlts1: {
      matchAlts2: {
        var x = $m_Lorg_log4s_Trace$();
        if ((x === x1)) {
          break matchAlts2
        };
        var x$3 = $m_Lorg_log4s_Debug$();
        if ((x$3 === x1)) {
          break matchAlts2
        };
        var x$5 = $m_Lorg_log4s_Info$();
        if ((x$5 === x1)) {
          break matchAlts2
        };
        break matchAlts1
      };
      console.log(formatted);
      break matchResult1
    };
    var x$7 = $m_Lorg_log4s_Warn$();
    if ((x$7 === x1)) {
      console.warn(formatted);
      break matchResult1
    };
    var x$9 = $m_Lorg_log4s_Error$();
    if ((x$9 === x1)) {
      console.error(formatted);
      break matchResult1
    };
    throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(x1)
  }
}
var $b_Lorg_log4s_log4sjs_Log4sConsoleAppender;
function $a_Lorg_log4s_log4sjs_Log4sConsoleAppender() {
  if ((!$b_Lorg_log4s_log4sjs_Log4sConsoleAppender)) {
    $b_Lorg_log4s_log4sjs_Log4sConsoleAppender = class $b_Lorg_log4s_log4sjs_Log4sConsoleAppender extends Object {
      constructor(...rest) {
        var prep0 = ((rest[0] === (void 0)) ? $m_Lorg_log4s_log4sjs_Log4sConsoleAppender$().$lessinit$greater$default$1__Lorg_log4s_log4sjs_MessageFormatter() : rest[0]);
        super();
        Object.defineProperty(this, "formatter", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        this.formatter = prep0
      };
      "append"(arg) {
        $s_Lorg_log4s_log4sjs_Log4sConsoleAppender__append__Lorg_log4s_log4sjs_Log4sConsoleAppender__Lorg_log4s_log4sjs_LoggedEvent__V(this, arg)
      };
    }
  };
  return $b_Lorg_log4s_log4sjs_Log4sConsoleAppender
}
var $d_Lorg_log4s_log4sjs_Log4sConsoleAppender = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_Log4sConsoleAppender: 0
}, false, "org.log4s.log4sjs.Log4sConsoleAppender", {
  Lorg_log4s_log4sjs_Log4sConsoleAppender: 1,
  sjs_js_Object: 1,
  O: 1,
  sjs_js_Any: 1,
  Lorg_log4s_log4sjs_Log4sAppender: 1
}, true, (void 0), ((x) => (x instanceof $a_Lorg_log4s_log4sjs_Log4sConsoleAppender())));
function $s_Lorg_log4s_log4sjs_Log4sEvent__toString__Lorg_log4s_log4sjs_Log4sEvent__T(this$1) {
  return (((((((((((((("Log4sEvent(loggerName=" + this$1.loggerName) + ", level=") + this$1.level) + ", message=") + this$1.message) + ", mdc=") + this$1.mdc) + ", threadName=") + this$1.threadName) + ", throwable=") + this$1.throwable) + ", timestamp=") + this$1.timestamp) + ")")
}
var $b_Lorg_log4s_log4sjs_Log4sEvent;
function $a_Lorg_log4s_log4sjs_Log4sEvent() {
  if ((!$b_Lorg_log4s_log4sjs_Log4sEvent)) {
    $b_Lorg_log4s_log4sjs_Log4sEvent = class $b_Lorg_log4s_log4sjs_Log4sEvent extends Object {
      constructor(arg, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7, arg$8) {
        var prep0 = arg;
        var prep1 = arg$2;
        var prep2 = arg$3;
        var prep3 = arg$4;
        var prep4 = arg$5;
        var prep5 = arg$6;
        super();
        Object.defineProperty(this, "loggerName", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "loggerPath", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "level", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "message", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "mdc", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "threadName", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "throwable", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "timestamp", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        this.loggerName = prep0;
        this.loggerPath = prep1;
        this.level = prep2;
        this.message = prep3;
        this.mdc = prep4;
        this.threadName = prep5;
        this.throwable = arg$7;
        this.timestamp = arg$8
      };
      "toString"() {
        return $s_Lorg_log4s_log4sjs_Log4sEvent__toString__Lorg_log4s_log4sjs_Log4sEvent__T(this)
      };
    }
  };
  return $b_Lorg_log4s_log4sjs_Log4sEvent
}
var $r_Lorg_log4s_log4sjs_StandardMessageFormatter__indentString = Symbol();
var $r_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcBuilder$lzy1 = Symbol();
var $r_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcBuilderbitmap$1 = Symbol();
function $s_Lorg_log4s_log4sjs_StandardMessageFormatter__render__Lorg_log4s_log4sjs_StandardMessageFormatter__Lorg_log4s_log4sjs_LoggedEvent__T(this$1, le) {
  var t = le.throwable;
  var message = le.message;
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sc_StringOps$().format$extension__T__sci_Seq__T("%s %-5s%s %s - %s%s", $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ac_O([$ps_Lorg_log4s_log4sjs_StandardMessageFormatter__timePart$1__Lorg_log4s_log4sjs_LoggedEvent__T(le), $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__levelPart$1__Lorg_log4s_log4sjs_LoggedEvent__T(le), $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcPart$1__Lorg_log4s_log4sjs_StandardMessageFormatter__Lorg_log4s_log4sjs_LoggedEvent__T(this$1, le), $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__loggerPart$1__Lorg_log4s_log4sjs_LoggedEvent__T(le), message, $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__throwablePart$1__Lorg_log4s_log4sjs_StandardMessageFormatter__Lorg_log4s_log4sjs_ExceptionInfo__T(this$1, t)])))
}
function $s_Lorg_log4s_log4sjs_StandardMessageFormatter__renderExceptionInfo__Lorg_log4s_log4sjs_StandardMessageFormatter__Lorg_log4s_log4sjs_ExceptionInfo__s_Option(this$1, ei) {
  var x = $m_Lorg_log4s_log4sjs_ExceptionInfo$NoException$();
  if ($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_BoxesRunTime$().equals__O__O__Z(x, ei)) {
    return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$()
  };
  if ((!(!(ei instanceof $a_Lorg_log4s_log4sjs_ExceptionInfo$ThrowableException())))) {
    var value = this$1.renderStackTrace(ei.throwable);
    return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some(value)
  };
  if ((!(!(ei instanceof $a_Lorg_log4s_log4sjs_ExceptionInfo$JsErrorException())))) {
    var value$1 = this$1.renderJsError(ei.error);
    return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some(value$1)
  };
  throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(ei)
}
function $s_Lorg_log4s_log4sjs_StandardMessageFormatter__renderStackTrace__Lorg_log4s_log4sjs_StandardMessageFormatter__jl_Throwable__T(this$1, t) {
  var this$2 = $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__unfoldCauses__Lorg_log4s_log4sjs_StandardMessageFormatter__jl_Throwable__sci_Seq(this$1, t);
  var this$3 = this$2.prepended__O__O(t).map__F1__O(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction1(((t$2) => {
    var t$1 = t$2;
    return this$1.renderOneStack(t$1)
  })));
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$3, "", "Caused by: ", "")
}
function $s_Lorg_log4s_log4sjs_StandardMessageFormatter__renderJsError__Lorg_log4s_log4sjs_StandardMessageFormatter__sjs_js_Error__T(this$1, jse) {
  matchResult3: {
    var stackPart;
    var x5 = jse.stack;
    if (((typeof x5) === "string")) {
      var s = x5;
      var stackPart = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some(s);
      break matchResult3
    };
    var stackPart = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$()
  };
  return (stackPart.isEmpty__Z() ? ("{jse.name}: " + jse.message) : stackPart.get__O())
}
function $s_Lorg_log4s_log4sjs_StandardMessageFormatter__renderOneStack__Lorg_log4s_log4sjs_StandardMessageFormatter__jl_Throwable__T(this$1, t) {
  var className = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$objectClassName(t);
  var message = ((!(!this$1.useLocalizedThrowableMessages)) ? t.getMessage__T() : t.getMessage__T());
  var frames = t.getStackTrace__Ajl_StackTraceElement();
  $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sc_ArrayOps$();
  var capacity = 0;
  var jsElems = null;
  capacity = 0;
  jsElems = [];
  var i = 0;
  while ((i < frames.u.length)) {
    var x1 = i;
    var arg1 = frames.u[x1];
    var frame = arg1;
    var this$7 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_package$().s_package$__f_Vector;
    var elems = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$d_T.getArrayOf().constr)([this$1[$r_Lorg_log4s_log4sjs_StandardMessageFormatter__indentString], "at ", frame.jl_StackTraceElement__f_declaringClass, ".", frame.jl_StackTraceElement__f_methodName]));
    var basicInfo = this$7.from__sc_IterableOnce__sci_Vector(elems);
    var $$x3 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_Option$();
    var this$8 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_Option$().apply__O__s_Option(frame.jl_StackTraceElement__f_fileName);
    if (this$8.isEmpty__Z()) {
      var $$x2 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$()
    } else {
      var arg1$1 = this$8.get__O();
      var fn = arg1$1;
      matchResult4: {
        var linePart;
        var x7 = frame.jl_StackTraceElement__f_lineNumber;
        if ((x7 < 0)) {
          var linePart = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_package$().s_package$__f_Nil;
          break matchResult4
        };
        var linePart = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_package$().s_package$__f_Seq.apply__sci_Seq__sc_SeqOps($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$d_T.getArrayOf().constr)([":", ("" + x7)])))
      };
      var this$10 = linePart.prepended__O__O(fn);
      var this$11 = this$10.prepended__O__O("(");
      var $$x2 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some(this$11.appended__O__O(")"))
    };
    var $$x1 = $$x3.option2Iterable__s_Option__sc_Iterable($$x2).toSeq__sci_Seq();
    var this$13 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_$less$colon$less$();
    var positionInfo = $$x1.flatten__F1__O(this$13.s_$less$colon$less$__f_singleton);
    var this$14 = basicInfo.appendedAll__sc_IterableOnce__sci_Vector(positionInfo);
    var xs = this$14.appended__O__O("\n");
    var it = xs.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      var elem = it.next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem)
    };
    i = ((1 + i) | 0)
  };
  var stack = new ($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$d_T.getArrayOf().constr)(jsElems);
  var this$15 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(stack);
  return ((((className + ": ") + message) + "\n") + $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$15, "", "", ""))
}
function $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcBuilder__Lorg_log4s_log4sjs_StandardMessageFormatter__F1(this$1) {
  if ((!(!(!this$1[$r_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcBuilderbitmap$1])))) {
    matchResult6$1: {
      var $$x1;
      var x13 = this$1.mdcFormat;
      var x = $m_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$();
      if ((x === x13)) {
        var $$x1 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction1(((y) => ""));
        break matchResult6$1
      };
      var x$3 = $m_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$();
      if ((x$3 === x13)) {
        var $$x1 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction1(((mdc) => {
          var mdc$1 = mdc;
          return (mdc$1.isEmpty__Z() ? "" : $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__buildMDC$2__sci_Map__T(mdc$1))
        }));
        break matchResult6$1
      };
      var x$5 = $m_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$();
      if ((x$5 === x13)) {
        var $$x1 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction1(((mdc$2) => {
          var mdc$3 = mdc$2;
          return (mdc$3.isEmpty__Z() ? " {}" : $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__buildMDC$2__sci_Map__T(mdc$3))
        }));
        break matchResult6$1
      };
      throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(x13)
    };
    this$1[$r_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcBuilder$lzy1] = $$x1;
    this$1[$r_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcBuilderbitmap$1] = true
  };
  return this$1[$r_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcBuilder$lzy1]
}
function $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__unfoldCauses__Lorg_log4s_log4sjs_StandardMessageFormatter__jl_Throwable__sci_Seq(this$1, t) {
  $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_package$();
  var accum = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sci_Vector0$();
  var accum$tailLocal1 = accum;
  var b$tailLocal1 = t;
  while (true) {
    var arg1 = b$tailLocal1;
    var thr = arg1;
    var this$3 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_Option$().apply__O__s_Option(thr.getCause__jl_Throwable());
    if (this$3.isEmpty__Z()) {
      var x14 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$()
    } else {
      var arg1$1 = this$3.get__O();
      var c = arg1$1;
      var x14 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some($j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_T2__O__O__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_T2(), c, c))
    };
    if ((x14 instanceof $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some)) {
      var x16 = x14.s_Some__f_value;
      if ((x16 !== null)) {
        var a = x16._1__O();
        var b2 = x16._2__O();
        var this$5 = accum$tailLocal1;
        var accum$tailLocal1$tmp1 = this$5.appended__O__O(a);
        b$tailLocal1 = b2;
        accum$tailLocal1 = accum$tailLocal1$tmp1;
        continue
      }
    };
    var x = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$();
    if ((x === x14)) {
      return accum$tailLocal1
    };
    throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(x14)
  }
}
function $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__throwablePart$1__Lorg_log4s_log4sjs_StandardMessageFormatter__Lorg_log4s_log4sjs_ExceptionInfo__T(this$1, t$1) {
  var this$2 = this$1.renderExceptionInfo(t$1);
  if (this$2.isEmpty__Z()) {
    var this$3 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_None$()
  } else {
    var arg1 = this$2.get__O();
    var _$1 = arg1;
    var this$3 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Some(("\n" + _$1))
  };
  return (this$3.isEmpty__Z() ? "" : this$3.get__O())
}
function $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__levelPart$1__Lorg_log4s_log4sjs_LoggedEvent__T(le$1) {
  var this$1 = le$1.level;
  var this$2 = this$1.toString__T();
  return this$2.toUpperCase()
}
function $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__timePart$1__Lorg_log4s_log4sjs_LoggedEvent__T(le$2) {
  $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sc_StringOps$();
  var $$x1 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sc_StringOps$();
  var x = le$2.timestamp.toISOString();
  var x$1 = $$x1.init$extension__T__T(x);
  var len = x$1.length;
  var dst = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ac_C(len);
  var i = 0;
  while ((i < len)) {
    var $$x2 = i;
    var index = i;
    var arg1 = x$1.charCodeAt(index);
    dst.u[$$x2] = ((arg1 === 84) ? 32 : ((arg1 === 46) ? 44 : arg1));
    i = ((1 + i) | 0)
  };
  var this$4 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_jl_String$();
  return this$4.new__AC__I__I__T(dst, 0, dst.u.length)
}
function $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__loggerPart$1__Lorg_log4s_log4sjs_LoggedEvent__T(le$3) {
  return le$3.loggerName
}
function $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcPart$1__Lorg_log4s_log4sjs_StandardMessageFormatter__Lorg_log4s_log4sjs_LoggedEvent__T(this$1, le$4) {
  return $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcBuilder__Lorg_log4s_log4sjs_StandardMessageFormatter__F1(this$1).apply__O__O(le$4.mdc)
}
function $ps_Lorg_log4s_log4sjs_StandardMessageFormatter__buildMDC$2__sci_Map__T(mdc) {
  var z = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_package$().s_package$__f_Nil;
  var op = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sjsr_AnonFunction2(((x$1, x$2) => {
    var x$1$1 = x$1;
    var x$2$1 = x$2;
    var x8 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_T2__O__O__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_T2(), x$1$1, x$2$1);
    var x9 = x8.T2__f__1;
    if ((x9 !== null)) {
      var k = x9._1__O();
      var v = x9._2__O();
      var l = x8.T2__f__2;
      var this$2 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sci_$colon$colon(v, l);
      var this$3 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sci_$colon$colon("=", this$2);
      var this$4 = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sci_$colon$colon(k, this$3);
      return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sci_$colon$colon(", ", this$4)
    };
    throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(x8)
  }));
  var this$5 = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__foldRight__O__F2__O(mdc, z, op).tail__O();
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$5, " {", "", "}")
}
var $b_Lorg_log4s_log4sjs_StandardMessageFormatter;
function $a_Lorg_log4s_log4sjs_StandardMessageFormatter() {
  if ((!$b_Lorg_log4s_log4sjs_StandardMessageFormatter)) {
    $b_Lorg_log4s_log4sjs_StandardMessageFormatter = class $b_Lorg_log4s_log4sjs_StandardMessageFormatter extends Object {
      constructor(...rest) {
        var prep0 = ((rest[0] !== (void 0)) && (!(!rest[0])));
        var prep1 = ((rest[1] === (void 0)) ? $m_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$() : rest[1]);
        super();
        Object.defineProperty(this, "useLocalizedThrowableMessages", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": false
        });
        Object.defineProperty(this, "mdcFormat", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        this[$r_Lorg_log4s_log4sjs_StandardMessageFormatter__indentString] = null;
        this[$r_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcBuilder$lzy1] = null;
        this[$r_Lorg_log4s_log4sjs_StandardMessageFormatter__mdcBuilderbitmap$1] = false;
        this.useLocalizedThrowableMessages = prep0;
        this.mdcFormat = prep1;
        this[$r_Lorg_log4s_log4sjs_StandardMessageFormatter__indentString] = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sc_StringOps$().$times$extension__T__I__T(" ", 8)
      };
      "render"(arg) {
        return $s_Lorg_log4s_log4sjs_StandardMessageFormatter__render__Lorg_log4s_log4sjs_StandardMessageFormatter__Lorg_log4s_log4sjs_LoggedEvent__T(this, arg)
      };
      "renderExceptionInfo"(arg) {
        return $s_Lorg_log4s_log4sjs_StandardMessageFormatter__renderExceptionInfo__Lorg_log4s_log4sjs_StandardMessageFormatter__Lorg_log4s_log4sjs_ExceptionInfo__s_Option(this, arg)
      };
      "renderStackTrace"(arg) {
        var prep0 = arg;
        return $s_Lorg_log4s_log4sjs_StandardMessageFormatter__renderStackTrace__Lorg_log4s_log4sjs_StandardMessageFormatter__jl_Throwable__T(this, prep0)
      };
      "renderJsError"(arg) {
        return $s_Lorg_log4s_log4sjs_StandardMessageFormatter__renderJsError__Lorg_log4s_log4sjs_StandardMessageFormatter__sjs_js_Error__T(this, arg)
      };
      "renderOneStack"(arg) {
        var prep0 = arg;
        return $s_Lorg_log4s_log4sjs_StandardMessageFormatter__renderOneStack__Lorg_log4s_log4sjs_StandardMessageFormatter__jl_Throwable__T(this, prep0)
      };
    }
  };
  return $b_Lorg_log4s_log4sjs_StandardMessageFormatter
}
/** @constructor */
function $c_Lorg_log4s_Debug$() {
  /*<skip>*/
}
$c_Lorg_log4s_Debug$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_Debug$.prototype.constructor = $c_Lorg_log4s_Debug$;
/** @constructor */
function $h_Lorg_log4s_Debug$() {
  /*<skip>*/
}
$h_Lorg_log4s_Debug$.prototype = $c_Lorg_log4s_Debug$.prototype;
$c_Lorg_log4s_Debug$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_Debug$.prototype.hashCode__I = (function() {
  return 65906227
});
$c_Lorg_log4s_Debug$.prototype.toString__T = (function() {
  return "Debug"
});
$c_Lorg_log4s_Debug$.prototype.productArity__I = (function() {
  return 0
});
$c_Lorg_log4s_Debug$.prototype.productPrefix__T = (function() {
  return "Debug"
});
$c_Lorg_log4s_Debug$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lorg_log4s_Debug$.prototype.fromProduct__s_Product__O = (function(p) {
  return this
});
Object.defineProperty($c_Lorg_log4s_Debug$.prototype, "name", {
  "get": (function() {
    return "Debug"
  }),
  "configurable": true
});
var $d_Lorg_log4s_Debug$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_Debug$: 0
}, false, "org.log4s.Debug$", {
  Lorg_log4s_Debug$: 1,
  O: 1,
  Lorg_log4s_LogLevel: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lorg_log4s_Debug$.prototype.$classData = $d_Lorg_log4s_Debug$;
var $n_Lorg_log4s_Debug$;
function $m_Lorg_log4s_Debug$() {
  if ((!$n_Lorg_log4s_Debug$)) {
    $n_Lorg_log4s_Debug$ = new $c_Lorg_log4s_Debug$()
  };
  return $n_Lorg_log4s_Debug$
}
/** @constructor */
function $c_Lorg_log4s_Error$() {
  /*<skip>*/
}
$c_Lorg_log4s_Error$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_Error$.prototype.constructor = $c_Lorg_log4s_Error$;
/** @constructor */
function $h_Lorg_log4s_Error$() {
  /*<skip>*/
}
$h_Lorg_log4s_Error$.prototype = $c_Lorg_log4s_Error$.prototype;
$c_Lorg_log4s_Error$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_Error$.prototype.hashCode__I = (function() {
  return 67232232
});
$c_Lorg_log4s_Error$.prototype.toString__T = (function() {
  return "Error"
});
$c_Lorg_log4s_Error$.prototype.productArity__I = (function() {
  return 0
});
$c_Lorg_log4s_Error$.prototype.productPrefix__T = (function() {
  return "Error"
});
$c_Lorg_log4s_Error$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lorg_log4s_Error$.prototype.fromProduct__s_Product__O = (function(p) {
  return this
});
Object.defineProperty($c_Lorg_log4s_Error$.prototype, "name", {
  "get": (function() {
    return "Error"
  }),
  "configurable": true
});
var $d_Lorg_log4s_Error$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_Error$: 0
}, false, "org.log4s.Error$", {
  Lorg_log4s_Error$: 1,
  O: 1,
  Lorg_log4s_LogLevel: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lorg_log4s_Error$.prototype.$classData = $d_Lorg_log4s_Error$;
var $n_Lorg_log4s_Error$;
function $m_Lorg_log4s_Error$() {
  if ((!$n_Lorg_log4s_Error$)) {
    $n_Lorg_log4s_Error$ = new $c_Lorg_log4s_Error$()
  };
  return $n_Lorg_log4s_Error$
}
/** @constructor */
function $c_Lorg_log4s_Info$() {
  /*<skip>*/
}
$c_Lorg_log4s_Info$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_Info$.prototype.constructor = $c_Lorg_log4s_Info$;
/** @constructor */
function $h_Lorg_log4s_Info$() {
  /*<skip>*/
}
$h_Lorg_log4s_Info$.prototype = $c_Lorg_log4s_Info$.prototype;
$c_Lorg_log4s_Info$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_Info$.prototype.hashCode__I = (function() {
  return 2283726
});
$c_Lorg_log4s_Info$.prototype.toString__T = (function() {
  return "Info"
});
$c_Lorg_log4s_Info$.prototype.productArity__I = (function() {
  return 0
});
$c_Lorg_log4s_Info$.prototype.productPrefix__T = (function() {
  return "Info"
});
$c_Lorg_log4s_Info$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lorg_log4s_Info$.prototype.fromProduct__s_Product__O = (function(p) {
  return this
});
Object.defineProperty($c_Lorg_log4s_Info$.prototype, "name", {
  "get": (function() {
    return "Info"
  }),
  "configurable": true
});
var $d_Lorg_log4s_Info$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_Info$: 0
}, false, "org.log4s.Info$", {
  Lorg_log4s_Info$: 1,
  O: 1,
  Lorg_log4s_LogLevel: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lorg_log4s_Info$.prototype.$classData = $d_Lorg_log4s_Info$;
var $n_Lorg_log4s_Info$;
function $m_Lorg_log4s_Info$() {
  if ((!$n_Lorg_log4s_Info$)) {
    $n_Lorg_log4s_Info$ = new $c_Lorg_log4s_Info$()
  };
  return $n_Lorg_log4s_Info$
}
/** @constructor */
function $c_Lorg_log4s_Trace$() {
  /*<skip>*/
}
$c_Lorg_log4s_Trace$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_Trace$.prototype.constructor = $c_Lorg_log4s_Trace$;
/** @constructor */
function $h_Lorg_log4s_Trace$() {
  /*<skip>*/
}
$h_Lorg_log4s_Trace$.prototype = $c_Lorg_log4s_Trace$.prototype;
$c_Lorg_log4s_Trace$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_Trace$.prototype.hashCode__I = (function() {
  return 81068325
});
$c_Lorg_log4s_Trace$.prototype.toString__T = (function() {
  return "Trace"
});
$c_Lorg_log4s_Trace$.prototype.productArity__I = (function() {
  return 0
});
$c_Lorg_log4s_Trace$.prototype.productPrefix__T = (function() {
  return "Trace"
});
$c_Lorg_log4s_Trace$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lorg_log4s_Trace$.prototype.fromProduct__s_Product__O = (function(p) {
  return this
});
Object.defineProperty($c_Lorg_log4s_Trace$.prototype, "name", {
  "get": (function() {
    return "Trace"
  }),
  "configurable": true
});
var $d_Lorg_log4s_Trace$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_Trace$: 0
}, false, "org.log4s.Trace$", {
  Lorg_log4s_Trace$: 1,
  O: 1,
  Lorg_log4s_LogLevel: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lorg_log4s_Trace$.prototype.$classData = $d_Lorg_log4s_Trace$;
var $n_Lorg_log4s_Trace$;
function $m_Lorg_log4s_Trace$() {
  if ((!$n_Lorg_log4s_Trace$)) {
    $n_Lorg_log4s_Trace$ = new $c_Lorg_log4s_Trace$()
  };
  return $n_Lorg_log4s_Trace$
}
/** @constructor */
function $c_Lorg_log4s_Warn$() {
  /*<skip>*/
}
$c_Lorg_log4s_Warn$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_Warn$.prototype.constructor = $c_Lorg_log4s_Warn$;
/** @constructor */
function $h_Lorg_log4s_Warn$() {
  /*<skip>*/
}
$h_Lorg_log4s_Warn$.prototype = $c_Lorg_log4s_Warn$.prototype;
$c_Lorg_log4s_Warn$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_Warn$.prototype.hashCode__I = (function() {
  return 2688678
});
$c_Lorg_log4s_Warn$.prototype.toString__T = (function() {
  return "Warn"
});
$c_Lorg_log4s_Warn$.prototype.productArity__I = (function() {
  return 0
});
$c_Lorg_log4s_Warn$.prototype.productPrefix__T = (function() {
  return "Warn"
});
$c_Lorg_log4s_Warn$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lorg_log4s_Warn$.prototype.fromProduct__s_Product__O = (function(p) {
  return this
});
Object.defineProperty($c_Lorg_log4s_Warn$.prototype, "name", {
  "get": (function() {
    return "Warn"
  }),
  "configurable": true
});
var $d_Lorg_log4s_Warn$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_Warn$: 0
}, false, "org.log4s.Warn$", {
  Lorg_log4s_Warn$: 1,
  O: 1,
  Lorg_log4s_LogLevel: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lorg_log4s_Warn$.prototype.$classData = $d_Lorg_log4s_Warn$;
var $n_Lorg_log4s_Warn$;
function $m_Lorg_log4s_Warn$() {
  if ((!$n_Lorg_log4s_Warn$)) {
    $n_Lorg_log4s_Warn$ = new $c_Lorg_log4s_Warn$()
  };
  return $n_Lorg_log4s_Warn$
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$() {
  /*<skip>*/
}
$c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype.constructor = $c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype = $c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype;
$c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype.hashCode__I = (function() {
  return (-286907414)
});
$c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype.toString__T = (function() {
  return "AllThreshold"
});
$c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype.productArity__I = (function() {
  return 0
});
$c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype.productPrefix__T = (function() {
  return "AllThreshold"
});
$c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype.fromProduct__s_Product__O = (function(p) {
  return this
});
var $d_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_LogThreshold$AllThreshold$: 0
}, false, "org.log4s.log4sjs.LogThreshold$AllThreshold$", {
  Lorg_log4s_log4sjs_LogThreshold$AllThreshold$: 1,
  O: 1,
  Lorg_log4s_log4sjs_LogThreshold: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$.prototype.$classData = $d_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$;
var $n_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$;
function $m_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$() {
  if ((!$n_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$)) {
    $n_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$ = new $c_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$()
  };
  return $n_Lorg_log4s_log4sjs_LogThreshold$AllThreshold$
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$() {
  /*<skip>*/
}
$c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype.constructor = $c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype = $c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype;
$c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype.hashCode__I = (function() {
  return 596137948
});
$c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype.toString__T = (function() {
  return "OffThreshold"
});
$c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype.productArity__I = (function() {
  return 0
});
$c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype.productPrefix__T = (function() {
  return "OffThreshold"
});
$c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype.fromProduct__s_Product__O = (function(p) {
  return this
});
var $d_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_LogThreshold$OffThreshold$: 0
}, false, "org.log4s.log4sjs.LogThreshold$OffThreshold$", {
  Lorg_log4s_log4sjs_LogThreshold$OffThreshold$: 1,
  O: 1,
  Lorg_log4s_log4sjs_LogThreshold: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$.prototype.$classData = $d_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$;
var $n_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$;
function $m_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$() {
  if ((!$n_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$)) {
    $n_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$ = new $c_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$()
  };
  return $n_Lorg_log4s_log4sjs_LogThreshold$OffThreshold$
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$() {
  /*<skip>*/
}
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype.constructor = $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype = $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype;
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype.hashCode__I = (function() {
  return (-1144436483)
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype.toString__T = (function() {
  return "AlwaysMDC"
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype.productArity__I = (function() {
  return 0
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype.productPrefix__T = (function() {
  return "AlwaysMDC"
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype.fromProduct__s_Product__O = (function(p) {
  return this
});
var $d_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$: 0
}, false, "org.log4s.log4sjs.StandardMessageFormatter$MDCFormat$AlwaysMDC$", {
  Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$: 1,
  O: 1,
  Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$.prototype.$classData = $d_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$;
var $n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$;
function $m_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$() {
  if ((!$n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$)) {
    $n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$ = new $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$()
  };
  return $n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$AlwaysMDC$
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$() {
  /*<skip>*/
}
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype.constructor = $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype = $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype;
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype.hashCode__I = (function() {
  return 75417611
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype.toString__T = (function() {
  return "NoMDC"
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype.productArity__I = (function() {
  return 0
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype.productPrefix__T = (function() {
  return "NoMDC"
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype.fromProduct__s_Product__O = (function(p) {
  return this
});
var $d_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$: 0
}, false, "org.log4s.log4sjs.StandardMessageFormatter$MDCFormat$NoMDC$", {
  Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$: 1,
  O: 1,
  Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$.prototype.$classData = $d_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$;
var $n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$;
function $m_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$() {
  if ((!$n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$)) {
    $n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$ = new $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$()
  };
  return $n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NoMDC$
}
/** @constructor */
function $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$() {
  /*<skip>*/
}
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype.constructor = $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$;
/** @constructor */
function $h_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$() {
  /*<skip>*/
}
$h_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype = $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype;
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_Product$$anon$1(this)
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype.hashCode__I = (function() {
  return 1247813356
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype.toString__T = (function() {
  return "NonEmptyMDC"
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype.productArity__I = (function() {
  return 0
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype.productPrefix__T = (function() {
  return "NonEmptyMDC"
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype.fromProduct__s_Product__O = (function(p) {
  return this
});
var $d_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$: 0
}, false, "org.log4s.log4sjs.StandardMessageFormatter$MDCFormat$NonEmptyMDC$", {
  Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$: 1,
  O: 1,
  Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$.prototype.$classData = $d_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$;
var $n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$;
function $m_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$() {
  if ((!$n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$)) {
    $n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$ = new $c_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$()
  };
  return $n_Lorg_log4s_log4sjs_StandardMessageFormatter$MDCFormat$NonEmptyMDC$
}
/** @constructor */
function $c_Lorg_log4s_MDC$() {
  /*<skip>*/
}
$c_Lorg_log4s_MDC$.prototype = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$h_O();
$c_Lorg_log4s_MDC$.prototype.constructor = $c_Lorg_log4s_MDC$;
/** @constructor */
function $h_Lorg_log4s_MDC$() {
  /*<skip>*/
}
$h_Lorg_log4s_MDC$.prototype = $c_Lorg_log4s_MDC$.prototype;
$c_Lorg_log4s_MDC$.prototype.foreach__F1__V = (function(f) {
  $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__foreach__F1__V(this, f)
});
$c_Lorg_log4s_MDC$.prototype.forall__F1__Z = (function(p) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__forall__F1__Z(this, p)
});
$c_Lorg_log4s_MDC$.prototype.exists__F1__Z = (function(p) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__exists__F1__Z(this, p)
});
$c_Lorg_log4s_MDC$.prototype.find__F1__s_Option = (function(p) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__find__F1__s_Option(this, p)
});
$c_Lorg_log4s_MDC$.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op)
});
$c_Lorg_log4s_MDC$.prototype.reduceLeft__F2__O = (function(op) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__reduceLeft__F2__O(this, op)
});
$c_Lorg_log4s_MDC$.prototype.isEmpty__Z = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__isEmpty__Z(this)
});
$c_Lorg_log4s_MDC$.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_Lorg_log4s_MDC$.prototype.to__sc_Factory__O = (function(factory) {
  return factory.fromSpecific__sc_IterableOnce__O(this)
});
$c_Lorg_log4s_MDC$.prototype.toList__sci_List = (function() {
  $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sci_List$();
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this)
});
$c_Lorg_log4s_MDC$.prototype.toVector__sci_Vector = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sci_Vector$().from__sc_IterableOnce__sci_Vector(this)
});
$c_Lorg_log4s_MDC$.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this)
});
$c_Lorg_log4s_MDC$.prototype.toSeq__sci_Seq = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_sci_Seq$().from__sc_IterableOnce__sci_Seq(this)
});
$c_Lorg_log4s_MDC$.prototype.toArray__s_reflect_ClassTag__O = (function(evidence$2) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2)
});
$c_Lorg_log4s_MDC$.prototype.reversed__sc_Iterable = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOnceOps__reversed__sc_Iterable(this)
});
$c_Lorg_log4s_MDC$.prototype.head__O = (function() {
  return this.iterator__sc_Iterator().next__O()
});
$c_Lorg_log4s_MDC$.prototype.headOption__s_Option = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__headOption__s_Option(this)
});
$c_Lorg_log4s_MDC$.prototype.last__O = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__last__O(this)
});
$c_Lorg_log4s_MDC$.prototype.filter__F1__O = (function(pred) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__filter__F1__O(this, pred)
});
$c_Lorg_log4s_MDC$.prototype.take__I__O = (function(n) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__take__I__O(this, n)
});
$c_Lorg_log4s_MDC$.prototype.drop__I__O = (function(n) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__drop__I__O(this, n)
});
$c_Lorg_log4s_MDC$.prototype.dropRight__I__O = (function(n) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__dropRight__I__O(this, n)
});
$c_Lorg_log4s_MDC$.prototype.tail__O = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__tail__O(this)
});
$c_Lorg_log4s_MDC$.prototype.map__F1__O = (function(f) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__map__F1__O(this, f)
});
$c_Lorg_log4s_MDC$.prototype.flatMap__F1__O = (function(f) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__flatMap__F1__O(this, f)
});
$c_Lorg_log4s_MDC$.prototype.collect__s_PartialFunction__O = (function(pf) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__collect__s_PartialFunction__O(this, pf)
});
$c_Lorg_log4s_MDC$.prototype.concat__sc_IterableOnce__O = (function(suffix) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix)
});
$c_Lorg_log4s_MDC$.prototype.zipWithIndex__O = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_IterableOps__zipWithIndex__O(this)
});
$c_Lorg_log4s_MDC$.prototype.className__T = (function() {
  return "Map"
});
$c_Lorg_log4s_MDC$.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_scm_Iterable$()
});
$c_Lorg_log4s_MDC$.prototype.compose__F1__F1 = (function(g) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_F1__compose__F1__F1(this, g)
});
$c_Lorg_log4s_MDC$.prototype.andThen__F1__s_PartialFunction = (function(k) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_s_PartialFunction__andThen__F1__s_PartialFunction(this, k)
});
$c_Lorg_log4s_MDC$.prototype.lift__F1 = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_PartialFunction$Lifted(this)
});
$c_Lorg_log4s_MDC$.prototype.runWith__F1__F1 = (function(action) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_s_PartialFunction__runWith__F1__F1(this, action)
});
$c_Lorg_log4s_MDC$.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_MapOps__getOrElse__O__F0__O(this, key, default$1)
});
$c_Lorg_log4s_MDC$.prototype.apply__O__O = (function(key) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_MapOps__apply__O__O(this, key)
});
$c_Lorg_log4s_MDC$.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1)
});
$c_Lorg_log4s_MDC$.prototype.keySet__sc_Set = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sc_MapOps$KeySet(this)
});
$c_Lorg_log4s_MDC$.prototype.keys__sc_Iterable = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sc_MapOps$KeySet(this)
});
$c_Lorg_log4s_MDC$.prototype.values__sc_Iterable = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sc_MapOps$$anon$1(this)
});
$c_Lorg_log4s_MDC$.prototype.keysIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sc_MapOps$$anon$2(this)
});
$c_Lorg_log4s_MDC$.prototype.valuesIterator__sc_Iterator = (function() {
  return new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sc_MapOps$$anon$3(this)
});
$c_Lorg_log4s_MDC$.prototype.foreachEntry__F2__V = (function(f) {
  $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_MapOps__foreachEntry__F2__V(this, f)
});
$c_Lorg_log4s_MDC$.prototype.default__O__O = (function(key) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_MapOps__default__O__O(this, key)
});
$c_Lorg_log4s_MDC$.prototype.contains__O__Z = (function(key) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_MapOps__contains__O__Z(this, key)
});
$c_Lorg_log4s_MDC$.prototype.isDefinedAt__O__Z = (function(key) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_MapOps__contains__O__Z(this, key)
});
$c_Lorg_log4s_MDC$.prototype.concat__sc_IterableOnce__sc_IterableOps = (function(suffix) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_MapOps__concat__sc_IterableOnce__sc_IterableOps(this, suffix)
});
$c_Lorg_log4s_MDC$.prototype.$plus$plus__sc_IterableOnce__sc_IterableOps = (function(xs) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_MapOps__concat__sc_IterableOnce__sc_IterableOps(this, xs)
});
$c_Lorg_log4s_MDC$.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end)
});
$c_Lorg_log4s_MDC$.prototype.newSpecificBuilder__scm_Builder = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_scm_Map$().newBuilder__scm_Builder()
});
$c_Lorg_log4s_MDC$.prototype.equals__O__Z = (function(o) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_Map__equals__O__Z(this, o)
});
$c_Lorg_log4s_MDC$.prototype.hashCode__I = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_util_hashing_MurmurHash3$().mapHash__sc_Map__I(this)
});
$c_Lorg_log4s_MDC$.prototype.toString__T = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_Iterable__toString__T(this)
});
$c_Lorg_log4s_MDC$.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
});
$c_Lorg_log4s_MDC$.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_Lorg_log4s_MDC$.prototype.update__O__O__V = (function(key, value) {
  $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_scm_MapOps__update__O__O__V(this, key, value)
});
$c_Lorg_log4s_MDC$.prototype.updateWith__O__F1__s_Option = (function(key, remappingFunction) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_scm_MapOps__updateWith__O__F1__s_Option(this, key, remappingFunction)
});
$c_Lorg_log4s_MDC$.prototype.getOrElseUpdate__O__F0__O = (function(key, op) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_scm_MapOps__getOrElseUpdate__O__F0__O(this, key, op)
});
$c_Lorg_log4s_MDC$.prototype.remove__O__s_Option = (function(key) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_scm_MapOps__remove__O__s_Option(this, key)
});
$c_Lorg_log4s_MDC$.prototype.knownSize__I = (function() {
  return (-1)
});
$c_Lorg_log4s_MDC$.prototype.mapFactory__sc_MapFactory = (function() {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_scm_Map$()
});
$c_Lorg_log4s_MDC$.prototype.withDefault__F1__scm_Map = (function(d) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_scm_Map$WithDefault__scm_Map__F1__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_scm_Map$WithDefault(), this, d)
});
$c_Lorg_log4s_MDC$.prototype.withDefaultValue__O__scm_Map = (function(d) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_scm_Map__withDefaultValue__O__scm_Map(this, d)
});
$c_Lorg_log4s_MDC$.prototype.addOne__T2__Lorg_log4s_MDC$ = (function(kv) {
  matchResult1: {
    var \u03b41$___1;
    var \u03b41$___2;
    if ((kv !== null)) {
      var key = kv._1__O();
      var value = kv._2__O();
      var \u03b41$___1 = key;
      var \u03b41$___2 = value;
      break matchResult1
    };
    throw new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_s_MatchError(kv)
  };
  var key$2 = \u03b41$___1;
  var value$2 = \u03b41$___2;
  $m_Lorg_slf4j_MDC$().put__T__T__V(key$2, value$2);
  return this
});
$c_Lorg_log4s_MDC$.prototype.subtractOne__T__Lorg_log4s_MDC$ = (function(key) {
  $m_Lorg_slf4j_MDC$().remove__T__V(key);
  return this
});
$c_Lorg_log4s_MDC$.prototype.get__T__s_Option = (function(key) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_s_Option$().apply__O__s_Option($m_Lorg_slf4j_MDC$().get__T__T(key))
});
$c_Lorg_log4s_MDC$.prototype.iterator__sc_Iterator = (function() {
  var $$x1 = $m_sc_JavaConverters$();
  var mdcMap = $m_Lorg_slf4j_MDC$().getCopyOfContextMap__ju_Map();
  return $$x1.mapAsScalaMapConverter__ju_Map__sc_JavaConverters$AsScala(((mdcMap !== null) ? mdcMap : $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_ju_Collections$().EMPTY_MAP__ju_Map())).asScala__O().iterator__sc_Iterator()
});
$c_Lorg_log4s_MDC$.prototype.size__I = (function() {
  var mdcMap = $m_Lorg_slf4j_MDC$().getCopyOfContextMap__ju_Map();
  return ((mdcMap !== null) ? mdcMap : $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_ju_Collections$().EMPTY_MAP__ju_Map()).size__I()
});
$c_Lorg_log4s_MDC$.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__T2__Lorg_log4s_MDC$(elem)
});
$c_Lorg_log4s_MDC$.prototype.subtractOne__O__scm_Shrinkable = (function(elem) {
  return this.subtractOne__T__Lorg_log4s_MDC$(elem)
});
$c_Lorg_log4s_MDC$.prototype.get__O__s_Option = (function(key) {
  return this.get__T__s_Option(key)
});
$c_Lorg_log4s_MDC$.prototype.result__O = (function() {
  return this
});
$c_Lorg_log4s_MDC$.prototype.fromSpecific__sc_IterableOnce__O = (function(coll) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_scm_Map$().from__sc_IterableOnce__O(coll)
});
$c_Lorg_log4s_MDC$.prototype.withFilter__F1__sc_WithFilter = (function(p) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$ct_sc_MapOps$WithFilter__sc_MapOps__F1__(new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$c_sc_MapOps$WithFilter(), this, p)
});
$c_Lorg_log4s_MDC$.prototype.andThen__F1__F1 = (function(g) {
  return $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_s_PartialFunction__andThen__F1__s_PartialFunction(this, g)
});
$c_Lorg_log4s_MDC$.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return (!(!$j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$f_sc_MapOps__apply__O__O(this, v1)))
});
var $d_Lorg_log4s_MDC$ = new $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$TypeData().initClass({
  Lorg_log4s_MDC$: 0
}, false, "org.log4s.MDC$", {
  Lorg_log4s_MDC$: 1,
  O: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sc_IterableOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Iterable: 1,
  scm_Iterable: 1,
  F1: 1,
  s_PartialFunction: 1,
  sc_MapOps: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sc_Map: 1,
  jl_Cloneable: 1,
  scm_Cloneable: 1,
  scm_Clearable: 1,
  scm_Growable: 1,
  scm_Builder: 1,
  scm_Shrinkable: 1,
  scm_MapOps: 1,
  scm_Map: 1
});
$c_Lorg_log4s_MDC$.prototype.$classData = $d_Lorg_log4s_MDC$;
var $n_Lorg_log4s_MDC$;
function $m_Lorg_log4s_MDC$() {
  if ((!$n_Lorg_log4s_MDC$)) {
    $n_Lorg_log4s_MDC$ = new $c_Lorg_log4s_MDC$()
  };
  return $n_Lorg_log4s_MDC$
}
let $e_GN = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_Llucuma_core_enums_Site$GN$();
export { $e_GN as GN };
let $e_Site = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_Llucuma_core_enums_Site$();
export { $e_Site as Site };
let $e_Log4s = $m_Lorg_log4s_log4sjs_Log4s$();
export { $e_Log4s as Log4s };
let $e_getLogger = (function(arg) {
  var prep0 = arg;
  $m_Lorg_log4s_log4sjs_Log4s$();
  var this$2 = $m_Lorg_slf4j_LoggerFactory$();
  return new $c_Lorg_log4s_log4sjs_Log4sLoggerFactory$Log4sLoggerInstance(this$2, prep0)
});
export { $e_getLogger as getLogger };
export { $t_Llucuma_react_aladin_Aladin$__jsComponent as JSAladin } from "./internal-030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.js";
let $e_GS = $j_internal$002d030f6c8e2fcae469d98d99f878d74c0f1f80c6f9.$m_Llucuma_core_enums_Site$GS$();
export { $e_GS as GS };
