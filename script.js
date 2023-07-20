let btn = document.querySelector(".toggle");
let toogle = document.querySelector(".nav-link")
// angles functioning
let angle_one = document.getElementById("angle-one")
let angle_two = document.getElementById("angle-two")
let angle_three = document.getElementById("angle-three")
let angle_four = document.getElementById("angle-four")
let angle_five = document.getElementById("angle-five")
// questios functionig
let question_one = document.querySelector(".q1")
let question_two = document.querySelector(".q2")
let question_three = document.querySelector(".q3")
let question_four = document.querySelector(".q4")
let question_five = document.querySelector(".q5")

function opennav(){
    toogle.classList.add("open")
}
function closenav(){
    toogle.classList.remove("open")
}

// for open and close of angles
function angleopen1(){
    angle_one.classList.toggle("openangles")
    question_one.classList.toggle("open-q1")
}

function angleopen2(){
    angle_two.classList.toggle("openangles")
    question_two.classList.toggle("open-q2")
}

function angleopen3(){
    angle_three.classList.toggle("openangles")
    question_three.classList.toggle("open-q3")
}

function angleopen4(){
    angle_four.classList.toggle("openangles")
    question_four.classList.toggle("open-q4")
}

function angleopen5(){
    angle_five.classList.toggle("openangles")
    question_five.classList.toggle("open-q5")
}
