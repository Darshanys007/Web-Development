function createCard(info, thumbnail, chname, views, monthsOld, duration) {
    let viewStr
    if (views < 1000000) {
        viewStr = views / 1000 + "K"
    }
    else if (views >= 1000000) {
        viewStr = views / 1000000 + "M"
    }
    else {
        viewStr = views / 1000 + "K"
    }
    let html = `<div class="card">
               <div class="image"><img src="${thumbnail}" alt="">
                   <div class="capsule">${duration}</div>
               </div>
               <div class="title">
                    <h4>${info}</h4>
                    <p>${chname} . ${viewStr} views . ${monthsOld} months ago</p>
               </div>
               </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}

createCard("How to make coffee | Just 3 Minutes!! | Tutorial #100", "coffee1.jpg", "memes adyaksha", 100000, 4, "3.12")




// coffee1.jpg
// 3.12
// How to make coffee | Just 3 Minutes!! | Tutorial #99
// memes adyaksha
// 435K
// 3
