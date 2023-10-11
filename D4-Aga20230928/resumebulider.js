// const firebaseConfig = {
//     apiKey: "AIzaSyCyHb7gFP6fB9G__j-ZQ_o1RLI0CU0QFMI",
//     authDomain: "loginform-f3c89.firebaseapp.com",
//     databaseURL: "https://loginform-f3c89-default-rtdb.firebaseio.com",
//     projectId: "loginform-f3c89",
//     storageBucket: "loginform-f3c89.appspot.com",
//     messagingSenderId: "881392344271",
//     appId: "1:881392344271:web:7a663497aa05d95f2aabba"
//   };

// const firebaseConfig = {
//     apiKey: "AIzaSyCyHb7gFP6fB9G__j-ZQ_o1RLI0CU0QFMI",
//     authDomain: "loginform-f3c89.firebaseapp.com",
//     databaseURL: "https://loginform-f3c89-default-rtdb.firebaseio.com",
//     projectId: "loginform-f3c89",
//     storageBucket: "loginform-f3c89.appspot.com",
//     messagingSenderId: "881392344271",
//     appId: "1:881392344271:web:7a663497aa05d95f2aabba"
//   };
    
   
    
//   // initialize firebase
// //   firebase.initializeApp(firebaseConfig);
//   const app=initializeApp(firebaseConfig);

   
   
//   // reference your database
                 
//                     var auth=firebase.auth();
//                     console.log(auth)














let resumeDetails={

};
let education={};

function test(e,p_data){            //p_data undefined because not initialize
    // console.log(p_data)
    //console.log(e)
    if(p_data){
        
        if(resumeDetails[p_data])
        {
        resumeDetails[p_data]={ ...resumeDetails[p_data]}   //{personaldetails:{fathername:tt}}
        }
       
        
        else
        {
            resumeDetails[p_data]={}
          
        }
    resumeDetails[p_data][e.name]=e.value  //initializing code  {personaldetails:{fathername:tt;
                                                                                // mothername:yyy}}

    } 
  
    else 
    {
        resumeDetails[e.name]=e.value;
        console.log(resumeDetails)      //without p_date 
    }
  display()
}

function mainMulEvents(p_data,ele_id){
    console.log(p_data)
    // console.log(ele_id)
    if(!resumeDetails[p_data])          //if not
    {
        resumeDetails[p_data]=[]        //initializing
    }
                if(ele_id)
                {
                    let values=document.getElementById(ele_id).value
                            if(values=="")
                            {
                                alert("enter valid value")
                            }
                            else
                            {
                            resumeDetails[p_data].push(document.getElementById(ele_id).value)
                                    let skillSet=resumeDetails[p_data]
                                    console.log(skillSet)
                                    showSkills(skillSet,p_data)
                            document.getElementById(ele_id).value="" //refresh
                            display()
                            }
                }
                else
                {
                resumeDetails[p_data].push(education);
        // if(education)
        // {
        //     education={...education}
        // }
                refresh(education,p_data)
                let keys=Object.keys(education)
                // console.log(keys)
                for(i=0;i<keys.length;i++){
                let each=keys[i]
                document.getElementById(each).value=""
                
                }
                education={}
        // let det=resumeDetails[p_data]
        // refresh(det)

                }
  
    display()
   
   
}
function refresh(data_refresh,fdata){
    let edu_details=resumeDetails[fdata];
    console.log(edu_details)
    let setskills=""
      for(i=0;i<edu_details.length;i++){

        console.log(edu_details)
        for(let key in edu_details[i]){
        // console.log(key)
            // displaydata=displaydata+`<tr>
            // <td>${key}</td>
            // <td>${[edu_details[i][key]]}</td>
            // <td><button onclick="del('${edu_details[i]}','${fdata}')">&#128465</button></td>
            //    `
        
               setskills= setskills +`
                <tr>
                   <td>${key}</td>
                   <td>${[edu_details[i][key]]}</td>
                   <td><span class="d-flex flex-row btn btn-primary">
               
                   <span type="button" onclick="dell('${edu_details}','${fdata}')">
                  
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> 
                   
                       <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                       <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                     </svg>
                   
               </span>
               </span><td></tr>`
                  
                  
        }
       

        }
       
        

        document.getElementById(fdata).innerHTML=setskills

        display()



      }
   
  //   let keys=Object.values(education)
  //   console.log(keys)
  //   let html_data=""
          
  //  for(i=0;i<data_refresh.length;i++){
  //           html_data=html_data+`<tr>
  //           <td>${fdata}</td>
  //           <td>${user_list[i].email}</td>
  //           <td><button onclick="del('${user_list[i].email}')">&#128465</button></td>
  //           <td><button onclick="editData('${user_list[i].email}')">&#x270E;</button></td>
  //           `
  //       }
  //  
  //   del(mail1)
  //   

  function showSkills(set,data){    ///display
    console.log(data)
    let setskills=""
    for(i=0;i<set.length;i++){
        
      
            setskills= setskills +`
            <span class="btn btn-primary">
            ${set[i]}
            <span type="button" onclick="del('${set[i]}','${data}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                  </svg></span>
            </span>`
       
    }
   
    document.getElementById(data).innerHTML=setskills

}


   
function del(skillname,data){
    console.log(skillname)
    let skill_s=resumeDetails[data]
    console.log(skill_s)
    let wanted=[]
            for(i=0;i<skill_s.length;i++)
                {
                if(skill_s[i]!=skillname)
                {
                    console.log(skill_s[i])
                    wanted.push(skill_s[i])
                }
                }
   resumeDetails[data]=wanted
   console.log(resumeDetails[data])
   display()
   showSkills(resumeDetails[data],data)
  
 
}

// function dell(skillname,data){
    
//     console.log(data)
//     console.log(Object.values(skillname))
   
  
 
// }
    

function display(){
    document.getElementById("display_data").innerHTML=JSON.stringify(resumeDetails,undefined,2)
}



function handleMulArraydata(ele){
   
    education[ele.name]=ele.value
//    console.log(education)
 }
   





function firebase(){
let saveToName=prompt("Enter the file name to submit:")
console.log(saveToName)
(`registeredUsers/${saveToName}/${0}`).set(resumeDetails);
}