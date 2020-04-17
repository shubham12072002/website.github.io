
function checkWindowWidth(){
    width = $(window).width();
    if(width <= 767){
        $(".footer-top h4").addClass("mobile");
    } else{
        $(".footer-top h4").removeClass("mobile");
        $(".footer-top ul").slideDown();
    }
}
checkWindowWidth();
$(document).ready(function (){
    $(".footer-top h4").click(function(){
        if($(this).hasClass("mobile")){
        $(this).closest("div").find("ul").slideToggle();}
    });
});
$(window).resize(checkWindowWidth);