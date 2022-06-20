var valores = [8, 5, 3, 1]

for (pos = 0; pos < valores.length; pos++){
    console.log(`O valor na posição ${pos} é ${valores[pos]}`)
}

for (let pos in valores){     //executa o mesmo que o código for acima
    console.log(valores[pos])
}