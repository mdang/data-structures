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

const depthFirstSearch = (tree, search) => {
  const stack = [tree[0]]

  while (stack.length > 0) {
    for (let i = 0; i < stack.length; i++) {
      const node = stack.pop()

      if (node.value === search) {
        return node
      }

      if (node.left) {
        stack.push(tree[node.left])
      }

      if (node.right) {
        stack.push(tree[node.right])
      }
    }
  }

  return null
}

console.log(5, depthFirstSearch(tree, 5))
console.log(9, depthFirstSearch(tree, 9))
console.log(15, depthFirstSearch(tree, 15))
console.log(7, depthFirstSearch(tree, 7))
console.log(24, depthFirstSearch(tree, 24))
