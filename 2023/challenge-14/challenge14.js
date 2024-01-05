function maxGifts(houses) {
  const n = houses.length;

  // Inicializar un array para almacenar la cantidad
  // máxima de regalos entregados en cada casa
  const maxGiftsArray = Array(n).fill(0);

  // Caso base: para la primera casa, la cantidad máxima
  // de regalos entregados es la cantidad de regalos en esa casa
  maxGiftsArray[0] = houses[0];

  // Caso base: para la segunda casa, la cantidad máxima de
  // regalos entregados es el máximo entre la primera y la segunda casa
  maxGiftsArray[1] = Math.max(houses[0], houses[1]);

  // Llenar el array maxGiftsArray utilizando
  // la lógica de programación dinámica
  for (let i = 2; i < n; i++) {
    maxGiftsArray[i] = Math.max(
      maxGiftsArray[i - 1],
      maxGiftsArray[i - 2] + houses[i]
    );
  }

  // La respuesta está en la última posición del array maxGiftsArray
  return maxGiftsArray[n - 1];
}

module.exports = maxGifts;
