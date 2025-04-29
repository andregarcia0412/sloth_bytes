var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/\s+/);

function isShuffledWell(arr){
    for(var i = 0; i < arr.length; i++){
        if(Math.abs(arr[i] - arr[i + 1]) == 1 && Math.abs(arr[i + 1] - arr[i + 2]) == 1){
            return false
        }
    }
    return true
}
console.log(isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]))