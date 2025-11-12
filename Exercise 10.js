let rand = Math.random()
let first, second, third

// first random word
if (rand > 0 && rand < 0.33) {
    first = "Python"
}
else if (rand >= 0.33 && rand < 0.66) {
    first = "Java"
}
else if (rand >= 0.66 && rand < 1) {
    first = "Web"
}
else {
    first = "Php"
}

// second random word
if (rand > 0 && rand < 0.33) {
    second = "development"
}
else if (rand >= 0.33 && rand < 0.66) {
    second = "training"
}
else if (rand >= 0.66 && rand < 1) {
    second = "expert"
}
else {
    second = "coder"
}

// third random word
if (rand > 0 && rand < 0.33) {
    third = "hub"
}
else if (rand >= 0.33 && rand < 0.66) {
    third = "center"
}
else if (rand >= 0.66 && rand < 1) {
    third = "course"
}
else {
    third = "space"
}

console.log(first,second,third)