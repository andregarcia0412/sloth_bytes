function fact_of_fact(n){
    let fact_mult = 1
    for(let i = 1; i <= n; i++){
        let n_fact = 1
        for(let j = 1; j <= i; j++){
            n_fact *= j
        }
        fact_mult *= n_fact
    }
    return fact_mult
}

console.log(fact_of_fact(4))
    