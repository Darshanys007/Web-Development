let arr = [2, 4, 5, 3, 6]

function delay(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2)
        }, 500);
    })
}
async function arrayMap(array) {
    let newArr = [];
    for (const num of array) {
        const result = await delay(num);
        newArr.push(result)
    }
    return newArr

}
arrayMap(arr).then(newArr => {
    console.log("Original Array:", arr)
    console.log("New Array:", newArr)
})
