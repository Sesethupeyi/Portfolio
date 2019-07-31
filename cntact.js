
 var firebaseConfig = {
    apiKey: "AIzaSyDPjhiXq9guNEQh_cPQF42BkRN4i6qJS7E",
    authDomain: "personal-f6c05.firebaseapp.com",
    databaseURL: "https://personal-f6c05.firebaseio.com",
    projectId: "personal-f6c05",
    storageBucket: "",
    messagingSenderId: "788437339006",
    appId: "1:788437339006:web:9aa408b78963f22c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
    var messageRef=firebase.database().ref('messages');
    
    document.getElementById('Contact_Form').addEventListener('submit', submitForm);  
    
    function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    
    saveMessage(name,email);
    }
    
    function getInputVal(id){
        return document.getElementById(id).value;
    }
    
    function saveMessage(name, email){
    var newMessageRef= messageRef.push();
    newMessageRef.set({
     name: name,
     email: email
    
    });
    
    
    }
    