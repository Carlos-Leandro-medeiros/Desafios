let golsCorinthians = parseInt(prompt("Informe os gols do Corinthians:"));
let golsPalmeiras = parseInt(prompt("Informe os gols do Palmeiras:"));

function verificarResultado(Palmeiras,Corinthians) {
    if (golsCorinthians > golsPalmeiras) {
alert("Vitótia do corinthias");        
    }else if (golsPalmeiras > golsCorinthians) {
    alert("Vitória do Palmeiras");
    }else{
        alert("Empate");
    }
}
verificarResultado(golsCorinthians,golsPalmeiras);