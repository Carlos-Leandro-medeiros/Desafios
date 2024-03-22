const nome1 = (prompt("Digite o 1ª nome:"));
const nome2 = (prompt("Digite o 2ª nome:"));
const nome3 = (prompt("Digite o 3ª nome:"));
const nome4 = (prompt("Digite o 4ª nome:"));
const nome5 = (prompt("Digite o 5ª nome:"));
const nome6 = (prompt("Digite o 6ª nome:"));
const nome7 = (prompt("Digite o 7ª nome:"));
const nome8 = (prompt("Digite o 8ª nome:"));
const nome9 = (prompt("Digite o 9ª nome:"));
const nome10 = (prompt("Digite o 10ª nome:"));

const nomesArmazenados = [nome1, nome2, nome3, nome4, nome5, nome6, nome7, nome8, nome9, nome10];

function buscarNome(nomes) {
    const nomeBusca = prompt("Digite o nome que deseja buscar:");
    if (nomes.includes(nomesArmazenados)) {
    alert("Achei");
    } else {
    alert("Não achei");
    }
}

buscarNome(nomesArmazenados);

alert("Nomes da lista: "+ nomesArmazenados.join(", "));