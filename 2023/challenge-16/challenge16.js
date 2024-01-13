const transformTree = function(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }

  const root = { value: array[0], left: null, right: null };
  const queue = [root];

  for (let i = 1; i < array.length; i += 2) {
    const currentNode = queue.shift();

    if (array[i] !== null) {
      currentNode.left = { value: array[i], left: null, right: null };
      queue.push(currentNode.left);
    }

    if (i + 1 < array.length && array[i + 1] !== null) {
      currentNode.right = { value: array[i + 1], left: null, right: null };
      queue.push(currentNode.right);
    }
  }

  return root;
};
  
module.exports = transformTree;