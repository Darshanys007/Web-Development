document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("I am Child")
})
document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("I am child container")
})
document.querySelector(".container").addEventListener("click", (e) => {
    alert("I am container")
})


// setInterval and setTimeout
// clearInterval and clearTimeout
// using random color
function getRandomColor() {
    let val1 = Math.ceil(Math.random()*255)
    let val2 = Math.ceil(Math.random()*255)
    let val3 = Math.ceil(Math.random()*255)
    return `rgb(${val1}, ${val2}, ${val3})`
}

let a = setInterval(()=>{
    document.querySelector(".container").style.background = getRandomColor()
},3000 )
console.log(a)
// 3000 = 3 seconds
// clearInterval(1)

let b = setTimeout(() => {
    document.querySelector(".childContainer").style.background = getRandomColor()
    console.log(b)
}, 2000);
// clearTimeout(2)