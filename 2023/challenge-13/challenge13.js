function calculateTime(deliveries) {
  const deliveryLimit = "07:00:00";
  const [hours, minutes, seconds] = deliveryLimit.split(":").map(Number);
  const limitInSeconds = hours * 3600 + minutes * 60 + seconds;

  let totalTime = 0;

  // Calcula la duración total de las entregas en segundos
  for (let i = 0; i < deliveries.length; i++) {
    const [hours, minutes, seconds] = deliveries[i].split(":").map(Number);
    totalTime += hours * 3600 + minutes * 60 + seconds;
  }

  // Calcula la diferencia entre el límite de tiempo 
  // y el tiempo total de entregas
  let timeDifference = limitInSeconds - totalTime;
  
  const isBefore = timeDifference > 0;
  
  if (isBefore) {
    // Convierte la diferencia a formato HH:mm:ss
    const hours = Math.floor(timeDifference / 3600);
    const minutes = Math.floor((timeDifference % 3600) / 60);
    const remainingSeconds = timeDifference % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `-${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  // Convierte la diferencia a formato HH:mm:ss

  timeDifference = Math.abs(timeDifference);
  const hours2 = Math.floor(timeDifference / 3600);
  const minutes2 = Math.floor((timeDifference % 3600) / 60);
  const remainingSeconds2 = timeDifference % 60;

  const formattedHours2 = hours2.toString().padStart(2, "0");
  const formattedMinutes2 = minutes2.toString().padStart(2, "0");
  const formattedSeconds2 = remainingSeconds2.toString().padStart(2, "0");

  return `${formattedHours2}:${formattedMinutes2}:${formattedSeconds2}`;
}

module.exports = calculateTime;
