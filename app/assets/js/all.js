$(document).ready(function () {
    $(".burger-btn").click(function (e) { 
        e.preventDefault();
        $(".burger-menu").toggleClass("show");
    });
});