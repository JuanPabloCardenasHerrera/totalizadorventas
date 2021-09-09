const form = document.querySelector("#totalizador-form");
const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const state = document.querySelector("#state-selection");
//alert("Bienvenido a tu calculadora de impuestos");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let totalPrice = totalPriceCalc(cantidad.value, precio.value);
    let totalTax = taxByState(state.value);
    document.getElementById('total').innerHTML = "Total: " + totalPrice;
    let totalWithTax = totalPrice + (totalPrice * totalTax);
    document.getElementById('totalConImpuesto').innerHTML = "Total con impuesto: " + totalWithTax;
 });

function totalPriceCalc(cantidad, precio) {
    let total = cantidad * precio;
    return total;
}

function taxByState(valueState) {
    let valorImpuestos = 0;
    switch (valueState) {
        case 'UT':
            valorImpuestos = 0.0665;
            break;
        case 'NV':
            valorImpuestos = 0.08;
            break;
        case 'TX':
            valorImpuestos = 0.0625;
            break;
        case 'AL':
            valorImpuestos = 0.04;
            break;
        case 'CA':
            valorImpuestos = 0.0825;
            break;
        default:
            alert("No existe");
    }
    return valorImpuestos;
}