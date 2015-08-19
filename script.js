$(document).ready(function(){


    $(".pict").each(function(idx,val){
        var $desc = $(this).find(".desc");
        var $feat = $(this).find(".feat");
        var $featbutton = $(this).find(".featbutton");

        $(this).hover(function(){
            $desc.fadeOut();
            $feat.fadeIn();
            $featbutton.fadeIn();

        },function(){
            $desc.fadeIn();
            $feat.fadeOut();
            $featbutton.fadeOut();


        });
    });


});
//alert("My first Javascript");

//document.getElementById('header').innerHTML = "This Is Just Normal Header";

// function changeFooterBG()
// {
//     document.getElementById('footer').style.backgroundColor="red";
// }
//
// function countClick()
// {
//     document.getElementById('counter').value = "it has been clicked!";
//
//
//
// }
