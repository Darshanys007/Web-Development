const fs = require("fs")
// console.log(fs)

console.log("Starting")
// fs.writeFileSync("darshan.txt","I am a good boy")
// fs.readFile("darshan.txt",(error,data)=>{
//     console.log(error,data.toString())
// })

fs.writeFile("darshan2.txt","I am a good boy2",()=>{
    console.log("done")
    fs.readFile("darshan.txt",(error,data)=>{
        console.log(error,data.toString())
    })
    // fs.appendFile("darshan.txt","I am Darshan",(e,d)=>{
    //     console.log(e,d)
    // })
})
console.log("ending")