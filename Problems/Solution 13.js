let items = {
    "Belt": 100,
    "Laptop": 50000,
    "Switch": 350,
    "Mobile": 26000,
    "Books": 2000,
    "Botels": 250,
    "Beer": 400,
    "TV": 35000,
    "Fridge":75000,
    "Fans":1500,
    "Wires": 2500,
    "Earphones": 850,
}
console.log(items)
let item = prompt("Enter Item")
let quantity = parseInt(prompt("Enter Quantity"))

function calcTotal() {
    if(items[item]){
        return items[item]*quantity;
    }
    else{
        return "Item not found"
    }
}
console.log("Total: ",calcTotal())