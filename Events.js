let button = document.getElementById("btn")

// button.addEventListener("click",()=>{
//     let boxx = document.querySelector(".box")
//     boxx.style.color="red"
// })

// button.addEventListener("dblclick",()=>{
//     let boxx = document.querySelector(".box")
//     boxx.style.color="blue"
// })

// button.addEventListener("contextmenu",()=>{
//     alert("Do not right click please!!")
// })

button.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode)
})