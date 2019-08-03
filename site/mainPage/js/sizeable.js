$(".sizeable").mousemove(function(event){
    $(event.currentTarget).addClass("fa-2x");
});

$(".sizeable").mouseout(function(event){
    $(event.currentTarget).removeClass("fa-2x");
});