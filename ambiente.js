let num = [0, 8, 2, 9, 1] //declarando variável composta com 5 valores

console.log(`Nossa variável composta contem ${num}`)

num[5] = 6 //acrescentando o valor 6 na posição 5 da variável composta

console.log(num)

num.push(7) //inserir 7 como valor da última nova posição que será criada no array. Se não souber quantas posições
//tem no array pode inserir com .push

num.length //para saber o comprimento do array

num.sort()//pega todos os elementos do array e os ordena em ordem crescente