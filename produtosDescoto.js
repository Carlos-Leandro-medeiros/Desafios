let nomeProduto = prompt("Digite o nome do produto:");
let quantidade = parseInt(prompt("Digiti a quantidade adquirida:"));
let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));

let total = quantidade * precoUnitario;
let desconto;

if (quantidade <= 5) {
    desconto = total * 0.02;
}else if (quantidade > 5 && quantidade <= 10) {
    desconto = total * 0.03;
}else if (quantidade >= 10) {
    desconto = total * 0.05;
}

let totalApagar = total - desconto;

let mensagem ="Produto: " + nomeProduto + "\n"+
"Quantidade:" + quantidade + "\n" +
"Preço unitário: R$" + precoUnitario.toFixed(2) + "\n" +
"Total: R$" + total.toFixed(2) + "\n" +
"Desconto: R$" + desconto.toFixed(2) + "\n"+
"Total a pagar: R$" + totalApagar.toFixed(2);

alert(mensagem);