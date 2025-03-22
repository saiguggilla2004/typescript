// abstract class Department{
//     name :string;
//     constructor(n:string)
//     {
//         this.name=n;
//     }

//     display()
//     {
//         console.log("department "+this.name);
//     }

//     abstract describe(this:Department):void;
// }


// class ChildClass extends Department{
//       describe():void
//       {
//        console.log(this.name)
//       }
// }


//! const cse=new Department("computer science");
// cse.display();

// const child=new ChildClass("sai");
// child.display()

// const c=new ChildClass("sai");
// c.describe()

interface details{
    name:string;
    age:number;
     getage():void;
     getname():void;

}

class Person implements details{
    name:string;
    age:number;
    constructor(name:string,age:number)
    {
    this.name=name;
    this.age=age;
    }
    getage(): void {
        console.log(this.age);
    }

    getname(): void {
        console.log(this.name);
        
    }

}


const c=new Person("sai",21)
c.getage();
c.getname();