/*
// String,Number,Boolean,Object,Array

// String

let firstname = 'John';
const idcard = '1234';

console.log(firstname)
// Number
let age = 25;
let height = 5.9;

// Boolean
let isMarried = false;

console.log('my name is',firstname,'and I am',age,'years old.');
เขียนไม่ทัน
*/

/*
 + บวก
 - ลบ
* คูณ
/ หาร
% หารเอาเศษ (mod)
*/

/*
let number1= 5;
let number2= 10;

let result = number1 + number2;
console.log(result);
*/
/*
let number1= 4;
let number2= 8;

let result = number1  + number2;
console.log('new number is',result);
*/

/*
== เท่ากับ
!= ไม่เท่ากับ
>
<
>=
<=
*/
/*
let number1 = 5;
let number2 = 5;

let condition1 = number1 >= number2; //Boolean ค่าที่ได้จะเป็น true หรือ false
console.log('result of condition is',condition1)
*/

/*
let number1 = 5;
let number2 = 5;

//if - else condition

if (number1 >= number2) {
        console.log('this is if');
} else if (number1 == number2) {
        console.log('this is  else if');
} else {
        console.log('this is else');
}
*/

/*
>= 80 เกรด A
>= 70 เกรด B
>= 60 เกรด C
>= 50 เกรด D
*/
/*
let score = prompt('Enter your score');
console.log('your score is' + score)
if (score >= 80) { //false
        console.log('you are grade A');
} else if (score >= 70) { //false
    console.log('you are grade B');
}  else if (score >= 60) { //true
    console.log('you are grade C');
}  else if (score >= 50) {
    console.log('you are grade D');
}  else {
    console.log('you are grade F');
}
*/

/*
&& และ
|| หรือ
! ไม่
*/

/*
// true && false = false
// true || false = !(true) = false
let number1 = 5;
let number2 = 8;
 let condition = number1 >= 3 || number2 >= 10;
 console.log('result of condition',condition);

 let age = 30;
 let gender = 'male'
// true || true = true
 if (age >= 20 && gender == 'male') {
    console.log('You are male adult');
 }
*/
/*
let number = 25;

if (!(number % 2 == 0)) {
    console.log('you aer odd number');
*/

/*
while loop
for
*/

/*
let counter = 0;

while(counter < 10) { //true
    console.log("while loop");
    counter = counter + 1;
    //counter+ =1
    //counter++
    
    }

    for (let counter = 0; counter < 10; counter = counterc + 1) {
        console.log("for loop");
    }
*/

/*
array
*/
 
/*
let age1 = 20;
 let age2 = 30;
 let age3 = 40;
 let age4 = 50;
 console.log(age1,age2,age3,age4);

 let ages = [30,35,40,45,50];

 if (!ages.includes(40)) {
    console.log('you have to be 40');
 }
 */

 /*
 ต่อages4
 let ages = [30,35,40];
 console.log('new age',ages[2]);
 console.log('new list',ages);

 //1แทนที่ค่าใน array
 ages = [45,50];
 console.log('new age',ages);

 //2ต่อ array
 ages.push(55);
 console.log('new age',ages);
 */
/*
 let ages = [90,60,40,45,50];
 console.log(ages);
 ages.sort();
 console.log(ages);

 let numes_list = ['John','Bob','Alice','Mary'];
 names_list.push('Mike');
 console.log(numes_list.length);
 console.log(numes_list[0]);

 for (let index = 0; index < names_list.length; index++0) {
 console.log('numes list',numes_list[index]);
}
*/

/*
opject
*/

/*
let student = [{
    name2 = 'zz',
    age2 = 90,
    gender2 = A
}, {
    name2 = 'aa',
    age2 = 66,
    gender2 = B
}];

student.pop()

for (let index = 0; index < student.length; index++) {
    console.log('student number',(index + 1 ));
    console.log('name'student[index].name);
    console.log('age'student[index].age);
    console.log('grade'student[index].grade);
}
*/

/*
opject + array
*/
/*
let score1 = 50
let score2 = 90
let grades =  ''
//ประกาศ function ชื่อ calculatGrade ที่มี parameter เป็น scores
function calculatGrade(scores){
    if (scores >= 80) {
        grades = 'A'
    } else if (scores >= 70) {
        grades = 'B'
    } else if (scores >= 60) {
        grades = 'C'
    } else if (scores >= 50) {
        grades = 'D'
    } else {
        grades = 'F'
    }
    return grades
}
let student1 = calculatGrade(score1)
let student2 = calculatGrade(score2)
console.log('grad:', student1, student2)
*/

/*
array
*/
/*
let score = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let index = 0; index < score.length; index++) {
    console.log(score[index]);
}

 
 //
 score[0] = score[0] * 2;
 score[1] = score[1] * 2;
 score[2] = score[2] * 2;
 score[3] = score[3] * 2;
 score[4] = score[4] * 2;
 //


score = score.map((s) => {
    return s * 2;
});

score.forEach((s) => {
    console.log('score:',s)
})
*/

/*
array
*/

/*
let score = [10, 20, 30, 40];
//let newScortes = []

for (let index = 0; index < score.length; index++) {
    console.log('Score',score[index]);
   //
    if (score[index] >= 30) {
        newScortes.push(score[index]);
    }
   //
}

let newScortes = score.filter((s) => {
    if (s >= 20);
})

newScortes.forEach((ns) => {
    console.log('New Score',ns);
})
    ฟีมส่งเมล
*/

/*
ojects functions
*/
/*
let students = [
    {
        name: "John",
        score: 90,
        grade: 'A'
    },
    {
        name: "Jane",
        score: 75,
        grade: 'B'
    },
    {
        name: "Jim",
        score: 60,
        grade: 'C'
    }
]
let student = student.find((s) => {
    if (s.name == "Jane") {
        return true
    }
})

let doublescore_studnt = student.map((s) => {
    s.score = s.score * 2
})

let highscore_studnt = student.filter((s) => {
    if (s.score > 80) {
        return true
    }
})

console.log('student:',student)
console.log('highscore_student:', highscore_student)
*/