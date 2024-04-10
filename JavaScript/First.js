//concatenação, interpolação, literal templates

//Propriedades de um carro

// 1-declaração 2- indetificação da variavel 3- tipo da variavel 
// padrão de escrita = amelCase 
// comentário
const corDocarro = "Vermelho"
const modeloDoCarro = "Sandero"
const marcaDoCarro = "Renault"
const chassiDoCarro = 1283774626322
const anoDoCarro = 2022

//primeira forma 
console.log("Cor predominante: " + corDocarro + " Modelo do carro: " + modeloDoCarro + " Marca: " + marcaDoCarro + " chassi: " + chassiDoCarro + " Ano: " + anoDoCarro)

//segunda forma interpolação
console.log(`Cor predominante: ${corDocarro}, Modelo: ${modeloDoCarro}, Marca: ${marcaDoCarro}, Chassi: ${chassiDoCarro}, Ano: ${anoDoCarro}`)

//sem literal templates
console.log(" bem vindo ao bar do Carlos:",
"1-litrão",
"2-coca",
"3-agua",
"4-refri"
)
//terceira forma literal templantes
console.log(`Bem vindo ao bar do Carlos.
1-litrão
2-pitão
3-Refri
4-agua
`)
