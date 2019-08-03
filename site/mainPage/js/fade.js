// Метод плавного появления элементов
var counter = 0;
function fadeInArray(array, timeShow, allTime){
    setTimeout(function(){
        $(array[counter]).fadeIn(timeShow)
        counter++;
            
        if(counter < array.length){
            fadeInArray(array, timeShow, allTime);
        }
        else {
            counter = 0;
        }
    }, allTime);
}

//Скрываем элементы
$("#startButton").hide();
$("button").hide();


//Плавный выезд главного меню, после: отображение остального контента на slide1     
$("header").slideDown(500, function(){
    //Выводим кнопку start
    $("#startButton").css("opacity", "1");
    $("#startButton").fadeIn(2000);
    
    //Выводим кнопки на главном меню
    $("#SignInButton").fadeIn(1000);
    $("#RegisterButton").fadeIn(1000);
    
    //Выводим главную надпись
    fadeInArray($("h1").find("span"), 80, 100);
    
    //Выводим надпись под главной надписью
    $("h3").fadeIn(2000);     
});


$(window).scroll(function () {
    console.log($(window).scrollTop());
})