interface ObjType{
    Name: string;
    age: number;
    JobTitle: string;
    creatFunction?: Function;
}

class Person implements ObjType{
    Name:string;
    age:number;
    JobTitle:string;
    constructor(Name:string,age:number,JobTitle:string){
        this.Name=Name;
        this.age=age;
        this.JobTitle=JobTitle;
    }
    creatFunction():string{
        return`My Name is ${this.Name} and i am ${this.age} Years old, and i work  ${this.JobTitle} Bereich.`
    }
}
let result=document.getElementById("result")as HTMLElement;



let obj : ObjType = new Person("aya", 20,"IT");
let obj2 : ObjType = new Person("aya", 20,"IT");
// result.innerHTML = obj.creatFunction();

class ExtraPerson extends Person{
    salary:number;
    jobLocation:string;
    constructor(Name:string,age:number,JobTitle:string,salary:number,jobLocation:string){

        super(Name,age,JobTitle);
        this.salary=salary;
        this.jobLocation=jobLocation;
    }
    PrintExtra():string{
        return ` My Name is ${this.Name} and i am ${this.age} Years old, and i work  ${this.JobTitle} Bereich ,and i get ${this.salary} every month , and i work in ${this.jobLocation}.`
    }
}


let extraresult=document.getElementById("extraresult")as HTMLElement;
let Aktuell= new ExtraPerson("Mohamad",34,"IT",5000,"Wien");
extraresult.innerHTML=Aktuell.PrintExtra();


let people : Array<ObjType> = [{
    Name: "test",
    age: 22,
    JobTitle: "test"
},{
    Name: "test",
    age: 22,
    JobTitle: "test"
},{
    Name: "test",
    age: 22,
    JobTitle: "test"
}];
