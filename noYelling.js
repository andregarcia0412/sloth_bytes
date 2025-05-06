function noYelling(str){
    let i = str.length - 1
    while(str[i] === "!" || str[i] === "?"){
        i--
    }
    let mark = str[str.length - 1]

    if(mark === "!" || mark === "?"){
        return str.substring(0, i + 1) + mark
    }
    else{
        return str
    }
}
console.log(noYelling("I just!!! can!!! not!!! believe!!! it!!!"))