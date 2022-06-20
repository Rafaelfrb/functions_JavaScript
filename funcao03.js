function fatorial (n) {  //encontrar o fatorial de um número
    let fat = 1
    for(let c = n; c > 1; c--){
            fat *= c
    }
    return fat
}

console.log(fatorial(5)) // resultado será 120  (que é 5*4*3*2*1=120)