// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAx2sollzz5YclR-4PFO1If-MxWCscvUNk",
    authDomain: "let-chat-web-app-b7a05.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-b7a05-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-b7a05",
    storageBucket: "let-chat-web-app-b7a05.appspot.com",
    messagingSenderId: "6149273726",
    appId: "1:6149273726:web:3293edc75518073d34402f",
    measurementId: "G-8DVXP2WSQQ"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom(){
            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose: "adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location="Kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- "+Room_names);
      row="<div class='room_name' id="+ Room_names + " onclick='redirecttoroomname(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}

function logOut(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}


