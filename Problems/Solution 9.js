async function placeOrder() {
    let box = document.querySelector(".box")
    box.innerHTML = "Order is processing..."


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // box.innerHTML = "Order Confirmed"
            resolve("Order Confirmed")
        }, 2000);
    })
}
document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("btn")
    button.addEventListener("click", async () => {
        await placeOrder();
    })
})
