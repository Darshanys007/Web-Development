async function brewCoffee() {
    let box = document.querySelector(".box")
    box.innerHTML = "Adding Some Flavours..."


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            box.innerHTML = "Your Coffee is ReaDy"
            resolve("Ready!")
        }, 2000);
    })
}
document.addEventListener("DOMContentLoaded", () => {
    let button1 = document.getElementById("btn1")
    button1.addEventListener("click", async () => {
        await brewCoffee();
    })
    let button2 = document.getElementById("btn2")
    button2.addEventListener("click", async () => {
        await brewCoffee();
    })
    let button3 = document.getElementById("btn3")
    button3.addEventListener("click", async () => {
        await brewCoffee();
    })
})
