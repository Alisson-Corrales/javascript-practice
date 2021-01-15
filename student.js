//function Student(fullName, id, gradeLevel, grade){
//    this.fullName = fullName;
//    this.id = id;
//    this.gradeLevel = gradeLevel;
//    this.grade = grade;
//    this.permissions = "Student";
//
//    this.whiteList = function(){
//        this.permissions = "Admin";
//    }
//    this.graduate = function(){
//        if (gradeLevel < 12){
//            this.gradeLevel++;
//        }
//    }
//    this.setGrade = function(value){
//        this.grade = value;
//    }
//    
//}

//class Student{
//    constructor(fullName, id, gradeLevel, grade){
//        this.fullName = fullName;
//        this.id = id;
//        this.gradeLevel = gradeLevel;
//        this.grade = grade;
//        this.permissions = "Student";
//    }
//    
//    this.whiteList = function(){
//        this.permissions = "Admin";
//    }
//    this.graduate = function(){
//        if (gradeLevel < 12){
//            this.gradeLevel++;
//        }
//    }
//    this.setGrade = function(value){
//        this.grade = value;
//    }
//}
//
//let fransisco = new Student("fran", 12345, 12, "A");
//
//fransisco.whiteList();

//console.log(fransisco);


//this is the thing
class User{
    constructor(){
        this.firstName = "John";
        this.lastName = "Smith"
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ");
        // value = value.split("");
        //this.firstName = value[0];
        //this.lastName = value[1];
    }
}

let user = new User();
user.fullName = "Jane Doe";
console.log(user.fullName);