//Animate Scroll Initialization starts
AOS.init();
//Animate Scroll Initialization ends




//        function sliderCaption() {
//        if ($('#sliderDiv1').hasClass('active')) {
//
//        $('#carouselCaption1').removeClass('hidden');
////        document.querySelector('#carouselCaption1').setAttribute("data-aos", "fade-up");
////        document.querySelector('#carouselCaption1').setAttribute("data-aos-duration", "3000");
////        $('#carouselCaption1').attr("data-aos" , "fade-up");
////        $('#carouselCaption1').attr("data-aos-duration" , "3000");
//        
//
//
//
//
//        }
//
//
//        if ($('#sliderDiv2').hasClass('active')) {
//
//        $('#carouselCaption2').removeClass('hidden');
////        document.querySelector('#carouselCaption2').setAttribute("data-aos", "fade-up");
////        document.querySelector('#carouselCaption2').setAttribute("data-aos-duration", "3000");
//
//        }
//        }
//
//
//var r = setInterval(sliderCaption, 2000);


//
//$(document).ready(function() {
//        $('#hide-me').animate({opacity: 0.0, left: '100px'}, 2000, setInvisible);
//      });
//       
//      function setInvisible() {
//        $('#hide-me').css('visibility', 'hidden');
//      }



//$("<span>Hello world!</span>").insertAfter("p");





//var element = document.getElementById("carouselCaption1");
//var carAttribute = document.createAttribute("data-aos");
//carAttribute.value = "fade-up";
//var carAttribute2 = document.createAttribute("data-aos-duration");
//carAttribute2.value = "3000";
//element.setAttributeNode(carAttribute , carAttribute2);



//if ($('#sliderDiv2').hasClass('active')) {
//var element = document.getElementById("carouselCaption2");
//var carAttribute = document.createAttribute("data-aos");
//carAttribute.value = "fade-up";
//var carAttribute2 = document.createAttribute("data-aos-duration");
//carAttribute2.value = "3000";
//element.setAttributeNode(carAttribute , carAttribute2);
//}
//





$('.carousel-caption').hide();

//carousel fadeIn and fadeOut feature part starts
if( $('.headerWrapperHead').load(".headerWrapperHead") && $('document').ready() ){

    $('.carousel-caption').hide();
    $('.active .carousel-caption').delay(400).addClass('animationPrac').show();
    $('.carousel').on('slid.bs.carousel', function () {
        $('.carousel-caption').hide();
        $('.carousel-caption').removeClass('animationPrac');
        $('.active .carousel-caption').offsetWidth = $('.active .carousel-caption').offsetWidth;
        $('.active .carousel-caption').delay(400).addClass('animationPrac').show();
    });


};












//carousel fadeIn and fadeOut feature part ends









//carousel scroll to hide feature starts
$(window).scroll(function () {
    if ($(this).scrollTop() < 100) {


        $('.fixedWrapper').css("background", "transparent");
    } else {

        $('.fixedWrapper').css("background", "#191D20");
    }
});


$(window).scroll(function () {
    if ($(this).scrollTop() < 300) {

        $('#carouselCaption1').css("opacity", "1");
        $('#carouselCaption2').css("opacity", "1");
        $('.carousel-control').css("opacity", "1");
//        $('#carouselCaption1').css("visibility", "visible");
//        $('#carouselCaption2').css("visibility", "visible");
//        $('.carousel-control').css("visibility", "visible");
    } else {
        $('#carouselCaption1').css("opacity", "0");
        $('#carouselCaption2').css("opacity", "0");
        $('.carousel-control').css("opacity", "0");
//        $('#carouselCaption1').css("visibility", "hidden");
//        $('#carouselCaption2').css("visibility", "hidden");
//        $('.carousel-control').css("visibility", "hidden");
    }
});
//carousel scroll to hide feature ends


















//scrolling feature





/* goto top button / invistible button starts */
$(window).scroll(function () {
    if ($(this).scrollTop() < 100 || $(this).scrollTop() > $(document).height() - $(window).height()) {
        $('.scrollToTop').fadeOut();
    } else {
        $('.scrollToTop').fadeIn();
    }
});

//Click event to scroll to top
$('.scrollToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

/*invisible button jquery ends */












//image show one after one feature starts

var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var img3 = document.querySelector('.img3');

img1.style.visibility = "hidden";
img2.style.visibility = "hidden";
img3.style.visibility = "hidden";


//if ($(window).width() < 960) {
//   alert('Less than 960');
//}
//else {
//   alert('More than 960');
//}


//
//$(window).resize(function() {
//  if ($(window).width() < 960) {
//     alert('Less than 960');
//  }
// else {
//    alert('More than 960');
// }
//});
//








$(window).scroll(function () {
    var hT = $('.threePicWrapper').offset().top,
            hH = $('.threePicWrapper').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
    console.log((hT - wH), wS);
    if (wS > (hT + hH - wH) && $('.img1').load() && $('.img2').load() && $('.img3').load()) {



        setTimeout(myFunction, 300);
    }
});


function myFunction()
{

    img1.style.visibility = "visible";
    setTimeout(function () {

        img2.style.visibility = "visible";
        setTimeout(function () {

            img3.style.visibility = "visible";
        }, 300);


    }, 300);





}
//image show one after one feature ends










//modal part starts
$("#myBtn1").click(function () {
    $("#myModal1").modal();
});

$("#myBtn2").click(function () {
    $("#myModal2").modal();
});

$("#myBtn3").click(function () {
    $("#myModal3").modal();
});

$("#myBtn4").click(function () {
    $("#myModal4").modal();
});

$("#myBtn5").click(function () {
    $("#myModal5").modal();
});

$("#myBtn6").click(function () {
    $("#myModal6").modal();
});

$("#myBtn7").click(function () {
    $("#myModal7").modal();
});

$("#myBtn8").click(function () {
    $("#myModal8").modal();
});

$("#myBtn9").click(function () {
    $("#myModal9").modal();
});

$("#myBtn10").click(function () {
    $("#myModal10").modal();
});

$("#myBtn11").click(function () {
    $("#myModal11").modal();
});

$("#myBtn12").click(function () {
    $("#myModal12").modal();
});
//modal part ends




