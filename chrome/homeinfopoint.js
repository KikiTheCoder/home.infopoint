console.log("------ HomeInfoPoint Extras Initialized ------");

var tables = document.getElementsByClassName("t02")

var h3s = document.querySelectorAll("h3")

//15 Fächer

var grades = []
var subjects = []


//iterate trough all tables
// capped at 15 - number of subjects
for(var i = 0; i < 15; i++) {
    const table = tables[i]
    grades.push([])
    subjects.push(h3s[i].innerText)

    //iterate trough all rows
    for(var j = 1; j < table.rows.length; j++) {
        const row = table.rows[j]

        //console.log(`Zensur: ${row.children[1].innerText}`);
        //console.log(`Note: ${row.children[3].innerText}`);

        //push the grade and the weight in the matching place
        grades[i].push({grade: parseInt(row.children[1].innerText), weight: row.children[3].innerText})

    }
}

var temp_len = 0
var temp_sum = 0
var temp_avg = 0

var perm_len = 0
var perm_sum = 0
var perm_avg = 0

for(var k = 0; k < subjects.length; k++) {
    temp_len = grades[k].length
    perm_len += grades[k].length
    
    for(var l = 0; l < grades[k].length; l++) {
        //console.log(grades[k][l].grade);

        temp_sum += parseInt(grades[k][l].grade)
        perm_sum += parseInt(grades[k][l].grade)

        if (grades[k][l].weight.includes("doppelt") ) {
            perm_len++;
            temp_len++;

            perm_sum += parseInt(grades[k][l].grade)
            temp_sum += parseInt(grades[k][l].grade)
        }
    }

    temp_avg = Math.round((temp_sum / temp_len + Number.EPSILON) * 100) / 100

    console.log(`${subjects[k]} - ${temp_avg}`);
    h3s[k].innerText += ` - Ø${temp_avg}`

    temp_sum = 0;
    temp_len = 0;
}

perm_avg = Math.round((perm_sum / perm_len + Number.EPSILON) * 100) / 100

console.log(`Average over-all: ${perm_avg}`);

const space = document.getElementsByTagName("h2")[1]
space.innerHTML = `<h2>Ø ${perm_avg}</h2><br/>`
