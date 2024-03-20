// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.




//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console
const Equilatero = "Equilatero";
const isosceles = "Isosceles";
const escaleno = "Escaleno";

const lado1 = (prompt("Digite o comprimento do primeiro lado do triângulo:"));
const lado2 = (prompt("Digite o comprimento do segundo lado do triângulo:"));
const lado3 = (prompt("Digite o comprimento do terceiro lado do triângulo:"));

let tipoTriângulo;
if (lado1 === lado2 && lado2 === lado3) {
    tipoTriângulo = Equilatero
}else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    tipoTriângulo = isosceles
}else{
    tipoTriângulo = escaleno
}

alert("O triângulo é " + tipoTriângulo + ".");