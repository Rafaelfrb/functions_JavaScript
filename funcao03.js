function fatorial (n) {  //encontrar o fatorial de um número
    let fat = 1
    for(let c = n; c > 1; c--){
            fat *= c
    }
    return fat
}

console.log(fatorial(5)) // resultado será 120  (que é 5*4*3*2*1=120)

//RECURSIVIDADE:

// !5 = 5 x 4 x 3 x 2 x 1 = 120
// !5 = 5 x 4!
// !1 = 1

// então a função acima em com recursividade ficaria:

/* function fatorial(n) {
    if(n==1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
*/