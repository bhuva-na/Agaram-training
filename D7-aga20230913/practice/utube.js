


let resumeDetails={};
let education={};

function forSingleMulitiEvents(e,p_data){
    if(p_data)
    {
             if(resumeDetails[p_data])
             {
                resumeDetails[p_data]={...resumeDetails[p_data]}
             }
            else
            {
                resumeDetails[p_data]={}
            }
            resumeDetails[p_data][e.name]=e.value;
    }
    else
    {
        resumeDetails[e.name]=e.value
    }
        toDisplay()
}


function toDisplay(){
    document.getElementById("display").innerHTML=JSON.stringify(resumeDetails,undefined,2)
}


function forMulitiData(p_data,id){
    if(!resumeDetails[p_data])
    {
        resumeDetails[p_data]=[]
    }
        if(id)
            {
        let values=document.getElementById(id).value;
        if(values=="")
        {
            alert("enter vaild value")
        }
        else
        {
            resumeDetails[p_data].push(document.getElementById(id).value);
            // console.log(resumeDetails[p_data])
            let dataInArray=resumeDetails[p_data]
            dataInArrayToDisplay(dataInArray,p_data)
            toDisplay()
            document.getElementById(id).value=""
        }
    }
    else{
        resumeDetails[p_data].push(education)
        displayData(resumeDetails[p_data], p_data) 
        let keys=Object.keys(education)
        console.log(keys)
        for(i=0;i<keys.length;i++){
            let inputId=keys[i];
            document.getElementById(inputId).value=""

        }
        education={}
        toDisplay()
    }
}



function dataInArrayToDisplay(dataInArrays,p_data){
    console.log(p_data)
    let addedDataToDisplay=""
    
    for(i=0;i<dataInArrays.length;i++){
        addedDataToDisplay=addedDataToDisplay+`
        <span class="btn btn-primary">
            ${dataInArrays[i]}
            <span type="button" onclick="toDeleteSingleData('${dataInArrays[i]}','${p_data}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
            </svg>
          </span>`
    }
    document.getElementById(p_data).innerHTML=addedDataToDisplay;
    // toDisplay()
}



function toDeleteSingleData(dataInArray,p_data){
    console.log(dataInArray)
    let dataWantedToArray=[];
    let DataArray=resumeDetails[p_data];

    for(i=0;i<DataArray.length;i++){
        if(DataArray[i]!=dataInArray){
            dataWantedToArray.push(DataArray[i])

        }
    }
    resumeDetails[p_data]=dataWantedToArray;
    toDisplay()
    dataInArrayToDisplay(resumeDetails[p_data],p_data)

}

function handleMulArraydata(e){
        education[e.name]=e.value
}

// function displayData(data, p_key) {
//     var list = ""
//     for (var i = 0; i <data.length; i++) {
//         var s_list = JSON.stringify(data[i])
// console.log(p_key[i])
//         list += `<div id="${p_key[i]}"><span class="btn btn-primary">
//     ${s_list} 
//     <span type="button" onclick="del('${i}','${p_key}')">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
//             <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
//           </svg>
//     </span>
//     </span></div>`
//     }
//     document.getElementById(p_key).innerHTML = list
// }

// function del(indx, p_key) {
//     resumeDetails[p_key].splice(indx, 1)
//     let vanish = document.getElementById(`${p_key[indx]}`)
//     vanish.remove()
//     toDisplay()
// }


function displayData(details,p_data){
    // alert(details)
    // alert(p_data)
    let data=""
    for(i=0;i<details.length;i++){
        // console.log(p_key)
        let tddata=""
        for (const key in details[i]){
            // console.log(`${key}:${p_key[i][key]}`)
            tddata=tddata+`
            <td>${details[i][key]}</td>
            `
            // console.log(data)
            }
            data=data+`<tr>`+tddata+`<td>  <span type="button" onclick="tabledel('${i}','${p_data}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                         <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                       </svg>
                 </span>
                 </span></td>`+`</tr>`
            // console.log(p_key[i])

        }
    document.getElementById(p_data).innerHTML=data

}

