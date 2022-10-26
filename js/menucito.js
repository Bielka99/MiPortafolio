jQuery('document').ready(function($){

    var menuBtn =$('.menu-icono'),
    menu = $('.navigation li');

    menuBtn.click(function(){

        if(menu.hasClass('show')){

            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }
    });
});