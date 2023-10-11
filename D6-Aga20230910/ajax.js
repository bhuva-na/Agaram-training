function details(){
    $.ajax({
        type:"get",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{},
        success:function(responce){
            console.log("Responce",responce)
            let users_details=""
            for(i=0;i<responce.length;i++){
                users_details=users_details+`
                <tr>
                <td>${responce[i].id}</td>
                <td>${responce[i].userId}</td>
                <td>${responce[i].body}</td>
                <td><button type="button" onclick="alert_details(${responce[i].id})">${responce[i].title}</button></td>
                </tr>
                `

            }
            $("tbody").html(users_details)
        },
        error:function(err){
            console.log("error",err)
        }
    })
    // $("#header").Toggle();
}



function alert_details(id){
    console.log(id)
    $.ajax({
        type:"get",
        url:`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        data:{},
        success:function(responce){
            console.log("commments",responce)
            let commants_details=""
            for(i=0;i<responce.length;i++){
                console.log(responce[i].email)
                commants_details=commants_details+`
                <tr>
                <td>${responce[i].postId}</td>
                <td>${responce[i].id}</td>
                <td>${responce[i].name}</td>
                <td>${responce[i].email}</td>
                <td>${responce[i].body}</td>
                </tr>
                `

            }
            $("#second").html(commants_details)
            
        },
        error:function(err){
            console.log("error",err)
        }
    })

}


function submt(){
    $("#sub").click(function () { 
        var Email = $("#email").val(); 
        var Name = $("#name").val(); 
        var Body= $("#body").val(); 
        // console.log(Email,Name,Body)
       
           
        
        $.ajax({
            type:"post",
            url:"https://jsonplaceholder.typicode.com/posts",
            data:{ postId:1,
            email:Email,
                name:Name,
                body:Body
        },
            success:function(responce){
                console.log("Responce",responce)
            

               
            },
            error:function(err){
                console.log("error",err)
            }
        })
    }); 
   
       
           
    
    
    
   
    // $("#header").Toggle();

}