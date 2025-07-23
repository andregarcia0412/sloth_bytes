function isVowel(letter){
    letter = letter.toLowerCase()
    if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
        return true
    } else{
        return false
    }
}

function is_authentic_skewer(skewer){
    if(!skewer.includes("-") || isVowel(skewer[0]) || isVowel(skewer[skewer.length-1])){
        return false
    }
    
    let arrSkewer = []
    for(let i = 0; i < skewer.length; i++){
        if(skewer[i] != "-"){
            arrSkewer.push(skewer[i])
        }
    }

    for(let i = 0; i < arrSkewer.length - 1; i++){
        if(isVowel(arrSkewer[i]) && isVowel(arrSkewer[i+1]) || !isVowel(arrSkewer[i]) && !isVowel(arrSkewer[i+1])){
            return false
        }
    }

    let spacingArr = []
    let pastSpacingArr = []
    for(let i = 0; i < skewer.length; i++){
        if(skewer[i] == "-"){
            spacingArr.push(skewer[i])
        } else{
            if(pastSpacingArr.length != 0 && spacingArr.length != 0){
                if(pastSpacingArr.length != spacingArr.length){
                    return false
                }
            }
            pastSpacingArr = spacingArr
            spacingArr = []
        }
    }
    return true
}

console.log(is_authentic_skewer("C-L-A-P"))