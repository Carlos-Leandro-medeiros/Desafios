let tipoCombustivel = prompt("Digite 'A' para Álcool ou 'G' para Gasolina:");
let litros = parseFloat(prompt("Digite a quantidade de litros desejada:"));

let precoAlcool = 4.90;
let precoGasolina = 5.30;
let desconto = 0;
let valorTotal = 0;

switch (tipoCombustivel.toUpperCase()) {
    case 'A':
        if (litros <= 20) {
            desconto = 0.03;
        }else{
            desconto = 0.05;
        }
        alert(valorTotal = litros * (precoAlcool - (precoAlcool * desconto)))
        break;
        case 'G':
            if (litros <= 20) {
                desconto = 0.04
            }else {
                desconto = 0.06;
            }
            alert(valorTotal = litros * (precoGasolina - (precoGasolina * desconto)))
    default:
        console.log("Tipo de combustivel inválido!");

    }
    alert(`Valor a ser pago: R${valorTotal.toFixed(2)}`);