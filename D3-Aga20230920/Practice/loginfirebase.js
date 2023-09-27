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
 
                 
                      function loginForm(){
                        // e.preventDefault();
                        let user_detail=document.getElementById("Email").value
                        let Password=document.getElementById("password").value
                            dataRef.once('value').then(function(snapshot) {
                            let data = snapshot.val();
                            console.log(data);
                            if(data){
                                    let isuser=false;
                                    for(i=0;i<data.length;i++){
                                        if ((data[i].Email==user_detail) && (data[i].Emailpassword==Password))
                                        {
                                            alert("login successfully")
                                            isuser=true;
                                            localStorage.setItem("loggedin",true)
                                            localStorage.setItem("logname",data[i].Name)
                                            window.location="home.html";
                                            break;
                                        }
                                        
                                    }
                                    if(isuser==false){
                                        alert("register first");
                                        window.location="reg.html"
                                    }
                                }
                            })
                    }