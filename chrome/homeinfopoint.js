console.log("------ HomeInfoPoint Extras Initialized ------");

var t1 = document.getElementsByClassName("t02")

console.log(t1)

var sum = 0;
var grades = []
var grade1 = 0
var grade2 = 0
var grade3 = 0
var grade4 = 0
var grade5 = 0
var grade6 = 0

for (var table of t1) {
    for (var i = 0, row; row = table.rows[i]; i++) {
        if (!isNaN(row.childNodes[1].innerText) && row.childNodes[1].innerText) {
            let grade = parseInt(row.childNodes[1].innerText)
             /* (grade == 1) {
                grade1 ++;
            }else if (grade == 2){
                grade2 ++;
            }else if (grade == 3){
                grade3 ++;
            }else if (grade == 4){
                grade4 ++;
            }else if (grade == 5){
                grade5 ++;
            }else if (grade == 6){
                grade6 ++;
            } */

            switch (grade) {
                case 1:
                    grade1 ++;
                    break;
                case 2:
                    grade2 ++;
                    break;
                case 3:
                    grade3 ++;
                    break;
                case 4:
                    grade4 ++;
                    break;
                case 5:
                    grade5 ++;
                    break;
                case 6:
                    grade6 ++;
                    break;
                default:
                    break;
            }
            grades.push(grade)
            sum = sum + grade
        }
    }
}

console.log(`| Sum: ${sum}`);
console.log(`| Grades: ${grades}`);
console.log(`| Average: ${sum/grades.length}`);
console.log(`-----grade Table-----`)
console.log(`| 1: ${grade1}       `)
console.log(`| 2: ${grade2}       `)
console.log(`| 3: ${grade3}       `)
console.log(`| 4: ${grade4}       `)
console.log(`| 5: ${grade5}       `)
console.log(`| 6: ${grade6}       `)



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