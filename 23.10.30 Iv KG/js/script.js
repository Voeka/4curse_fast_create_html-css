$('.aboutUNN').children().hide();

$('.GoUP').hide();


var timer = {
    'days':0,
    'hours':11,
    'min':42,
    'sec':50
}

setInterval(function(){
    timer.sec--;
    if (timer.sec<0){
        timer.min--
        timer.sec=60;
    }
    $('.sec').html(timer.sec);
    $('.min').html(timer.min);
},1000)


$(window).scroll(function () {

    

    if($(this).scrollTop()){
        $(".Heest").slideUp();
    }else{
        $(".Heest").slideDown();
    }

    if ($(this).scrollTop() > 250) { //use `this`, not `document`
        $('.aboutUNN').children().fadeIn();
        $('.GoUP').fadeIn();

      }else{
        $('.GoUP').fadeOut();
      }

      



 })



var pause = false;
var a = 1;
var interval = setInterval(function(){
    if(!pause){
        // console.log(a);
        a++;   
    }

     

    if(a>=5){a = 1}
    
    if((a==1) || (a==2)){
        $('.sliderWays').children().slice(0,2).fadeOut();
        $('.sliderWays').children().slice(2,4).fadeIn();
    }else{
        $('.sliderWays').children().slice(2,4).fadeOut();
        $('.sliderWays').children().slice(0,2).fadeIn();
    }

    if((a==1) || (a==2)){
        $('.sliderWays2').children().slice(0,2).fadeOut();
        $('.sliderWays2').children().slice(2,4).fadeIn();
    }else{
        $('.sliderWays2').children().slice(2,4).fadeOut();
        $('.sliderWays2').children().slice(0,2).fadeIn();
    }

    
},1000)

$('.sliderWays').children().mouseover(function(){
    pause = true;
})

$('.sliderWays').children().mouseleave(function(){
    pause = false;
})


$('.GoUP').click(function(){
    $('body,html').animate({scrollTop:0},700);
})
 