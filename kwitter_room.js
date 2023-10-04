
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyATTBaql9QdzeGRAh7OyBiXAvM7V7N_WaE",
      authDomain: "kwitter-3729a.firebaseapp.com",
      databaseURL: "https://kwitter-3729a-default-rtdb.firebaseio.com",
      projectId: "kwitter-3729a",
      storageBucket: "kwitter-3729a.appspot.com",
      messagingSenderId: "219694174698",
      appId: "1:219694174698:web:d1d0c7089ba4358d55e293"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      });
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"


}



function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name" + Room_names)
                  row = "<div class ='room_name' id =" + Room_names + " onclick ='redirectRoom(this.id)'>#" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row
                  //End code
            });
      });
}
getData();


function redirectRoom(name) 
{
  console.log(name);
  localStorage.getItem("room_name", name);
  window.location = "kwitter_page.html";
  
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}