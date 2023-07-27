const wantLoggin=prompt("Do You want to Log in","");
if(wantLoggin=="Admin"){
  let passw=prompt("Please enter password","");
  if(passw=="TheMaster"){
    alert("Welcome");
  }
  else if(passw==""){
    alert("Canceled");
  }
  else
  {
    alert("Wrong Password");
  }
}
else if(wantLoggin==""){
  alert("Canceled");
}
else{
  alert("I dont know you");
}
