// async function getData1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, 4000);
//     })
// }
// async function getData2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, 8000);
//     })
// }

// function hecker(className, str1, str2, str3, str4) {

//     let a = setInterval(() => {
//         document.querySelector(`${className}`).innerText = `${str1}`
//     }, 1000)
//     console.log(a)

//     let b = setInterval(() => {
//         document.querySelector(`${className}`).innerText = `${str2}`
//     }, 1000)
//     console.log(b)

//     let c = setInterval(() => {
//         document.querySelector(`${className}`).innerText = `${str3}`
//     }, 2000)
//     console.log(c)

//     let d = setInterval(() => {
//         document.querySelector(`${className}`).innerText = `${str4}`
//     }, 3000)
//     console.log(d)
// }
// async function main() {
//     hecker(".box", "I am Hacker", "I am Hacker.", "I am Hacker..", "I am Hacker...")
//     let data = await getData1()
//     console.log(data)
//     hecker(".box2", "I am Fake", "I am Fake.", "I am Fake..", "I am Fake...")
//     let data1 = await getData2()
//     console.log(getData2)
//     hecker(".box3", "I am  Fetching your data", "I am  Fetching your data.", "I am  Fetching your data..", "I am  Fetching your data...")
// }
// main()