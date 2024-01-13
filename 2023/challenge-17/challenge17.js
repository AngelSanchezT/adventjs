function optimizeIntervals(intervals) {
    if (!intervals || intervals.length === 0) {
      return [];
    }
  
    // Ordenar los intervalos por su inicio
    intervals.sort((a, b) => a[0] - b[0]);
  
    const mergedIntervals = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
  
      if (currentInterval[0] <= lastMergedInterval[1]) {
        // Hay superposición, fusionar los intervalos
        lastMergedInterval[1] = 
            Math.max(lastMergedInterval[1], currentInterval[1]);
      } else {
        // No hay superposición, agregar el intervalo actual
        mergedIntervals.push(currentInterval);
      }
    }
  
    return mergedIntervals;
  }
  
  // Ejemplos de uso:
  console.log(optimizeIntervals([[5, 8], [2, 7], [3, 4]])); // [[2, 8]]
  console.log(optimizeIntervals([[1, 3], [8, 10], [2, 6]])); // [[1, 6], [8, 10]]
  console.log(optimizeIntervals([[3, 4], [1, 2], [5, 6]])); // [[1, 2], [3, 4], [5, 6]]


module.exports = optimizeIntervals;