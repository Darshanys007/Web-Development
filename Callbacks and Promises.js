// Asyncronous function 

console.log("I am Darshan")
console.log("I am Puneeth")
setTimeout(() => {
    console.log("I am timeout")
}, 2000);
console.log("The End")

const callback = (arg)=>{
    console.log(arg)
}
const loadScript = (src,callback)=>{
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Darshan");
    document.head.append(sc)
}
loadScript("www.facebook.com",callback)