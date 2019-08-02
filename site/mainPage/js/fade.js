// Метод плавного появления элементов
var i = 0;
function fadeInArray(array, timeShow, allTime){
    setTimeout(function(){
    $(array[i]).fadeIn(timeShow)
    i++;
        
    if(i < array.length){
        fadeInArray(array, timeShow, allTime);
    }
    else {
        i = 0;
    }
    }, allTime);
}

//Скрываем элементы
$("#startButton").fadeOut(1);
$("button").fadeOut(1);


//Плавный выезд главного меню       
$("header").slideDown(500);

//Выводим кнопку start
$("#startButton").css("opacity", "1");
$("#startButton").delay(500).fadeIn(2000);

//Выводим кнопки на главном меню
$("#SignInButton").fadeIn(1000);
$("#RegisterButton").fadeIn(1000);

//Выводим главную надпись
fadeInArray($("h1").find("span"), 80, 100);

//Выводим надпись под главной надписью
$("h3").fadeIn(2000);     


$(window).scroll(function () {
    console.log($(window).scrollTop());
})



