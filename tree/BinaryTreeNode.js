export default class BinaryTreeNode {
  constructor(value = null) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }

  setLeft(binaryTreeNode) {
    this.left = binaryTreeNode
    this.left.parent = this

    return this
  }

  setRight(binaryTreeNode) {
    this.right = binaryTreeNode
    this.right.parent = this

    return this
  }

  setValue(value) {
    this.value = value

    return this
  }

  traverseInOrder() {
    let result = []

    // Sorted binary tree will have lowest on left, middle in root, highest on right
    // left + root + right 

    // left
    if (this.left) {
      result = [...result, ...this.left.traverseInOrder()]
    }

    // root (this)
    result.push(this.value)

    // right 
    if (this.right) {
      result = [...result, ...this.right.traverseInOrder()]
    }

    return result
  }

  toString() {
    return this.traverseInOrder().toString()
  }
}