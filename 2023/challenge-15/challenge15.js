function autonomousDrive(store, movements) {
    // Encontrar la posición inicial del robot (!)
    let startRow = -1;
    let startCol = -1;

    for (let i = 0; i < store.length; i++) {
        const colIndex = store[i].indexOf('!');
        if (colIndex !== -1) {
            startRow = i;
            startCol = colIndex;
            break;
        }
    }

    // Función para verificar si una posición está dentro
    // de los límites y es un camino libre
    const isValidMove = (row, col) => {
        return row >= 0
            && row < store.length
            && col >= 0
            && col < store[row].length
            && store[row][col] !== '*';
    };

    // Función para realizar los movimientos
    const move = (row, col, direction) => {
        // console.log('move',row, col, direction)
        const tempRow = row;
        const tempCol = col;
        switch (direction) {
            case 'R':
                col++;
                break;
            case 'L':
                col--;
                break;
            case 'U':
                row--;
                break;
            case 'D':
                row++;
                break;
        }
        return isValidMove(row, col) ? [row, col] : [tempRow, tempCol];
        // Si el movimiento no es válido, retrocede una posición
    };

    // Aplicar los movimientos
    let currentRow = startRow;
    let currentCol = startCol;

    for (const movement of movements) {

        const [newRow, newCol] = move(currentRow, currentCol, movement);
        currentRow = newRow;
        currentCol = newCol;

        // console.log(currentRow, currentCol)

    }

    // Actualizar la posición final en el almacén
    if (startRow !== currentRow || startCol !== currentCol) {
        const resultStore = store.map((row, rowIndex) => {
            return row.split('').map((cell, colIndex) => {
                if (startRow === rowIndex && startCol === colIndex) {
                    return '.'
                }

                if (rowIndex === currentRow && colIndex === currentCol) {
                    return '!';
                }

                return cell;
            }).join('');
        });
        return resultStore;
    }

    return store

}

module.exports = autonomousDrive;