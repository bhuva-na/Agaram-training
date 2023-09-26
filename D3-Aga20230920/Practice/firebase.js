


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
 
 
 
 
 
 
 
  // ........register.....................................................................
  // reference your database
                    // firebase.database().ref("/").child("registedusers").update({
                    //     name:"bhuvana"
                    // });
                    


                    // document.getElementById("regForm").addEventListener("submit", submitForm);
                    
                    // function submitForm(e){ 
                    //   e.preventDefault();
                    
                    //   var name = document.getElementById("name").value;
                    //   var emailid = document.getElementById("Email").value;
                    //   var emailpassword = document.getElementById("password").value;
                    //   alert("Registed successfully")
                    //   console.log(name,emailid)
                    
                    // firebase.database().ref("/registedusers").set([{
                    //   Name:name,
                    //   Email:emailid,
                    //   Emailpassword:emailpassword 
                    // }]);
                    // }









                    // ...................login................................................................
                    document.getElementById("loginForm").addEventListener("submit",loginForm);
                    function loginForm(e){
                      e.preventDefault();

                      var userEmail=document.getElementById("Email").value;
                      var userPassword=document.getElementById("password").value;
                      // console.log(userEmail,userPassword)
                      let dataRef =firebase.database().ref("/registedusers");
                      dataRef.once('value').then(function(snapshot){
                      var data = snapshot.val();
    
                      // console.log(data)
                      for(i=0;i<data.length;i++){
                      let loginEmail=data[i].Email;
                      let loginPassword=data[i].Emailpassword;
                      // let loginName=data[i].Name;
                      // console.log(loginEmail,loginPassword)
                  
                      if((userEmail==loginEmail)&&(userPassword==loginPassword))
                      {
                        alert("login Successfully")
                        window.location="home.html";
                        // firebase.database().ref("/registedusers").child(0).push({username:loginName})
                      }
                      else
                      {
                      alert("sorry...!..your login details are incorrect.")
                      }
                     
                      }
                     
                      // homeForm
                      // document.getElementById("wel").innerHTML=loginName
                     }
                      
                    )};
// ......................home .............................................                   


    







































//     saveMessages(name,emailid,emailpassword);
//     alert("Registed successfully")
  
   
    
//   }
  
//   const saveMessages = (name, emailid,emailpassword) => {
//     var newContactForm = contactFormDB.push();
  
//     newContactForm.set({
//       Name: name,
//       Emailid: emailid,
//       Emailpassword:emailpassword,
//     });
//   };
  
  
  
 
// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };




// var contactFormDB = firebase.database().ref("registerForm");
  
// document.getElementById("regForm").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var name = getElementVal("name");
//   var emailid = getElementVal("Email");
//   var emailpassword = getElementVal("password");

//   // console.log(name,emailid)
  
//   saveMessages(name,emailid,emailpassword);
//   alert("Registed successfully")

 
  
// }

// const saveMessages = (name, emailid,emailpassword) => {
//   var newContactForm = contactFormDB.push();

//   newContactForm.set({
//     Name: name,
//     Emailid: emailid,
//     Emailpassword:emailpassword,
//   });
// };




// const getElementVal = (id) => {
// return document.getElementById(id).value;
// };




