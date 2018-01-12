$(function() {
    $('.msg_title').click(function() {
        if ($('.msg').hasClass('activeMsgOpen')) {
            $('.msg').removeClass('activeMsgOpen');
            $('.msg').addClass('activeMsgHide');
        } else {
            $('.msg').removeClass('activeMsgHide');
            $('.msg').addClass('activeMsgOpen');
        }
    });
})