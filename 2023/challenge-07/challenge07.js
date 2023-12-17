function drawGift(size, symbol) {
    const ESPACE = ' ';
    const LINE = '#';
    const ENTER = '\n'
    let part1 = '';
    let part2 = '';
  
    if(size ==  1) {
      return LINE + ENTER;
    }
    
    part1 += ESPACE.repeat(size - 1);
    part1 += LINE.repeat(size);
    part1 += ENTER;
  
    part2 += LINE.repeat(size) + symbol.repeat(size - 2)
        + LINE + ENTER;
    
    let j = size;
    
    for(let i = 2; i < size; i ++) {
        
        // PART 1
        let line1 = '';
        // _
        line1 += ESPACE.repeat(size - i);
        // #
        line1 += LINE.repeat(1);
        // symbol
        line1 += symbol.repeat(size - 2);
        // #
        line1 += LINE.repeat(1);
        // symbol
        line1 += symbol.repeat(size - j);
        // #
        line1 += LINE.repeat(1);
        
      
        part1 += line1 + ENTER
      
        // PART 2
        let line2 = '';
        // #
        line2 += LINE.repeat(1);
        // symbol
        line2 += symbol.repeat(size - 2);
        // #
        line2 += LINE.repeat(1);
        // symbol
        line2 += symbol.repeat(size - i - 1);
        // #
        line2 += LINE.repeat(1);
        
        part2 += line2 + ENTER
        
        j--;
        
    }
  
    part2 += LINE.repeat(size) + ENTER;
  
    return part1 + part2;

}

module.exports = drawGift;