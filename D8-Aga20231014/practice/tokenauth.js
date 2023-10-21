//  let registerDetails={
//         "request":"create_candidate",
//         "name":name,
//         "email" : email,
//         "password" :password,
//         "aadhar" :aadhar,
//         "address":address,
//         "phone":phone,
//         "city":city,
//         "area":area,
//         "pin":pin,
//  }


function submt(){

      
        let name=$("#name").val();
        let email=$("#email").val();
        let password=$("#password").val();
        let aadhar=$("#aadhar").val();
        let address=$("#address").val();
        let phone=$("#phone").val();
        let city=$("#city").val();
        let area=$("#area").val();
        let pin=$("#pin").val();
    
  

    $.ajax({
        type:"POST",
        url:"http://agaram.academy/api/action.php",
        data:{
            "request":"create_candidate",
            Name:name,
            Email:email,
            Password:password,
            Aadhar:aadhar,
            Address:address,
            Phone:phone,
            City:city,
            Area:area,
            Pin:pin,
        
      },
           
        success:function(response){
            console.log("Responce",response);
            window.location="login.html"
            // console.log('all details',allDetails());
          
        },
        error:function(err){
            console.log("error",err)
        }
    })
}

function loginForm(){
    let email=$("#log_email").val();
    let password=$("#log_password").val();
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:
            {
                request:"candidate_login",
                Email : email,
                Password :password,
               
            },
        success:function(response){
            console.log("Responce",response)
            let id=JSON.parse(response)
            let user_id=id.data.id
            window.location=`hometoken.html?id=`+user_id

        },
        error:function(err){
            console.log("error",err)
        }
    })

}

function allDetails(){
//     let email=$("#log_email").val();
//    let password=$("#log_password").val();
    $.ajax({

        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:
            {
                request:"getAllMembers",
              
               
            },
        success:function(responce){
            console.log("Responce",responce)

         
            let id=JSON.parse(responce)
            let userdetailss=id.data

            let userdetails=""
        for(i=0;i<userdetailss.length;i++){
            userdetails=userdetails+`<tr>
            <td>${userdetailss[i].id}</td>
            <td>${userdetailss[i].name}</td>
            <td>${userdetailss[i].email}</td>
            <td>${userdetailss[i].aadhar}</td>
            <td>${userdetailss[i].address}</td>
            <td>${userdetailss[i].phone}</td>
            <td>${userdetailss[i].city}</td>
            <td>${userdetailss[i].area}</td>
            <td>${userdetailss[i].pin}</td>`
           
           
        }
        document.getElementById("tbody").innerHTML=userdetails;
          
          
           
            
            
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
    
    // console.log(id)
   
    
}

