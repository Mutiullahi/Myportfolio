let btn = document.querySelector(".toggle");
let toogle = document.querySelector(".nav-link")
function opennav(){
    toogle.classList.add("open")
}
function closenav(){
    toogle.classList.remove("open")
}
// sending form directly to the email
// var submit = document.getElementById('btn');

// submit.addEventListener('click', function(e){
//     e.preventDefault()
//     var Name = document.getElementById('name').value;
// var Email = document.getElementById('email').value;
// var Subject = document.getElementById('subject').value;
// var message = document.getElementById('message').value;
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "ahmadmutiullahi@gmail.com",
//         Password : "ltztymqaypvisagr",
//         To : 'ahmadmutiullahi@gmail.com',
//         From : Email,
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// })
// var Name = document.getElementById('name').value;
//     var Email = document.getElementById('email').value;
//     var Subject = document.getElementById('subject').value;
//     var message = document.getElementById('message').value;
// function sendEmail(){
    
//         Email.send({
//             Host : "smtp.elasticemail.com",
//             Username : "ahmadmutiullahi@gmail.com",
//             Password : "ltztymqaypvisagr",
//             To : 'ahmadmutiullahi@gmail.com',
//             From : document.getElementById('email').value,
//             Subject : document.getElementById('subject').value,
//             Body : "message + Name",
//         }).then(
//           message => alert(message)
//         );
// }