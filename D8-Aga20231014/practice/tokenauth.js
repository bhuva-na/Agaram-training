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
            "name":name,
            "email":email,
            "password":password,
            "aadhar":aadhar,
            "address":address,
            "phone":phone,
            "city":city,
            "area":area,
            "pin":pin,
        
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
                email : email,
                password :password,
               
            },
        success:function(response){
            console.log("Responce",response)
            window.location="hometoken.html"
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