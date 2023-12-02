$(window).scroll(function () {
    if($(this).scrollTop()){
        $(".Heest").fadeOut();
    }else{
        $(".Heest").fadeIn();
    }



 })