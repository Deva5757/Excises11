function generatePassword(){
  var length=parseInt(document.getElementById("inp").value);
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}|;:,<.>/?";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  alert("Your Password Created  "+"["+password+"]");
}





// function generatePassword(){
//     var length=parseInt(document.getElementById("inp").value);
//     var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}|;:,<.>/?";
//     var password = "";
//     for(var j=0; j<length; j++){
//     for (var i = 0; i < length; i++) {
//       var randomIndex = Math.floor(Math.random() * charset.length);
//       password += charset.charAt(randomIndex);
//     }
//     alert(password);
//   }
// }

