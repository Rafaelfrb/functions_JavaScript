function soma (n1, n2) { //se a pessoa passar apenas um número o resultado sera NaN. Para evitar isso podemos colocar
    return n1 + n2       // dentro dos parâmetros (n1=0, n2=0) pois assim caso não definam dois números um deles será considerado o 0
}

console.log(soma(7, 2))