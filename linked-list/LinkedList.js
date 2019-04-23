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

  delete(value) {
    
  }

  deleteHead() {
    if (!this.head) {
      return null
    }

    const deletedNode = this.head
    
    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null 
      this.tail = null
    }

    return deletedNode
  }

  deleteTail() {
    const deletedNode = this.tail 

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedNode;
    }

    let currentNode = this.head 

    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }
    
    this.tail = currentNode

    return deletedNode
  }

  reverse() {
    let prevNode = null
    let nextNode = null 
    let currentNode = this.head 

    while (currentNode) {
      nextNode = currentNode.next 
      currentNode.next = prevNode

      prevNode = currentNode
      currentNode = nextNode
    }

    this.tail = this.head 
    this.head = prevNode

    return this
  }

  find(value) {
    if (!this.head) {
      return null
    }

    let node = this.head 

    while (node) {
      if (node.value === value) {
        return node
      }

      node = node.next
    }

    return null
  }

  toArray() {
    const nodes = []
    let node = this.head

    while (node) {
      nodes.push(node)
      node = node.next
    }

    return nodes
  }

  toString() {
    return this.toArray().map(node => node.toString()).toString()
  }
 }