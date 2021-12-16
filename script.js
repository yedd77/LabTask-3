function validateForm() {

  var name = document.getElementById("Username");
  var pass = document.getElementById("Password").value;
  var matrix = document.getElementById("Matrix");
  var address = document.getElementById("Address");
  var dept = document.getElementById("dept");
  var status = document.getElementsByName("Status");
  var inter = document.querySelector('input[id="inter"]:checked');
  var validradio = false;

  if (name.value == "" ) {
      alert("Please enter your username");
      return false;
  }

  if (pass == ""){
      alert("Please enter your password");
      return false;
  }

  if (pass.length < 8){
      alert("Your password must be more than 8 character");
      return false;
  }

  if (matrix.value == ""){
      alert("Please enter your matrix number");
      return false;
  }

  if (address.value == ""){
      alert("Please enter your address");
      return false;
  }

  if (dept.value == ""){
      alert("Please select your department");
      return false;
  }

  var i = 0;
  while(!validradio && i < status.length){
    if(status[i].checked) validradio = true;
    i++;
  }

  if (!validradio){
    alert("Please select your marital status");
    return false;
  }

  if(!inter){
    alert("Please select atleast one interest");
    return false;
  }
  return true;
}