function findBrokenKeys(correctPhrase, typedPhrase){
    let brokenKeys = []
    for(let i = 0; i < correctPhrase.length; i++){
        if(correctPhrase[i] != typedPhrase[i]){
            if (!(brokenKeys.includes(correctPhrase[i]))){
                brokenKeys.push(correctPhrase[i])
            }
        }
    }
    return brokenKeys
}

console.log(findBrokenKeys("!!??$$", "$$!!??"))