$("#burger_btn").on('click', function () {

    $(".hide_menu").addClass("hide_menu--active")


});


$("#close_btn, #home_pages, #blog").on('click', function () {

   setTimeout(function(){
        $(".hide_menu").removeClass("hide_menu--active");
    }, 500);
     $(".close_btn").addClass("close_btn--after");

});


$("#close_btn").on('mouseenter', function () {


});

$("#close_btn").on('mouseleave', function () {

    $(".close_btn").removeClass("close_btn--after");

});








$("#cabinets").on('click', function () {
    $(".block_cabinets").toggleClass("block_cabinets--active")

    $("#cabinets .icon_left").toggleClass("icon_left--active")


});

$("#inspirations").on('click', function () {
    $(".block_inspirations").toggleClass("block_inspirations--active")

    $("#inspirations .icon_left").toggleClass("icon_left--active")


});

$("#dealers").on('click', function () {
    $(".block_dealers").toggleClass("block_dealers--active")

    $("#dealers .icon_left").toggleClass("icon_left--active")


});


$("#about").on('click', function () {
    $(".block_about").toggleClass("block_about--active")

    $("#about .icon_left").toggleClass("icon_left--active")


});
