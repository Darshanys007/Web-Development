let arr = [1, 3, 5, 7, 9, 11]
// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2)
// }
// console.log(newArr)

let newArr = arr.map((e) => {
    return e ** 2
})
console.log(newArr)


// const greaterThanSeven = (e) => {
//     if (e > 7) {
//         return true
//     }
//     return false
// }

// console.log(arr.filter(greaterThanSeven))


// let arr1 = [1, 2, 3, 4, 5]

// const redu = (a, b) => {
//     return a * b
// }
// console.log(arr1.reduce(redu))