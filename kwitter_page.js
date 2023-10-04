//YOUR FIREBASE LINKS

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

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id)
                        console.log(message_data)
                        Name = message_data["name"]
                        like = message_data["like"]
                        message = message_data["message"]

                        namewithtag = "<h4>" + Name + "<img src ='tick.png' class ='user_tick'></h4>"
                        messagetag = "<h3 class ='message_h4'>" + message + "</h3>"
                        likebutton = "<button class ='btn btn-warning' id =" + firebase_message_id + " value=" + Like + " onclick ='updateLikes(this.id)'>"
                        spantag = "<span class ='glyphicon glyphicon-thumbs-up'>likes:" + like + "</span></button><hr>"

                        row = namewithtag + messagetag + likebutton + spantag
                        document.getElementById("output").innerHTML += row
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
      var message2 = document.getElementById("message").value;
      console.log(user_name);
      console.log(room_name);
      console.log(message2);
      firebase.database().ref(room_name).push({
            user: user_name,
            message: message2,
            like: 0,
      })

      document.getElementById("message").value = "";
}

function updateLikes(message_id) {
      button_id = message_id
      likes = document.getElementById(button_id).value
      updatelike = Number(likes) + 1
      firebase.database().ref(room_name).update({
            like: updatelike
      })
}