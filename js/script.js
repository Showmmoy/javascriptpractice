function showDate() {
    document.getElementById('sd').innerHTML = Date();
}

function showText() {
    document.getElementById('st').innerHTML = "Hello World!";
}

function changeText() {
    document.getElementById('ct').innerHTML = "Hello World!";
}

function bulbOn() {
    document
}
// example 2
function bulbOff() {
    document.getElementById('img').src = "images/off.gif";
}
function bulbOn() {
    document.getElementById('img').src = "images/on.gif";
}
// example 3
function changeColor() {
    document.getElementById('cc').style.color = "red";
}
// example 4
function showText() {
    document.getElementById('sohi').style.display = "block";
}
function hideText() {
    document.getElementById('sohi').style.display = "none";
}
// example 5
function showHr() {
    var data = document.getElementsByTagName('hr');
    alert(data.length);
}
// example 6
function cName() {
    document.getElementsByClassName('h4')[0].innerHTML = "Hello World!";
}
// Example 7
function qSelector() {
    document.querySelector('.qs').innerHTML = "showmmoy.com";
}
// Example 8
function qSelectorTwo() {
    document.querySelectorAll('.qsa')[0].innerHTML = "Hello World World!";
}
// Example 9
function declaringVariable() {
    var varoutput = "showmmoy.com";
    document.getElementById('dv').innerHTML = varoutput;
}

// Example 10
let number1, number2;
number1 = 10;
number2 = 20;
number1 += number2;
function varOut() {
document.getElementById('opva').innerHTML = number1;
}

// Jquery Example 1
$(document).ready(function(){
    // alert
    $(".shoms").click(function(){
        alert("Hello World!");
    })
})
// Jquery Example 2
$(document).ready(function(){
    $("#show").on('click', function(){
        $(".tcontent").show();
    })
    $("#hide").on('click', function(){
        $(".tcontent").hide();
    })
    $("#toggle").on('click', function(){
        $(".tcontent").toggle();
    })
    $("#fade").on('click', function(){
        $(".tcontent").fadeToggle(1000);
    })
})
$(document).ready(function(){
    
        $('.ques').on('click', function(){
            $('.ans').slideToggle(1000);
        });
    });