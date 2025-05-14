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

$(document).ready(function(){
    $( function() {
        $( "#draggable" ).draggable();
      } );
      $( function() {
        $( "#accordion" ).accordion({
          collapsible: true
        });
      } );
    });

    $(document).ready(function(){
    var data = ["HTML", 
        "CSS", 
        "JavaScript", 
        "PHP", 
        "Python"
    ];
    $( "#topic" ).autocomplete({
        source: data
      });

    });

    $(document).ready(function(){
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       10,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();


      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
      });

        $(document).ready(function(){
           /**
     * Demo 1
     */
    var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });  
        })

    $(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });

    });

    $(document).ready(function(){

        $('.flip-demo').on('done', function() {
        console.log('doooooonnnnnee!');
        });

        $('.flip-demo').on('before<a href="https://www.jqueryscript.net/tags.php?/Flip/">Flip</a>ping', function(e, data) {
        console.log('beforeFlipping:', data);
        });

        $('.flip-demo').on('afterFlipping', function(e, data) {
        console.log('afterFlipping:', data);
        });
    })
  

    
        $(function() {
            $("#marqueeLeft").marquee();
            
            $("#marqueeRight").marquee({
                direction: 'right',
                speed: 15,
                spaceBetween: 15,
                pausehover: true
            });
            
            $("#marqueeUP").marquee({
                direction: 'up',
                pausehover: true
            });

            $("#marqueeDown").marquee({
                direction: 'down'
            })
        });
   