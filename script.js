function QuizRespon(){
  var password = document.getElementById("QuizPass");
  var passwordText = password.value;
  if(passwordText=="10"){
    return true;
  }
  if(passwordText=="10 years"){
    return true;
  }
  alert("Oh No! That's Not Right!")
  return false;
}

function SusRespon(){
  alert("This was supposed to be a rickroll, but it keeps getting blocked :(");
}