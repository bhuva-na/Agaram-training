const firebaseConfig = {
    apiKey: "AIzaSyCyHb7gFP6fB9G__j-ZQ_o1RLI0CU0QFMI",
    authDomain: "loginform-f3c89.firebaseapp.com",
    databaseURL: "https://loginform-f3c89-default-rtdb.firebaseio.com",
    projectId: "loginform-f3c89",
    storageBucket: "loginform-f3c89.appspot.com",
    messagingSenderId: "881392344271",
    appId: "1:881392344271:web:7a663497aa05d95f2aabba"
  };
  
    
   
    
  // initialize firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.database();
    var dataRef = db.ref("registeredUsers");





// ............refresh in script......

function logged(){
        dataRef.once('value').then(function(snapshot){
        var data = snapshot.val();
        // console.log(data)
        if(localStorage.getItem("loggedin"))
        {
        // console.log("hi")
        document.getElementById("wel").innerHTML=localStorage.getItem("logname")
        display()
      }
    }
  )
}








// ..............table............
function display(){
    dataRef.once('value').then(function(snapshot){
    var data = snapshot.val();
    let html_data=""
    for(i=0;i<data.length;i++){
            html_data=html_data+`<tr>
            <td>${data[i].Email}</td>
            <td>${data[i].Emailpassword}</td>
            <td><button onclick="del('${data[i].Email}')">&#128465</button></td>
            <td><button onclick="editData('${data[i].Email}')">&#x270E;</button></td>
            `
        }
    document.getElementById("table_update").innerHTML=html_data
   
    }
  )
}





// .........editData...................

function editData(toedit){
//     alert(toedit)
// }
    dataRef.once('value').then(function(snapshot){
    var data = snapshot.val();
    for(i=0;i<data.length;i++){
        if(data[i].Email==toedit){
          let data1 =data[i].Email;
          let data2=data[i].Emailpassword;
          let data3=data[i].Name;
        //   console.log(data1)
        //   console.log(data2)
        let emailInput =prompt("Enter the updated email:",data1.innerHTML);
        let passInput =prompt("Enter the updated password:",data2.innerHTML);
        let nameInput=prompt("Enter the updated name:",data3.innerHTML)
    
        //    ...update the new value...
       
        data1.innerHTML = emailInput;
        data2.innerHTML=passInput;
        data3.innerHTML=nameInput;
       let updated ={
            Email:emailInput,
            Emailpassword:passInput,
            Name:nameInput,
        }
        dataRef.once('value')
        .then(function(snapshot) {
            let data = snapshot.val();
            // console.log(data);
            if(data){
                data.push(updated);
                db.ref("registeredUsers").set(data);}
            else{
              db.ref(`registeredUsers/${0}`).set(updated);
            }

            del(toedit)
          }

          )
        }
      }
     
    }
  )
 }





// ...........delete.........       
 
function del(mail){
        // alert(name)
        // console.log(mail)
        dataRef.once('value').then(function(snapshot){
        var data = snapshot.val();
        const wanted=[]
        for(i=0;i<data.length;i++){
            if(data[i].Email!=mail)
                {
              wanted.push(data[i])
                }
        }
        db.ref("registeredUsers").set(wanted);
        display()
      })
       
    }



// .........logout.........
    function but2(){
      localStorage.removeItem("loggedin")
      window.location="login.html"
    }