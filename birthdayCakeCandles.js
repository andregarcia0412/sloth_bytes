function birthdayCakeCandles(arr){
    let tallest = 0
    for(let i = 0; i < arr.length; i++){
        if(tallest < arr[i]){
            tallest = arr[i]
        }
    }
    let qntTallest = 0
    for(let i = 0; i < arr.length; i++){
        if(tallest == arr[i]){
            qntTallest++
        }
    }

    return qntTallest
}

console.log(birthdayCakeCandles([4,4,1,3]))