window.onscroll = function() {myFunction()};

var header = document.getElementById("menu");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
   header.classList.add("sticky");
	  
  } else {
    header.classList.remove("sticky");
  }
}
 jQuery(document).ready(function ($) {
	 $('#mainmenu li').each(function(){
    if($(this).hasClass('menu-item-has-children')) {
        $(this).toggleClass("child");
    } 
}); 
	
       $(".menu-item-has-children > a").click(function() {
 $(this).parent().toggleClass("open-sub-menu");
    
 return false;
}).dblclick(function() {
        window.location = this.href;
	
    });
 });
   
jQuery(function($){
  $('.js-menu__open').on('touchend click', function(){
        var menu = $(this).attr('data-menu');

        $(menu).toggleClass('js-menu__expanded');
        $(menu).parent().toggleClass('js-menu__expanded');

});

$('.js-menu__context, .js-menu__close').on('touchend click', function(event){
    
    if ( $(event.target).hasClass('js-menu__context') || $(event.target).hasClass('js-menu__close') ) {
         $('.js-menu__expanded').removeClass('js-menu__expanded');
    }
});
  
    $('.ajax_add_to_cart').click(function(){


        $('.js-menu__context').addClass('js-menu__expanded');
        $('#main-nav').addClass('js-menu__expanded');

});
 $('.single_add_to_cart_button').click(function(){


        $('.js-menu__context').addClass('js-menu__expanded');
        $('#main-nav').addClass('js-menu__expanded');

});
 
   $('.hamburger').click(function(){
  if($('#myLinks').css('display') == 'none')
{
$("#myLinks").css({display: "block"});
$('#myidi').addClass('fa-times');
$('#myidi').removeClass('fa-bars');

} else {
    $("#myLinks").css({display: "none"});
   
$('#myidi').addClass('fa-bars');
 $('#myidi').removeClass('fa-times');
}
    
 
   }); 
});