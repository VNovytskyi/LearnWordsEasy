// Метод плавного появления элементов
function fadeArray(array, mode, timeShowElement, timeBetweenElements){
    var length = array.length;
    for(var i = 0; i < length; ++i){
        if(mode == "in"){
            $(array[i]).delay(i*timeBetweenElements).fadeIn(timeShowElement);
        }
        if(mode == "out"){
            $(array[i]).delay(i*timeBetweenElements).fadeOut(timeShowElement);
        }
    }
}

//Скрываем элементы
$("#startButton").css("opacity", "1");
$("button").hide();
fadeArray($("#slide2").find("div"), "out", 1, 1);
fadeArray($("#slide3").find("div"), "out", 1, 1);
fadeArray($("#slide4").find("img"), "out", 1, 1);


//Плавный выезд главного меню, после: отображение остального контента на slide1     
$("header").slideDown(500, function(){
    //Выводим кнопку start
    
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

    if($(window).scrollTop() > 400){
        fadeArray($("#slide2").find("div"), "in", 200, 100);
    }

    if($(window).scrollTop() > 1500){
        fadeArray($("#slide3").find("div"), "in", 200, 100);
    }

    if($(window).scrollTop() > 2500){
        fadeArray($("#slide4").find("img"), "in", 200, 200);
    }
});

