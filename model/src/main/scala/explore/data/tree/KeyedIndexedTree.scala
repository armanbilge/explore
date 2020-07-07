// Copyright (c) 2016-2020 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.data.tree

import scala.collection.immutable.HashMap
import scala.collection.immutable.HashSet

import cats.implicits._
import cats.kernel.Eq

import KeyedIndexedTree._

case class KeyedIndexedTree[K: Eq, A] private (
  private val byKey:  Map[K, Node[IndexedElem[K, A]]],
  private val tree:   Tree[IndexedElem[K, A]]
)(
  private val getKey: A => K // Having in another param set keeps this out of equality
) {

  def asTree: Tree[A] = tree.map(_.elem)

  def asKeyedTree: Tree[(K, A)] = tree.map(value => (getKey(value.elem), value.elem))

  def getNodeAndIndexByKey(key: K): Option[(Node[A], Index[K])] =
    byKey.get(key).map { node =>
      (node.map(_.elem), node.value.index)
    }

  def getKeyedNodeByIdx(index: Index[K]): Option[(K, Node[A])] =
    index.parentKey
      .fold(tree.children.some)(pkey => byKey.get(pkey).map(_.children))
      .flatMap(
        _.get(index.childPos.toLong).map(node => (getKey(node.value.elem), node.map(_.elem)))
      )

  private def removeInTree(key: K): Tree[IndexedElem[K, A]] = {
    def removeInChildren(
      idx:       Index[K]
    )(
      children:  List[Node[IndexedElem[K, A]]],
      parentKey: Option[K] = None
    ): List[Node[IndexedElem[K, A]]] =
      (parentKey === idx.parentKey) match {
        case true  =>
          children.take(idx.childPos) ++ children.drop(idx.childPos + 1).map {
            case Node(IndexedElem(e, Index(pkey, pos)), ch) =>
              Node(IndexedElem(e, Index(pkey, pos - 1)), ch)
          }
        case false =>
          children.map(node =>
            Node(node.value, removeInChildren(idx)(node.children, getKey(node.value.elem).some))
          )
      }

    byKey.get(key).fold(tree) { keyElemIndex =>
      val idx = keyElemIndex.value.index
      Tree(removeInChildren(idx)(tree.children))
    }
  }

  def removed(key: K): KeyedIndexedTree[K, A] =
    byKey.contains(key) match {
      case true  =>
        val newTree = removeInTree(key)
        KeyedIndexedTree(buildKeyMap(newTree, getKey), newTree)(getKey)
      case false => this
    }

  def inserted(key: K, node: Node[A], idx: Index[K]): KeyedIndexedTree[K, A] = {
    def insertInChildren(
      children:  List[Node[IndexedElem[K, A]]],
      parentKey: Option[K] = None
    ): List[Node[IndexedElem[K, A]]] =
      (parentKey === idx.parentKey) match {
        case true  =>
          val fixedPos = idx.childPos match {
            case i if i > children.length => children.length
            case i if i < 0               => 0
            case i                        => i
          }
          (children.take(fixedPos) :+
            Node(IndexedElem(node.value, Index(parentKey, fixedPos)),
                 indexedUniqueKeyChildren(node.children, getKey, key.some, byKey.keySet + key)
            )) ++
            children
              .drop(fixedPos)
              .map {
                case Node(IndexedElem(e, Index(pkey, pos)), ch) =>
                  Node(IndexedElem(e, Index(pkey, pos + 1)), ch)
              }
        case false =>
          children.map(node =>
            Node(node.value, insertInChildren(node.children, getKey(node.value.elem).some))
          )
      }

    val cleanTree = removeInTree(key)
    val newTree   = Tree(insertInChildren(cleanTree.children))
    KeyedIndexedTree(buildKeyMap(newTree, getKey), newTree)(getKey)
  }

}

object KeyedIndexedTree {
  case class Index[K](parentKey: Option[K], childPos: Int)

  protected case class IndexedElem[K, A](elem: A, index: Index[K])

  protected def indexedUniqueKeyChildren[K, A](
    children:  List[Node[A]],
    getKey:    A => K,
    parentKey: Option[K] = None,
    accumKeys: Set[K] = HashSet.empty[K]
  ): List[Node[IndexedElem[K, A]]] = {
    val keyedNewNodes =
      children
        .map(node => (getKey(node.value), node))
        .distinctBy(_._1) // key
        .filterNot((accumKeys.contains _).compose(_._1))
    val newAccumKeys = accumKeys ++ keyedNewNodes.map(_._1)
    keyedNewNodes.zipWithIndex.foldLeft(
      List.empty[Node[IndexedElem[K, A]]]
    ) {
      case (nodes, ((key, node), idx)) =>
        val newNodes = indexedUniqueKeyChildren(node.children, getKey, key.some, newAccumKeys)
        val newNode  = Node(IndexedElem(node.value, Index(parentKey, idx)), newNodes)
        nodes :+ newNode
    }
  }

  protected def buildKeyMap[K, A](
    tree:   Tree[IndexedElem[K, A]],
    getKey: A => K
  ): Map[K, Node[IndexedElem[K, A]]] = {
    def childrenKeyMap(
      children: List[Node[IndexedElem[K, A]]]
    ): Map[K, Node[IndexedElem[K, A]]] =
      children.foldLeft(HashMap.empty[K, Node[IndexedElem[K, A]]]) {
        case (keyMap, node) =>
          keyMap + (getKey(node.value.elem) -> node) ++ childrenKeyMap(node.children)
      }

    childrenKeyMap(tree.children)
  }

  def fromTree[K: Eq, A](tree: Tree[A], getKey: A => K): KeyedIndexedTree[K, A] = {
    // Although not stack safe, requires stack space proportional to the depth of the tree.

    val indexedTree = Tree(indexedUniqueKeyChildren(tree.children, getKey))
    KeyedIndexedTree(buildKeyMap(indexedTree, getKey), indexedTree)(getKey)
  }
}
