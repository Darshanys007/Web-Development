// let arr = [2, 3, 4, 5, 5, 6, 7, 8]
let arr1 = [2, 5, 6, 7, 8]

function doubleTrouble(array) {

    for (const element of array) {
        let double = (element * element)
        console.log(double)

    }
}
doubleTrouble(arr1)