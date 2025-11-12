let students = ["Darshan", "Ramesh", "Bhoomika", "Priyadarshini", "SathishKumar", "Janu", "Pushpanjai", "Somashekharappa", "Papu", "Varshika", "Kumar", "Johny"]
let houses = []

for (const student of students) {
    if (student.length < 6) {
        houses.push("Pop's")
    }
    else if (student.length < 8) {
        houses.push("Poter's")
    }
    else if (student.length < 12) {
        houses.push("Henry's")
    }
    else if (student.length >= 12) {
        houses.push("Jenny's")
    }
    else {
        console.log("Wait for next update")
    }
}
console.log(houses)