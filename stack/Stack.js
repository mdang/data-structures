import LinkedList from '../linked-list/LinkedList'

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList()
  }

  push(value) {
    this.linkedList.append(value)
  }

  pop() {
    const removedTail = this.linkedList.deleteTail()
    return removedTail ? removedTail.value : null
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    
    return this.linkedList.tail.value
  }

  isEmpty() {
    return !this.linkedList.head
  }

  toString() {
    return this.linkedList.toString()
  }
} 