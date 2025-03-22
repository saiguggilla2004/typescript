
// const person:{
//     name:string;
//     age:number;
// }={
//     name:"sai",
//     age:21
// }

// const person:{
//     name:string;
//     age:number;
//     nestedObj:{
//         address:string;
//     };
// }={
//     name:"sai",
//     age:21,
//     nestedObj:{
//         address:"rajahmundry"
//     }
// }
enum ROLE {ADMIN,AUTHOR};

const person:{
    name:string;
    age:number;
    skills:string[];
    role:ROLE;
}={
    name:"sai",
    age:21,
    skills:["skill1","skill2"],
    role:ROLE.AUTHOR,
}


if(person.role===ROLE.ADMIN)
{
    console.log("Admin")
}
else{
    if(person.role===ROLE.AUTHOR)
    {
        console.log("Author");
        
    }
}
// let sample:number[];
// sample=[1,2,3,4,5];
// console.log(sample);


// let sample2:any[]=[1,2,"sai"]
// console.log(sample2);




console.log(person)