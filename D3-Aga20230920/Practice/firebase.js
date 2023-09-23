const firebaseConfig = {
    apiKey: "AIzaSyCyHb7gFP6fB9G__j-ZQ_o1RLI0CU0QFMI",
    authDomain: "loginform-f3c89.firebaseapp.com",
    databaseURL: "https://loginform-f3c89-default-rtdb.firebaseio.com",
    projectId: "loginform-f3c89",
    storageBucket: "loginform-f3c89.appspot.com",
    messagingSenderId: "881392344271",
    appId: "1:881392344271:web:7a663497aa05d95f2aabba"
  };


  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("loginForm");

  document.getElementById("loginForm").addEventListener("button", submitForm);

  function submitForm(e) {
    e.preventDefault();


    
    var emailid = getElementVal("Email");
    var emailpassword = getElementVal("password");


    console.log(emailid,emailpassword)
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };