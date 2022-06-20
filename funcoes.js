//exemplo de função para sabe se um número é par ou ímpar

function parimp(n) {
    if(n%2==0){
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parimp(11)
console.log(res)