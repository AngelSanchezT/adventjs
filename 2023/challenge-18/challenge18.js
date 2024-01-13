function drawClock(time) {
    const digits = [
      ['***', '* *', '* *', '* *', '* *', '* *', '***'], // 0
      ['  *', '  *', '  *', '  *', '  *', '  *', '  *'], // 1
      ['***', '  *', '  *', '***', '*  ', '*  ', '***'], // 2
      ['***', ' * ', '  *', '***', '  *', ' * ', '***'], // 3
      ['* *', '* *', '* *', '***', '  *', '  *', '  *'], // 4
      ['***', '*  ', '*  ', '***', '  *', ' * ', '***'], // 5
      ['***', '*  ', '*  ', '***', '* *', '* *', '***'], // 6
      ['***', '  *', '  *', '  *', '  *', '  *', '  *'], // 7
      ['***', '* *', '* *', '***', '* *', '* *', '***'], // 8
      ['***', '* *', '* *', '***', '  *', ' * ', '***']  // 9
    ];
  
    const result = Array.from({ length: 7 }, () => Array(17).fill(' '));
  
    const drawDigit = (digit, startCol) => {
      for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 3; col++) {
          if (digit[row] && digit[row][col]) {
            result[row][startCol + col] = digit[row][col];
          }
        }
      }
    };
  
    const [hourStr, minuteStr] = time.split(':').map(Number);
    const hourDigits = String(hourStr).padStart(2, '0').split('').map(Number);
    const minuteDigits = String(minuteStr).padStart(2, '0').split('').map(Number);
  
    drawDigit(digits[hourDigits[0]], 0);
    drawDigit(digits[hourDigits[1]], 4);
    drawDigit(['*', '*'], 8); // Colon (:)
    drawDigit(digits[minuteDigits[0]], 10);
    drawDigit(digits[minuteDigits[1]], 14);
  
    return result;
  }
  
  // Ejemplo de uso:
  const clockRepresentation = drawClock('01:30');
  console.log(clockRepresentation);
  
  

module.exports = drawClock;