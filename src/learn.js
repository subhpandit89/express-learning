const Person = function(name, birthYear, sex){
    this.name=name;
    this.birthYear=birthYear;
    this.sex=sex;    
}

Person.prototype.greetings = function(){
    console.log("From within Person prototype object");
}

const Student = function(userName, university, course){
    this.userName = userName;
    this.university = university;
    this.course = course;
}

Student.prototype.greetings = function(){
    console.log("From within Student prototype object");
}

Student.prototype = Person.prototype;

const Subhash = new Person("Subhash", 1989, "Male")

console.log(Subhash.__proto__===Person.prototype)

const Rahul = new Student("Rahul", "WBUT", "MCA")
Rahul.greetings();