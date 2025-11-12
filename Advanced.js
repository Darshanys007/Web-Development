// async function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(7)
//         }, 1000);
//     })
// }
// async function main(){
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// }
// main()

// let [x, y, ...rest] = [2, 3, 5, 7, 9, 11]
// console.log(x, y, rest)

// let obj = {
//     a:2,
//     b:3,
//     c:5
// }
// let {a,b} = obj
// console.log(a,b)

function sum(a, b, c) {
    return a + b + c
}

let arr = [2, 3, 4]
// console.log(arr[0] + arr[1] + arr[2])
console.log(sum(arr[0], arr[1], arr[2]))
console.log(sum(...arr))

// let obj = {...arr}
// console.log(obj)
