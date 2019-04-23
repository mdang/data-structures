import LinkedList from '../linked-list/LinkedList'

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList()
  }

  enqueue(value) {
    this.linkedList.append(value)

    return this
  }

  dequeue() {
    const deletedHead = this.linkedList.deleteHead()
    return deletedHead ? deletedHead.value : null
  }

  peek() {
    return this.linkedList.head ? this.linkedList.head.value : null
  }

  isEmpty() {
    return !this.linkedList.head
  }

  toString() {
    return this.linkedList.toString()
  }
}