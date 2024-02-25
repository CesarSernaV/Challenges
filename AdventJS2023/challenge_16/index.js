function transformTree(tree) {
  return tree.length === 0 ? null : buildTree(tree, 0)

  function buildTree(array, index) {
    if (index >= array.length || array[index] === null) {
      return null
    }

    const node = {
      value: array[index],
      left: buildTree(array, 2 * index + 1),
      right: buildTree(array, 2 * index + 2),
    }

    return node
  }
}
// Ejemplo de uso:
const treeArray = [3, 1, 0, 8, 12, null, 1]
const treeObject = transformTree(treeArray)
console.log(treeObject)
