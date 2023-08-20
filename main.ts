// class Person {
//    static id: number = 0;
//     personId :number;
//     constructor(){
//         this.personId = ++Person.id;
//     }
// }

// const d = new Person()
// console.log(d.personId);

// const e = new Person()
// console.log(e.personId);

// console.log(Person.id);

class Person{
    name?:string;
}
class Student extends Person{
    course?:string;
    rollNumber?:string;
}
class Teacher extends Person{
    course?:string;
    timing?:string;
}

class Course{
    classTeacher:Teacher;
    students: Student[];
    timing:string;
}

const student1:Student = new Student();
student1.name="Student1"
const student2:Student = new Student();
student1.name="Student2"
const student3:Student = new Student();
student1.name="Student3"

const teacher: Teacher = new Teacher();
teacher.name="Teacher 1";
teacher.course="PIAIC";
teacher.timing="6-10";

const course:Course = new Course();


const stdArray:Student[]=[student1,student2,student3]

