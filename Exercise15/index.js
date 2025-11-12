import fs from "fs/promises"
// console.log(fs)

let files = await fs.readdir("C:\\Users\\USER\\Desktop\\Web development\\Exercise15")
console.log(files)

for (const items of files) {
    console.log(items)
}