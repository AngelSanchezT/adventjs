function adjustLights(lights) {
  const GREEN = '🟢';
  const RED = '🔴';
  let changes1 = 0;
  let changes2 = 0;
  
  let pair = true;
  
  for(const light of lights) {
    // Form 1 : Green is odd and Red is pair
    changes1 += pair && light === GREEN ? 1 : 0;
    changes1 += !pair && light === RED ? 1 : 0;
    
    // Form 2 : Green is pair and Red is odd
    changes2 += pair && light === RED ? 1 : 0;
    changes2 += !pair && light === GREEN ? 1 : 0;
    
    pair = !pair; 
    
  }
  return ( changes1 < changes2 ) ? changes1 : changes2;
}

module.exports = adjustLights;