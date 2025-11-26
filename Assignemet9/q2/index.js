$(document).ready(function () {

    // 1. Click product -> highlight background
    $(".product").click(function () {
        $(this).toggleClass("highlight");

        // 5. Alert if out of stock
        if ($(this).data("stock") === "no") {
            alert("This product is out of stock!");
        }
    });

    // 2. Hover -> show/hide additional details
    $(".product").hover(
        function () { $(this).find(".extra-details").slideDown(); },
        function () { $(this).find(".extra-details").slideUp(); }
    );

    // 3. Favorite icon toggles 'selected' class
    $(".fav").click(function (event) {
        event.stopPropagation(); // prevent triggering product click
        $(this).toggleClass("selected");
    });

    // 4. Attribute selector already applied in CSS
});
