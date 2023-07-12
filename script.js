let btn = document.querySelector(".toggle");
let toogle = document.querySelector(".nav-link")
function opennav(){
    toogle.classList.add("open")
}
function closenav(){
    toogle.classList.remove("open")
}
// sending form directly to the email

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ahmadmutiullahi@gmail.com",
        Password : "168C6E225692D3AEBEC363A6E34D26EA2198",
        To : 'ahmadmutiullahi@gmail.com',
        From : document.getElementById("email").value,
        Subject : "FOR OFFICIAL ONLY",
        Body : "Name :" + document.getElementById("name").value
                + " <br> Email :" + document.getElementById("email").value
                +" <br> message :" + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}