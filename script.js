"use strict";
class Person {
    constructor(Name, age, JobTitle) {
        this.Name = Name;
        this.age = age;
        this.JobTitle = JobTitle;
    }
    creatFunction() {
        return `My Name is ${this.Name} and i am ${this.age} Years old, and i work  ${this.JobTitle} Bereich.`;
    }
}
let result = document.getElementById("result");
let obj = new Person("aya", 20, "IT");
let obj2 = new Person("aya", 20, "IT");
// result.innerHTML = obj.creatFunction();
class ExtraPerson extends Person {
    constructor(Name, age, JobTitle, salary, jobLocation) {
        super(Name, age, JobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    PrintExtra() {
        return ` My Name is ${this.Name} and i am ${this.age} Years old, and i work  ${this.JobTitle} Bereich ,and i get ${this.salary} every month , and i work in ${this.jobLocation}.`;
    }
}
let extraresult = document.getElementById("extraresult");
let Aktuell = new ExtraPerson("Mohamad", 34, "IT", 5000, "Wien");
extraresult.innerHTML = Aktuell.PrintExtra();
let people = [{
        Name: "test",
        age: 22,
        JobTitle: "test"
    }, {
        Name: "test",
        age: 22,
        JobTitle: "test"
    }, {
        Name: "test",
        age: 22,
        JobTitle: "test"
    }];
