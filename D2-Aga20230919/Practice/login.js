// let userdetails=[{ email:"bhuvana@gmail.com",
//                     password:"bhuvi",
//                 name:"bhuvana"},     
//                     { email:"shali@gmqil.com",
//                      password:"shali",
//                     name:"shali"}]

// localStorage.setItem("list",JSON.stringify(userdetails))



// function add(){
//     alert("login successfully")
// }





// .....................login Code .....................
        function login(){
            let user_detail=document.getElementById("email").value
            let Password=document.getElementById("password").value

            // alert(user_detail)
            // alert(Password)
        let a=JSON.parse(localStorage.getItem("list"))
            // console.log(a)
            for(i=0;i<a.length;i++){
                // console.log(a[i].email)
                // console.log(a[i].password)
                if ((a[i].email==user_detail) && (a[i].password==Password))
                {
                    alert("login sucessfully")
                    document.getElementById("userdetail").style.display="none"
                    document.getElementById("outer").style.display="block"
                    document.getElementById("register").style.display="none"
                    document.getElementById("wel").innerHTML=`${a[i].name}`
                    localStorage.setItem("loggedin",true)
                    localStorage.setItem("logname",a[i].name)
                    // console.log()
                    display()
            }
        }
        }









// ..........logout button............
        function but2(){
            document.getElementById("userdetail").style.display="block"
            document.getElementById("outer").style.display="none"
            document.getElementById("register").style.display="block"


        }






// ............refresh...........
    function logged(){
        if(localStorage.getItem("loggedin"))
        {
        document.getElementById("userdetail").style.display="none";
        document.getElementById("outer").style.display="block";
        document.getElementById("register").style.display="none"
        document.getElementById("wel").innerHTML=localStorage.getItem("logname")
        }
    }







// .............................register...............
    function register(){
    let user_name=document.getElementById("user_name").value
    let reg_email=document.getElementById("reg_email").value
    let reg_password=document.getElementById("reg_pass").value

        // let localdata=localStorage.getItem("list")
        // let parsedata=JSON.parse(localdata.getItem("list"))
        let parsedata=[]
        if(localStorage.getItem("list")){
            parsedata=JSON.parse(localStorage.getItem("list"))
        }
        // else
        // {
        //  let parsedata=[]
        // }
        parsedata.push({
            email:reg_email,
            password:reg_password,
            name:user_name

        })
    let parse_data=JSON.stringify(parsedata);
    localStorage.setItem("list",parse_data);
    // let display=JSON.parse(localStorage.getItem("list"))
    // console.log(list)

    //  localStorage.setItem("list",{email:"email",password:"password",name:"user_name"})

    // alert(user_name)
    // console.log(user_name)
    // document.getElementById("userdetail").style.display="none"
    // document.getElementById("outer").style.display="block"
    // document.getElementById("register").style.display="none"

    }








// ................tabel............
    function display(){
    let user_list=JSON.parse(localStorage.getItem("list"))
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
    // del(mail)
    }









// ................delete............

        function del(mail){
            // alert(name)
            // console.log(mail)
        let userlist=JSON.parse(localStorage.getItem("list"))
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
            localStorage.setItem("list",want);
            // console.log(list)
            display()
        }


    
// ...................edit............

function editData(toedit){
    // alert(toedit)
    let data_edit=JSON.parse(localStorage.getItem("list"))
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
        if(localStorage.getItem("list")){
            data=JSON.parse(localStorage.getItem("list"))
        }
        data.push({
            email:emailInput,
            password:passInput,
            name:nameInput,
        })
        console.log(data)
        let update_data=JSON.stringify(data);
        localStorage.setItem("list",update_data);
        del(toedit)
}
}
        
    }
   
      



