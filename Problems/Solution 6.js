function vowelCounter(str) {
    let count = 0
    let vowels = "aeiouAEIOU"
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if(vowels.includes(char)){
            count++
        }
        
    }
    return count;
    
}
console.log(vowelCounter("Priyadarshini"))