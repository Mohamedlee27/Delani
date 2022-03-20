$(document).ready(function(){
    $('.design-logo').click(function(){
        $('.design-logo').hide();
        $('.design-info').show();
    });

    $('.development-logo').click(function(){
        $('.development-logo').hide();
        $('.development-info').show();
    });

    $('.design-info').click(function(){
        $('.design-logo').toggle();
        $('.design-info').toggle();
    });
    
   
    $('.project-mangement-logo').click(function(){
        $('.project-mangement-logo').hide();
        $('.project-info').show();
    });

     $('.development-info').click(function(){
        $('.development-logo').toggle();
        $('.development-info').toggle();
    });

    $('.project-info').click(function(){
        $('.project-info').toggle();
        $('.project-mangement-logo').toggle();

    });
    $('.work-logo-1').hover(function(){
        $('#black').css('opacity',1).fadeIn(2000);
    }, function(){
        $('#black').css('opacity',0).fadeOut();
    });
    $('.work-logo-2').hover(function(){
        $('#mighty-ontario').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#mighty-ontario').css('opacity',0).fadeOut();
    });
    $('.work-logo-3').hover(function(){
        $('#orange-oblisque').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#orange-oblisque').css('opacity',0).fadeOut();
    });
    $('.work-logo-4').hover(function(){
        $('#brave').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#brave').css('opacity',0).fadeOut();
    });
    $('.work-logo-5').hover(function(){
        $('#portofolio').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#portofolio').css('opacity',0).fadeOut();
    });
    $('.work-logo-6').hover(function(){
        $('#dashboard').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#dashboard').css('opacity',0).fadeOut();
    });
    $('.work-logo-7').hover(function(){
        $('#burner').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#burner').css('opacity',0).fadeOut();
    });
    $('.work-logo-8').hover(function(){
        $('#giraffe').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#giraffe').css('opacity',0).fadeOut();
    });
});

let submitButton = document.getElementById('submit');
submitButton.addEventListener("click", sendEmail);

function sendEmail(){
    let nameInput = document.getElementById("input_name").value;
    let emailInput = document.getElementById("email_input").value;
    let messageInput = document.getElementById("message").value;
    if(nameInput !== "" && emailInput!=="" && messageInput !== ""){
        alert(nameInput + " Your message has been received!!");
    }else{
        alert("Cannot leave Inputs Empty");
    }
}