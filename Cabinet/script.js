$(document).ready(function(){
 
    
    if($("#siteLogin").val()!='')
    {
        $("#siteLogin").prev().text('');
        $("#sitePass").prev().text('');
    }
     
     
    
     
    $("div > input").focus(
    function(e)
    {
        var clicked = $(e.target),
        clickedId = clicked.attr("id");
     
    
     
        if(clickedId=="siteLogin")
        {
             clicked.prev().text('');
        }
     
        
     
        else if(clickedId=="sitePass")
        {
             clicked.prev().text('');
         }
     
    });
     
    
     
    $("div > input").blur(
    function(e)
    {
        var clicked = $(e.target),
        clickedId = clicked.attr("id");
     
        if(clickedId=="siteLogin")
        {
            if(clicked.val()=='') clicked.prev().text('логин');
        }
     
        else if(clickedId=="sitePass")
        {
            if(clicked.val()=='') clicked.prev().text('пароль');
        }
     
    });
     
    });