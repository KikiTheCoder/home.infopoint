console.log("------ HomeInfoPoint Extras Initialized ------");

var t1 = document.getElementsByClassName("t02")

var sum = 0;
var grades = []

for (var table of t1) {
    for (var i = 0, row; row = table.rows[i]; i++) {
        if (!isNaN(row.childNodes[1].innerText) && row.childNodes[1].innerText) {
            let grade = parseInt(row.childNodes[1].innerText)
            grades.push(grade)
            sum = sum + grade
        }
    }
}
console.log(`| Sum: ${sum}`);
console.log(`| Grades: ${grades}`);
console.log(`| Average: ${sum/grades.length}`);


/* for (let item of t1) {
    for (let item2 of item.childNodes) {
        for (let item3 of item2.childNodes) {
            console.log(item3);
            for (const item4 of item3.childNodes[1]) {
                console.log(item4);
            }
        }
    }
}
 */