$(function(){
    $("#sign").click(function(){
        if($("#email").val()===""){
            $(".email-message").css({display:"block"})
        }
        else{
            $(".email-message").css({display:"none"})
        }
        if($("#password").val()===""){
            $(".password-message").css({display:"block"})
        }
    })
})