function tabledel(todel,p_data){
    console.log(todel)
    console.log(p_data)
    let data=resumeDetails[p_data];
    console.log(data)
    let dele=[]
    for(let i=0;i<data.length;i++){
        console.log(i)
        if(i!=todel){
            console.log(data[i])
            dele.push(data[i])
            // console.log(data)
        }
    }
    resumeDetails[p_data]=dele
    displayData(resumeDetails[p_data],p_data)
    toDisplay()
}

// function fire_base(){
//     let saveToName=prompt("Enter the file name to submit:")
//     console.log(saveToName)
//     database.ref("registeredUsers").once('value').then(function(snapshot)
//     {
//         let data = snapshot.val();
//         console.log(data);
//         if(data)
//         {
//           data.push(JSON.stringify(resumeDetails));
//           database.ref('registeredUsers').set(data);
//         }
//         else
//         {
        
//           database.ref(`registeredUsers/${0}/${saveToName}`).set(JSON.stringify(resumeDetails));
  
//         }
  
//     }
//     )
    
//     }
  
function submt(){
    alert(1)
   let username="Bhuvana";
    $.ajax({
        type:"POST",
        url:"http://agaram.academy/api/action.php",
        data:
            {
            request :"create_resume",
            user:username,
            resume:resumeDetails
            },
        success:function(responce){
            console.log("Responce",responce)
          
          
          
            window.location="home.html"
            
            
        },
        error:function(err){
            console.log("error",err)
        }
    })
}

function gettingData(){
    // alert(1)
   let username="Bhuvana";
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:
            {
                request : "get_user_resume",
                user :username,
            resume:resumeDetails
            },
        success:function(responce){
            let received_data =JSON.parse(responce)
            console.log("Responce",received_data)
            let datas=received_data.data;
            console.log(datas)
            let users_details=""
            for(i=0;i<datas.length;i++){
                // console.log(received_data[i])
                users_details=users_details+`
                <tr>
                <td><button type="button" style="background_color:black;" onclick="gettingDataOfId(${datas[i].id})">${datas[i].id}</button></td>
                <td>${datas[i].user}</td>
                <td><button onclick="deletingData('${datas[i].id}')">&#128465</button></td>
                <td><a href="file:///home/bhuvaneshwari/Agaram/D7-aga20230913/practice/utube.html?id=${datas[i].id}">Link</a></td>
                </tr>
                `

            }
            $("#tbody").html(users_details)
        },
        error:function(err){
            console.log("error",err)
        }
    })
}



function deletingData(id){
    // alert(1)
   let username="Bhuvana";
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:
        {
            request : "delete_user_resume",
            user :username,
            id:id,
            },
        success:function(responce){
        //     let received_data =JSON.parse(responce)
            console.log("Responce",responce)

        //     let datas=received_data.data;
        //     let wanteddata=[]
        //    for(i=0;i<datas.length;i++){
        //     // 
        //     if(datas[i].id!=id){
        //         wanteddata.push(datas[i])
        //         received_data.data=wanteddata;
            
        //     //    console.log(received_data.data)

        //     }
            gettingData()
        //    }
           
        },
        error:function(err){
            console.log("error",err)
        }
    })
}


function gettingDataOfId(id){
    // window.location="detail.html"
    let username="Bhuvana";
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:
            {
                request : "get_user_resume",
                user :username,
            resume:resumeDetails
            },
        success:function(responce){
            let received_data =JSON.parse(responce)
            // console.log("Responce",received_data)
            let datas=received_data.data;
            // console.log(datas)
            let idDetail=""
            for(i=0;i<datas.length;i++){
               if(datas[i].id==id){
                $("#id_detail").html(datas[i].data,undefined,2)
                idDetail=idDetail+ `<a type="button" href="file:///home/bhuvaneshwari/Agaram/D5-Aga20231009/practice/utube.html?id=${datas[i].id}">link</a>`
               }

            }
            $("#detaildisplay").html(idDetail)
        },
        error:function(err){
            console.log("error",err)
            
        }
    })
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};


