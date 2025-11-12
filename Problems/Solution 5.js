let arr = [2,4,5,6]
function sumUntilNegativeNumber(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            break;
        }
        sum += arr[i] //sum = sum + arr[i]
    }
    return sum
}
console.log(sumUntilNegativeNumber(arr))

//Code is Not Good