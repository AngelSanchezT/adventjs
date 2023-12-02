function contarOvejas(ovejas) {
    const expresionRegular = /[na]/gi;

    return ovejas.filter(oveja => {
        // Convertir el nombre a minúsculas y eliminar espacios
        const nombreLimpio = oveja.name.toLowerCase().replace(/\s/g, '');

        // Verificar si el nombre contiene tanto 'a' como 'n'
        const tieneA = nombreLimpio.includes('a');
        const tieneN = nombreLimpio.includes('n');

        // Filtrar ovejas de color rojo con ambos caracteres en el nombre
        return oveja.color === 'rojo' && tieneA && tieneN;

    });

}

module.exports = contarOvejas;