function valueAssign(id){
    // alert(id)
    // window.location="makeup.html"
    
    let username="Bhuvana";
    $.ajax({

        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:
            {
            //     
            request :"get_resume_by_id",
            user :username,
            id:id,
            },
        success:function(responce){
            
            let received_data =JSON.parse(responce)
            console.log("Responceid",received_data.data)
            let ArrayDetail=received_data.data
            console.log(ArrayDetail.data)
            let ArrayDetails=JSON.parse(ArrayDetail.data)
            console.log(ArrayDetails)
            let name=ArrayDetails.name;
             let Email=ArrayDetails.email;
            let Edu=ArrayDetails.Education;
           let phone=ArrayDetails.phonenumber;
           let github=`<a href=${ArrayDetails.github}>Githublink</a>`
                    $("#name").html(name)
                    // $("#email").html(Email)
                    $("#email").html(Email)
                    $("#phonenumber").html(phone)
                    $("#github").html(github)

                    let declare=ArrayDetails.Declaration;
                    $("#declare").html(declare)
                    let date=`<h4>DATE:${ArrayDetails.date}`

                    $("#date").html(date)
                    let education=""
                            for(i=0;i<Edu.length;i++){
                                    education=education+`<div>
                                    <div  id="eduyear"></div>
                                    <div class="content">
                                    <ul>
                                        <li><p>${Edu[i].edu_level }</p></li>
                                    </ul>
                                        <p>(Institution Name)::${ Edu[i].edu_name}</p>
                                        <p>(Percentage)::${ Edu[i].edu_percentage}</p>
                                
                                    </div>`
                                    // $("#eduyear").html(Edu[i].edu_year)
                                    // $("#edu_name").html(Edu[i].edu_name)
                                    // $("#edu_per").html(Edu[i].edu_percentage)
        
                            }
                            $("#edu").html(education)
                         
                            let projects=""
                            let projts=ArrayDetails.project;
                            // console.log(projts)
                            for(i=0;i<projts.length;i++){
                                projects=projects+`<div>
                                <div  id="eduyear"></div>
                                <div class="content">
                                <ul>
                                    <li><p>${projts[i].project_name }</p></li>
                                </ul>
                                    <p>(Frount End)::${ projts[i].frontEnd}</p>
                                    <p>(Back End)::${ projts[i].BackEnd}</p>
                                    <p>(project Level)::${ projts[i].project_level}</p>
                                </div>`
        
        
                        }
                        $("#pro").html(projects)
                        let skills=ArrayDetails.skill;
                        // console.log(skills)
                        let skillList=""
                        for(i=0;i<skills.length;i++){
                            skillList=skillList+`<li>${skills[i]}</li>`
                        }

             $("#skills").html(skillList)
                    
             
             
             let lang=ArrayDetails.LanguageKnow;
             // console.log(skills)
             let laglist=""
             for(i=0;i<lang.length;i++){
                 laglist=laglist+`<li>${lang[i]}</li>`
             }

  $("#LanguageKnow").html(laglist)
            
            
                   
                

                let objective=ArrayDetails.objective;
                // console.log(objective)
                let personal_Details=ArrayDetails.personal_Details;
                // console.log(personal_Details)
                let personal=""
                personal=personal+`<h4>Father Name:${personal_Details.Father_name}</h4>
                <h4>Mother Name:${personal_Details.mother_name}</h4>
                <h4>Gender:${personal_Details.Gender}</h4>
                <h4>marital status:${personal_Details.marital_status}</h4>
                <h4>Address:${personal_Details.Address}</h4>
                `

                    $("#edu").html(education)
                    $("#name").html(name)
                    $("#address").html(personal_Details.Address)
                    $("#email").html(Email)
                    $("#pro").html(projects)
                    $("#obj").html(objective)
                    $("#skills").html(skillList)
                    // $("#address").html(personal_Details.Address)
                    $("#skills1").html(personal)




                },
            error:function(err){
                console.log("error",err)
                
            }})}




function generatePDF(){
    const page=document.getElementById("res")
    var opt={
        margin:6,
        filename:"Demo.pdf",
        image:{type:'jpeg',quality:0.98},
        html2canvas:{scale:2},
        jsPDF:{units:'in',formate:'letter',orientation:'portrait'}
    };
    html2pdf().set(opt).from(page).save()
}