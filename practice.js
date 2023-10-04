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
//ADD YOUR FIREBASE LINKS

function AddUser() 
{
   user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
   purpose : "adding user"
   })
}