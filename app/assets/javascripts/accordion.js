$(document).ready(function(){
    $('.acordion .texto').slideUp();
    $('.acordion .boton').click(function(){
        $(this).next('.acordion .texto').slideToggle('fast');
    })
})