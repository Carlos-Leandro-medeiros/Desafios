//Arrays são como caixa com outras caixa dentro, que podem ser acessados através do seu indice entre colchetes []. O primeiro indice sempre começa do 0, portanto um array de 4 posição terá o indice de 0 a 3

//O array é heterogenio, ou seja, podem colocar qualquer valor dentro dele, ou seja, tipos de dados diferentes. Int, String, double, booleam...

//Realizando a criação de um array
//    indice = 0            1           2   3
// const arr = ["girafa", "camaleão", "zebra", 3]

// arr[10] = "Leão"

// console.log(`
// ${arr.length}
// `);

// arr.push("Qualquer coisa");
// arr.push("Girafa")

// console.log(arr);

//-----------------Método 1 - push ------------------------------------/
// permite adicionar valores no final do array!
// const pushArray = ['Leão', 'tartaruga', 'papagaio']
// console.log(pushArray);

// pushArray[1] = 'borboleta'

// pushArray.push('escorpião')
// console.log(pushArray);

// pushArray.push('dragão')
// console.log(pushArray);

// // unshift -> adiciona elementos no inicio do Array
// pushArray.unshift('coelho')
// console.log(pushArray);

//-----------------Método 2 - POP ------------------------------------/
//POP remove o último valor de um determinado array
// const popArray = ["Fernando", "mara", "eric", "gabriel"]
// console.log(popArray);
// //eliminar o último valor do array
// popArray.pop()

// //remover o primeiro valor de um array ??
// popArray.shift()

// console.log(popArray);

//-----------------Método 3 - splice ------------------------------------/
// metodo splice permite selecionar um indicie e remover e adicionar valores (substituição)
//       indice   =    0      1      2     3
// const spliceArray = ['jan', 'fev', 'abr','jun']
// console.log(spliceArray);

// spliceArray.splice(2, 0, "mar ")
// spliceArray.splice(4, 0, "maio ")


// console.log(spliceArray);

//-----------------Método 4 - filter ------------------------------------/

const filterArray = [ 'carlos', 'guilherme','amanda','rogerio', 'gabriel']
console.log(filterArray);

const novoArryay = filterArray.filter((qualquercoisa) => {

    return qualquercoisa =='amanda' || qualquercoisa == 'guilherme'
})

console.log(novoArryay);

//-----------------Método 5 - map ------------------------------------/
//Map não modifica o array original, somente afunção de callback poderá fazer isso! ou seja, ela criará um novo array modificado
//    indice   =  0  1  2  3  4
// const arrayMap = [1, 2, 3, 4, 5]

// const arrayModificado = arrayMap.map((MULTI) => {
// return MULTI * MULTI
// })

// console.log(arrayMap);
// console.log(arrayModificado);

//-----------------Método 6 - forEach ------------------------------------/

// const foreachArray = ['carlos', 'andre', 'julia', 'akira']
// console.log(foreachArray);

// foreachArray.forEach((nome) => {
//     console.log(nome);
// })