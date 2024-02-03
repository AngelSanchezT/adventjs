function createCube(size) {
    let cubeUp = '';
    let cubeDown = '';
    for (let i = 1; i <= size; i++) {
      cubeUp += ' '.repeat(size - i);
      cubeUp += '/\\'.repeat(i);
      cubeUp += '_\\'.repeat(size);
      cubeUp += '\n';
  
      cubeDown += ' '.repeat(i - 1);
      cubeDown += '\\/'.repeat(size - i + 1);
      cubeDown += '_/'.repeat(size);
      cubeDown += '\n';
  
    }
    
    cubeDown = cubeDown.substring(0, cubeDown.length - 1);
  
    return cubeUp + cubeDown;
  }

module.exports = createCube;