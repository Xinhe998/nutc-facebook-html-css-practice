$(function(){
    $('#peo').click(function(){
      if($('#chatbox').hasClass('active')){
        $('#chatbox').removeClass('active');
        $('#chatbox').addClass('close');
      }else{
        $('#chatbox').removeClass('close');
        $('#chatbox').addClass('active');
      }
    });
  });