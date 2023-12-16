function cyberReindeer(road, time) {
  let result = [];
  const _ROAD_ = ".";
  const _SANTA_SLED_ = "S";
  const _OPEN_BARRIER_ = "*";
  const _CLOSED_BARRIER_ = "|";
  const regex = /\|/g;

  let indexSled = 0;
  result.push(road);
  road = road.replace(_SANTA_SLED_, _ROAD_);

  for (let i = 2; i <= time; i++) {
    const nextEspace = road[indexSled + 1];

    let nextRoad = road.split('');
    
    if (nextEspace !== _CLOSED_BARRIER_) {
      nextRoad[indexSled + 1] = _SANTA_SLED_;
      indexSled++;
    } else {
      nextRoad[indexSled] = _SANTA_SLED_;
    }

    result.push(nextRoad.join(''));

    if (i === 5) {
      
      road = road.replace(regex, _OPEN_BARRIER_);
      
    }

    
  }

  
  return result;
}

module.exports = cyberReindeer;
