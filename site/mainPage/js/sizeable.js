//Изменяем размеры иконок в footer при наведении
$(".sizeable").on({
    mousemove: function(){
        $(this).addClass("fa-2x");
    },
    mouseout: function(){
        $(this).removeClass("fa-2x");
    }
});