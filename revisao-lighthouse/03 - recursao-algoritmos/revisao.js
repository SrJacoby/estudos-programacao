//Fatorial

function recursao1(n){
    if(n === 0 || n=== 1){
        return 1 //Caso base
    } else{
        return n * recursao1(n-1) //chamada
    }
}

console.log(recursao1(3))

//Fibonacci

function recursao2(n){
    if(n <= 1){
        return n //caso base
    } else{
        return recursao2(n-1) + recursao2(n-2) //chamada
    }
}

console.log(recursao2(6))