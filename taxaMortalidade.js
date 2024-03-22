function calcularNatalidade(numCriancasNascidas, numHabitantes) {
    return (numCriancasNascidas * 1000) / numHabitantes;
}

function calcularMortalidade(numObitos, numHabitantes){
return (numObitos * 1000)/ numHabitantes;
}
function main() {
    let opcao = prompt("O que você deseja calcular: natalidade ou mortalidade?").toLowerCase();
    let numHabitantes = parseInt(prompt("Informe o número de habitantes:"));
    
    switch (opcao) {
        case "natalidade":
            let numCriancasNascidas = parseInt(prompt("Informe o número de crianças nascidas:"));
            let taxaNatalidade = calcularNatalidade(numCriancasNascidas, numHabitantes);
            alert("Taxa de Natalidade: " + taxaNatalidade.toFixed(2));
            break;
        case "Mortalidade":
            let numObitos = parseInt(prompt("Informe o número de óbitos:"));
            let taxaMortalidade = calcularMortalidade(numObitos, numHabitantes);
            alert("Taxa de Mortalidade: " + taxaMortalidade.toFixed(2));
            break;
        default:
            alert("Opção inválida.");
        
    }
}

main();