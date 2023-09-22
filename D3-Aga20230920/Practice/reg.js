
function register(){
    let reg_name=document.getElementById("name").value
    let reg_email=document.getElementById("Email").value
    let reg_password=document.getElementById("password").value
    // console.log(reg_name)

    let data=[]
       
        if(localStorage.getItem("registed_details")){
            data=JSON.parse(localStorage.getItem("registed_details"))
        }
    
          
            data.push({
                name:reg_name,
                email:reg_email,
                password:reg_password,
                
    
            })
       
        
   
    let data_1=JSON.stringify(data);
    localStorage.setItem("registed_details",data_1);
    alert("Registed successfully")
   
}



function login_1(){
let user_detail=document.getElementById("Email").value
let Password=document.getElementById("password").value
let a=JSON.parse(localStorage.getItem("registed_details"))
    // console.log(a)
    for(i=0;i<a.length;i++){
        // console.log(a[i].email)
        // console.log(a[i].password)
        // console.log(a[i].name)
        if ((a[i].email==user_detail) && (a[i].password==Password))
        {
            alert("login successfully")

          
            localStorage.setItem("loggedin",true)
            localStorage.setItem("logname",a[i].name)
            window.location="home.html";
            break;
            // display()
            // localStorage.getElementById("wel").innerHTML=welcome`${a[i].name}`
// console.log()


          
    }
}

}



function display(){
        let user_list=JSON.parse(localStorage.getItem("registed_details"))
        // console.log(user_list[0])
        //   console.log(user_list)
        let html_data=""
        
        for(i=0;i<user_list.length;i++){
                html_data=html_data+`<tr>
                <td>${user_list[i].name}</td>
                <td>${user_list[i].email}</td>
                <td><button onclick="del('${user_list[i].email}')">&#128465</button></td>
                <td><button onclick="editData('${user_list[i].email}')">&#x270E;</button></td>
                `
            }
        document.getElementById("table_update").innerHTML=html_data
        // del(mail1)
        }
    // console.log(user_list[0])
    //   console.log(user_list)
   

    




    function logged(){
        if(localStorage.getItem("loggedin"))
        {
        
        // console.log("hi")
        document.getElementById("wel").innerHTML=localStorage.getItem("logname")
        display()
        }
    }



    function secure(){
        if(!localStorage.getItem("loggedin")){
            // console.log(loggedin)
            window.location="login.html"
        }
        // else{
        //     window.location="login.html"
        // }
    }



    function but2(){

      
        localStorage.removeItem("loggedin")
        window.location="login.html"
        // document.getElementById("userdetail").style.display="block"
        // document.getElementById("outer").style.display="none"
        // document.getElementById("register").style.display="block"


    }

    function del(mail){
        // alert(name)
        // console.log(mail)
    let userlist=JSON.parse(localStorage.getItem("registed_details"))
        let wanted=[]
        for(i=0;i<userlist.length;i++){
            if(userlist[i].email!=mail)
                {
                // console.log(i)
                wanted.push(userlist[i])
            }
        }
        console.log(wanted)
        let want=JSON.stringify(wanted);
        localStorage.setItem("registed_details",want);
        // console.log(list)
        display()
    }




    function editData(toedit){
        // alert(toedit)
        let data_edit=JSON.parse(localStorage.getItem("registed_details"))
        // console.log(data_edit[0])
        // let data1=data_edit[0]
        for(i=0;i<data_edit.length;i++){
            if(data_edit[i].email==toedit){
              let data1 =data_edit[i].email
              let data2=data_edit[i].password
              let data3=data_edit[i].name
            //   console.log(data1)
            //   console.log(data2)
            let emailInput =prompt("Enter the updated email:",data1.innerHTML);
            let passInput =prompt("Enter the updated password:",data2.innerHTML);
            let nameInput=prompt("Enter the updated name:",data3.innerHTML)
        
            //    ...update the new value...
           
            data1.innerHTML = emailInput;
            data2.innerHTML=passInput;
            data3.innerHTML=nameInput;
    
            let data=[]
            if(localStorage.getItem("registed_details")){
                data=JSON.parse(localStorage.getItem("registed_details"))
            }
            data.push({
                email:emailInput,
                password:passInput,
                name:nameInput,
            })
            console.log(data)
            let update_data=JSON.stringify(data);
            localStorage.setItem("registed_details",update_data);
            del(toedit)
    }
    }
            
        }



function frontlog(){
    window.location="login.html"
}

function frontreg(){
    window.location="reg.html"
}