$(document).ready(function () {

    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    $(".question").hover(
        function () { $(this).css("color", "blue"); },
        function () { $(this).css("color", "black"); }
    );

    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    $("input").focus(function () {
        $(this).closest(".faq").find(".question").addClass("highlight");
    });

    $("input").blur(function () {
        $(this).closest(".faq").find(".question").removeClass("highlight");
    });

});
