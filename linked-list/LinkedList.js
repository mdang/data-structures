import LinkedListNode from './LinkedListNode'

export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const node = new LinkedListNode(value)

    if (!this.head) {
      this.head = node
      this.tail = node

      return this
    }

    this.tail.next = node
    this.tail = node

    return this
  }

  prepend(value) {
    const node = new LinkedListNode(value)
    
    if (!this.head) {
      this.head = node
      this.tail = node

      return this
    }

    node.next = this.head
    this.head = node

    return this
  }

  delete() {

  }

  deleteHead() {

  }

  deleteTail() {

  }

  reverse() {
    
  }

  find(value) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head 

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }

  toArray() {
    const nodes = []
    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  toString() {
    return this.toArray().map(node => node.toString()).toString()
  }
 }