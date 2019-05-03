var tree = [
  { value: 6, left: 1, right: 2 },
  { value: 5, left: 3, right: 4 },
  { value: 7, left: null, right: 5 },
  { value: 3, left: 6, right: null },
  { value: 4, left: null, right: null },
  { value: 9, left: 7, right: 8 },
  { value: 2, left: 9, right: null },
  { value: 8, left: null, right: null },
  { value: 10, left: null, right: null },
  { value: 1, left: null, right: null }
]

const breathFirstSearch = (tree, search) => {
  // first in, first out. top to bottom we want to inspect each node
  const queue = [tree[0]]

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift()

      if (node.value === search) {
        return node
      }

      if (node.left) {
        queue.push(tree[node.left])
      }

      if (node.right) {
        queue.push(tree[node.right])
      }
    }
  }

  return null
}

console.log(7, breathFirstSearch(tree, 7))
console.log(9, breathFirstSearch(tree, 9))
console.log(12, breathFirstSearch(tree, 12))
console.log(4, breathFirstSearch(tree, 4))
console.log(22, breathFirstSearch(tree, 22))