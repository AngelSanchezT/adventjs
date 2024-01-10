function transformTree(array, index) {
    if (index >= array.length || array[index] === null) {
      return null;
    }
  
    const node = {
      value: array[index],
      left: transformTree(array, 2 * index + 1),
      right: transformTree(array, 2 * index + 2),
    };
  
    return node;
  }
  
  // Función principal para inicializar el proceso con el índice de la raíz (0)
  function initializeTransformTree(array) {
    return transformTree(array, 0);
  }
  
  // Ejemplo de uso:
  const treeArray = [3, 1, 0, 8, 12, null, 1];
  const treeObject = initializeTransformTree(treeArray);
  console.log(treeObject);
  
module.exports = transformTree;