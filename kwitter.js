function AddUser(){
   user = document.getElementById("User").value;
   localStorage.setItem("user_name",user);
   window.location = "kwitter_room.html"; 
}