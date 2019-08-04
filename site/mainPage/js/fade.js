// Метод плавного появления элементов
var counter = 0;
function fadeArray(array, mode, timeShow, allTime){
    setTimeout(function(){
        if(mode == "in"){
            $(array[counter]).fadeIn(timeShow);
        }
        else if(mode == "out"){
            $(array[counter]).fadeOut(timeShow);
        }
        else{
            console.log("wrong mode in func fadeArray()");
        }
        
        counter++;
            
        if(counter < array.length){
            fadeArray(array, mode, timeShow, allTime);
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
    fadeArray($("h1").find("span"), "in", 80, 100);
    
    //Выводим надпись под главной надписью
    $("h3").fadeIn(2000);     
});

$(window).scroll(function () {
    console.log($(window).scrollTop());
});

/*
fadeArray($("#slide2").find("div"), "out", 1,1);
fadeArray($("#slide2").find("div"), "in", 100,100);
*/