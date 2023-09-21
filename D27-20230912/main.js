
// var name=true
// localStorage.setItem("name","true");
// var a=localStorage.getItem("name")
// console.log(typeof(a))


var list=["a","b","c"]
var name=JSON.stringify(list);
localStorage.setItem("letters",name)
var a=localStorage.getItem("letters")
var clist=JSON.parse(a)
console.log(clist[1])
// sessionStorage.setItem("letters",name)


var a=5;
var b="agaram";
var c= true
var d= 0.45;
var e={"h":"eg","g":"h"}
var f=["w","e","r"]

 var my_resume={Name:"Bhuvaneshwari",
    Email:"rizanabhuvana@gmail.com",
    mobileno:"+91 6383615390",  
    Objective:"Being a fresher,seeking for opportunity to enhance my knowledge in a succeding environment",    
    Softskills:["TimeManagement","Communication","Problem-solving","TeamWork"], 
    HardSkills:                                                                          
                {                                                                                       
                Technical_Skills:["Html","CSS","JAVAScripts"],                                      
                Computer_Skills:["Word","Powerpoint","Email"],                                      
                Programming_Skills:["python","JAVAScripts"]                                          
                },
Educational_Qualification:[
        {level:"sslc",
        instution_name:"Fathima Convent Matriculation",
        passed_year:2017,
        percentage:86.40},
        {level:"hsc",
        instution_name:"D.V.D Higher Secondary school",
        passed_year:2019,
        percentage:50.5},
        {level:"BE computerScience",
        instution_name:"Arunachala college of engineering for women",
        passed_year:2023,
        percentage:8.73}
        ],                                   
projects:[
        {MiniProject:                                                             
                {Title:"Online Banking System",                                           
                frontEnd:["HTML","CSS","JAVAScript"],                                                
                BackEnd:["JAVA","mySQL"],
                Tools:["netBeam","github"]                                                       
                }}, 
        {MainProject:
                {Title:"Multi-Objective load balancing technique for resource management in cloud environment",
                frontEnd:["HTML","CSS","JAVAScript"],                                           
                BackEnd:["JAVA","mySQL"],                                                         
                Tools:["Cloud sim","Deeplearning",["github"]]} 
                }
        ],
area_of_intreset:"web development",
Experience:[
        {company:"cts",
        experience:"1.4",
        role:"full_stack_developer"},
        {company:"Google",
        experience:"1.4",
        role:"Team_lead"}
        ],
Hobbies:["Gardening","CraftMaking","Drawing"],
Personal_Details:{                                                                                
        Fathername:"Thalavai MadaSwamy.M",
        Mothersname:"Kala.p",
        FatherOccupation:"Highway DepartMent"},
Languages_Known:{                                 
            Read_Writing_speaking:["Tamil","English"],                                         
            speaking:["Tamil","English","Malayalam"]                                       
            },                                                                                
Date_of_Birth:"30-12-2001",
Gender:"Female",
Martial_Status:"Single",
        Address:{"Door No":"1/42",
        street_name:"Lakshmi puram,kurukkalMadam",
        post:"Vellamadam",
        city:"nagercoil city",
        dist:"kanyakumari"},
Declaration:"Here all my details are truth to my knowldage"
}




let weekdays=["sunday","monday","tuesday","wednesday"]
// console.log(weekdays[2]);
// console.log(weekdays[weekdays.length-1]);

weekdays[2]="thursday";


// weekdays.push="thursday"
// console.log(weekdays)
// weekdays.pop("monday");
// console.log(weekdays);


let detail={
    name:"bhuvana",
    place:"vellamadam",
}

// detail.name="benisha";
// console.log(detail);

// detail.age=["21",22,23];
// console.log(detail);
// my_resume.projects[0].MiniProject.Tools="1,2l3";

// my_resume.HardSkills.Technical_Skills.pop();

// console.log(my_resume.HardSkills)
// my_resume.Educational_Qualification[0].city="nagercoil";
// var user_id="bhuvana";
// function getname(a){
//         console.log(a)
// }
// getname(user_id)


// for(i=0;i<5;i++){
//         console.log(i)
// }


// for(i=0;i>-10;i--)
// {
//         console.log(i)
// }


// a=["sunday","monday","tusday","wednesday","thursday"]
// for(i=0;i<a.length;i++){
//         console.log(a[i]);
// }
// a=[{name:"bhuvana",age:"21",place:"nagercoil"},{name:"benisha",age:"20",place:"nagercoil"}]
// for(i=0;i<a.length;i++){
//         console.log(a[i].name);
// }



// for(i=0;i<my_resume.length;i++){
//         console.log()
// }

// my_resume.Educational_Qualification[3]={level:"ME",instution_name:"arunachla",
//                                         passed_year:2026,
//                                         percentage:86.40}
// var a=my_resume.Educational_Qualification
// function education(educationalquali){
//         for(i=educationalquali.length-1;i>=0;i--)
//         {
               
//                 console.log(i,educationalquali[i].level)
//         }
// }
// education(a)

// var a=my_resume.projects[0].MiniProject.frontEnd
//         // console.log(a)

//         for(i=0;i<a.length;i++){
//                 // console.log(a[i])
//                 if(a[i]==CSS){
//                         console.log(a[i])
//                 }
//                 // console.log(a[i]);
//         }
       