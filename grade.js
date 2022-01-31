function getGrade(marks, grades) {
    if (marks > 90) {
        grades = 'A++';
    }
    else if (marks > 80) {
        grades = 'A+';
    }
    else if (marks > 70) {
        grades = 'A';
    }
    else if (marks > 60) {
        grades = 'B';
    }
    else if (marks > 50) {
        grades = 'C';
    }
    else if (marks > 40) {
        grades = 'D';
    }
    else {
        grades = 'F';
    }
    return grades;
}

const myMark = 58;
const myGrade = getGrade(myMark);
console.log('my grade is', myGrade);

const herMark = 48;
const herGrade = getGrade(herMark);
console.log('her grade is', herGrade);

