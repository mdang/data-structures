import BinaryTreeNode from '../BinaryTreeNode'

export default class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value = null) {
    super(value)
  }

  insert(value = null) {
    if (!this.value) {
      this.value = value

      return this
    }

    // left
    if (value < this.value) {
      // is there already a left node? 
      if (this.left) {
        return this.left.insert(value)
      }
      
      const newNode = new BinarySearchTreeNode(value)
      this.setLeft(newNode)

      return newNode
    }

    // right
    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value)
      }

      const newNode = new BinarySearchTreeNode(value)
      this.setRight(newNode)

      return newNode
    }

    return this
  }

  find(value) {
    if (value === this.value) {
      return this.value
    }

    if (value < this.value) {
      // search left 
      if (this.left) {
        return this.left.find(value)
      }
    }

    if (value > this.value) {
      // search right 
      if (this.right) {
        return this.right.find(value)
      }
    }

    return null
  }

  contains(value) {
    return !!this.find(value)
  }
}