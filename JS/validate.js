const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");

var userflag = false;
var emailflag = false;
form.setAttribute("target", "formresult");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();

});

function checkInput(){
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

  if (usernameValue === "") {
    setError(username, 'Username cannot be blank');
    userflag = false;
  }
  else if (!isName(usernameValue)){
    setError(username, 'not a valid username')
    userflag = false;    
  } else {
    setSuccess(username);
    userflag = true;
  }

if (emailValue === "") {
  setError(email, "email cannot be blank");
  emailflag = false;
}
  else if (!isEmail(emailValue))
  {
  setError(email, "not a valid email");
  emailflag = false;
} else {
  setSuccess(email);
  emailflag = true;
  }  

  if (userflag == true && emailflag == true) {
    form.setAttribute("target", "_blank");
    window.open('./HTML/feedback.html', 'formresult');
    
    function sendEmail() {
      Email.send({
          SecureToken:"c8289b5e-8aeb-4b71-bbc5-d0248ee05843",
          To:"prakashparaak@gmail.com",
          From: "pracashparaak@gmail.com",
          Subject: "You got a mail from : "+document.getElementById("email").value,
          Body: "Name :"+document.getElementById("username").value
              +"<br>Email :"+document.getElementById("email").value
              +"<br>Message :"+document.getElementById("message").value,
      }).then(
          messages => alert('Response submitted successfully')
      );
    }
    sendEmail();
}
}
 
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "error";
  small.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "success";
}

function isEmail(email) {
    return /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/.test(email);
}
  function isName(username) {
    return /^[A-Za-z ]+$/.test(username);
  }

