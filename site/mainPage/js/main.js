//Обработчики
$(document).ready(function() {
    drowTriangles();
    //pictureTable();
});

$(window).resize(function(){
    drowTriangles();
    //pictureTable();
});


//Реализация функций
var drowTriangles = function(){
    $(".trianglesDiv").html("");
    
    var defaultTriangleWidth = 100;
    var displayWidth = $(window).width() - 1;
    var amountTriangles = displayWidth / defaultTriangleWidth;
    var roundAmountTriangles = Math.round(amountTriangles);

    var realTriangleWidth = (defaultTriangleWidth + (displayWidth - defaultTriangleWidth*roundAmountTriangles) / roundAmountTriangles).toFixed(1);

    for(var i = 0; i < roundAmountTriangles; i++)
    {
        $(".trianglesDiv").append("<div class='triangle'></div>");
    }

    $(".triangle").css("border-left-width", realTriangleWidth / 2);
    $(".triangle").css("border-right-width", realTriangleWidth / 2); 
}


//Тест
var pictureTable = function(){
    var windowWidth = $(window).width();

    if(windowWidth < 600)
    {
        $("#pictureDiv").html("");

        $("#pictureDiv").append("<table>");
        $("#pictureDiv").append("<tr><td><img src='images/test.jpg'></td></tr>");
        $("#pictureDiv").append("<tr><td><img src='images/test.jpg'></td></tr>");
        $("#pictureDiv").append("<tr><td><img src='images/test.jpg'></td></tr>");
        $("#pictureDiv").append("<tr><td><img src='images/test.jpg'></td></tr>");
        $("#pictureDiv").append("<tr><td><img src='images/test.jpg'></td></tr>");
        $("#pictureDiv").append("<tr><td><img src='images/test.jpg'></td></tr>");
        $("#pictureDiv").append("</table>");
    }
}