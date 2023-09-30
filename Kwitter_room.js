const firebaseConfig = {
    apiKey: "AIzaSyAIkDU72ryLpEJT85kp9pHxAPJR8N_GJ5M",
    authDomain: "foodie-fed5a.firebaseapp.com",
    databaseURL: "https://foodie-fed5a-default-rtdb.firebaseio.com",
    projectId: "foodie-fed5a",
    storageBucket: "foodie-fed5a.appspot.com",
    messagingSenderId: "134042796987",
    appId: "1:134042796987:web:b07e390da3d9e1fe80fa9e"
  };
  
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  div 
  //End code
  });});}
  getData();
}

function redirectToRoomName()
{
  function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }
getData();
}