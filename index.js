function calcularPagoEnCuotas(montoTotal, cantidadCuotas, tasaInteresAnual) {
    if (cantidadCuotas <= 0) {
        return "El número de cuotas debe ser mayor a 0";
    }
    if (montoTotal <= 0) {
        return "El monto total debe ser mayor a 0";
    }
    if (tasaInteresAnual < 0) {
        return "La tasa de interés no puede ser negativa";
    }

    const tasaInteresMensual = (tasaInteresAnual / 100) / 12;
    const pagoMensual = tasaInteresMensual > 0
        ? montoTotal * tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -cantidadCuotas))
        : montoTotal / cantidadCuotas;

    return parseFloat(pagoMensual.toFixed(2));
}

function mostrarPagoMensual(montoTotal, cantidadCuotas, tasaInteresAnual) {
    const resultado = calcularPagoEnCuotas(montoTotal, cantidadCuotas, tasaInteresAnual);
    if (typeof resultado === "string") {
        console.log(resultado); // Mensaje de error
    } else {
        console.log(`La cuota mensual sería de $${resultado}`);
    }
}

// Instrucciones para el usuario
console.log("Usa la función mostrarPagoMensual(montoTotal, cantidadCuotas, tasaInteresAnual) para calcular el pago mensual.");
console.log("Por ejemplo: mostrarPagoMensual(1300, 12, 5);");
