import fs from "fs/promises"

let a = await fs.readFile("darshan.txt")

let b = await fs.appendFile("darshan.txt", "\n\n\n\nThis is a Promise")
console.log(a.toString(),b)
