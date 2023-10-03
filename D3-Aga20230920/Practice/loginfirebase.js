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
   
   
 // ...................login................................................................
                     
 
                    var db = firebase.database();
                    var dataRef = db.ref("registeredUsers");
                    var auth=firebase.auth()
                    console.log(auth)












//.............register..................                   
const submitForm=()=>{
    var name = document.getElementById("name").value;
    var emailid = document.getElementById("Email").value;
    var emailpassword = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(emailid,emailpassword).then((result)=>{
        alert("registed successfully")
        console.log(result)
    })
    .catch((error)=>{
        console.log(error.code);
        console.log(error.message);
    })
}
                   



//..................login......................
const loginForm=()=>{
    var name = document.getElementById("name").value;
    let user_detail=document.getElementById("Email").value
    let Password=document.getElementById("password").value
    auth.signInWithEmailAndPassword(user_detail,Password)
    .then((result) => {
      alert("loggedin successfully")
     
     
      //getting currentuser details to set 
    const user = firebase.auth().currentUser;
               //   console.log(user)
            var uid = user.uid;
                console.log(uid)
                let details={
                useremail:user_detail,
                user_name:name,
                username:name,
                loggedin:true,
                }
      db.ref('registeredUsers/'+uid).set(details);
     
       window.location="home.html"
     ;
    }) 
    .catch((error) => {
      alert("register first/invalid details")
      console.log(error.code);
      console.log(error.message);
                      }
                      );
                    }
    
       
     
//.............refresh........................     
      function logged(){
        
          // console.log(data)
          firebase.auth().onAuthStateChanged((user) => {
            if (user){
              // console.log(user)
              var uid = user.uid;
              db.ref(`registeredUsers/${uid}`).once('value').then(function(snapshot)
              {
              var data = snapshot.val();
              // console.log(uid)
              // console.log(data)
              if(data.loggedin==true)
              {
                document.getElementById("wel").innerHTML=data.username;
                display()
              }
             
            }
          )
        }
      }
    )
    }

         
//................logout.........................         
            function but2()
            {
              firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                 
                  // console.log(user)
                  var uid = user.uid;
                  db.ref(`registeredUsers/${uid}`).once('value').then(function(snapshot){
                    var data = snapshot.val();
                  // console.log(uid)
                  // console.log(data)
            if(data.loggedin==true){
                let log={
                  loggedin:false,
                }
                db.ref('registeredUsers/'+uid).set(log);
                window.location="login.html"
            }    })}})}

 




//.................table display..................
function display(){
                 firebase.auth().onAuthStateChanged((user) => {
                          if (user){
                                // console.log(user)
                                var uid = user.uid;
                                db.ref(`registeredUsers/${uid}`).once('value').then(function(snapshot)
                                {
                                var data = snapshot.val();
                                let html_data=""
  
                                html_data=html_data+`<tr>
                                <td>${data.username}</td>
                                <td>${data.useremail}</td>
                                <td><button onclick="del('${data.useremail}')">&#128465</button></td>
                                <td><button onclick="editData('${data.useremail}')">&#x270E;</button></td>
                                        `
                                document.getElementById("table_update").innerHTML=html_data

                                }
                              )
                            }
                          }
                        )
                      }




//.............secure................

function secure(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // console.log(user)
      var uid = user.uid;
      db.ref(`registeredUsers/${uid}`).once('value')
      .then(function(snapshot){
                              var data = snapshot.val();
                                          // console.log(uid)
                                         // console.log(data)
                              if(data.loggedin==false)
                              {
                              window.location="login.html";
                              }
                              }
                              )
                            }
                          }
                        )
                      }




                      function frontlog(){
                        window.location="login.html"
                    }
                    
                    function frontreg(){
                        window.location="reg.html"
                    }