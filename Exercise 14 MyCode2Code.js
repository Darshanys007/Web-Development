async function first() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 4000);
    })
}
async function second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 4000);
    })
}
async function third() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 4000);
    })
}
async function forth() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 4000);
    })
}
async function main() {
    let a = document.querySelector(".box1")
    console.log(a.innerHTML = ">> Getting your password")
    dots(".box1")
    let wait1 = await first()
    console.log(wait1)

    let b = document.querySelector(".box2")
    console.log(b.innerHTML = ">> loading servers ")
    dots(".box2")
    let wait2 = await first()
    console.log(wait2)

    let c = document.querySelector(".box3")
    console.log(c.innerHTML = ">> Fetching your data")
    dots(".box3")
    let wait3 = await first()
    console.log(wait3)

    let d = document.querySelector(".box4")
    console.log(d.innerHTML = ">> Storing all data to our Servers")
    dots(".box4")
    let wait4 = await first()
    console.log(wait4)

    let e = document.querySelector(".box5")
    console.log(e.innerHTML = ">> Your device is Hacked")
    dots(".box5")
    let wait5 = await first()
    console.log(wait5)

    function dots(class1) {
        setInterval(() => {
            let last = document.querySelector(`${class1}`);
            if (last.innerHTML.endsWith("....")) {
            }
            else {
                last.innerHTML = last.innerHTML + "."
            }
        }, 500);
    }

    function dots(class2) {
        setInterval(() => {
            let last = document.querySelector(`${class2}`);
            if (last.innerHTML.endsWith("....")) {
            }
            else {
                last.innerHTML = last.innerHTML + "."
            }
        }, 500);
    }

    function dots(class3) {
        setInterval(() => {
            let last = document.querySelector(`${class3}`);
            if (last.innerHTML.endsWith("....")) {
            }
            else {
                last.innerHTML = last.innerHTML + "."
            }
        }, 500);
    }

    function dots(class4) {
        setInterval(() => {
            let last = document.querySelector(`${class4}`);
            if (last.innerHTML.endsWith("....")) {
            }
            else {
                last.innerHTML = last.innerHTML + "."
            }
        }, 500);
    }

    function dots(class5) {
        setInterval(() => {
            let last = document.querySelector(`${class5}`);
            if (last.innerHTML.endsWith("....")) {
            }
            else {
                last.innerHTML = last.innerHTML + "."
            }
        }, 500);
    }

}
main()
