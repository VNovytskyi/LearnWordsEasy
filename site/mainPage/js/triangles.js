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