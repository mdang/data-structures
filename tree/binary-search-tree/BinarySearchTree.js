import BinarySearchTreeNode from './BinarySearchTreeNode'

export default class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode(null)
  }

  insert(value) {
    return this.root.insert(value)
  }

  contains(value) {
    return this.root.contains(value)
  }

  toString() {
    return this.root.toString()
  }
}