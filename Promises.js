let prom = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No it wasn't supported")
    }
    else {
        setTimeout(() => {
            console.log("I am timeout")
            resolve("Darshan")
        }, 2000);
    }
})

// prom.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

// let p = Promise.all([prom])
// p.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p = Promise.allSettled([prom])
p.then((a) => {
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
