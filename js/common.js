$(function () {
    $(".hi_first_menu>li").hover(
        function () {
            $(this).find(".hi_pull_down").stop().slideDown()
        },
        function () {
            $(this).find(".hi_pull_down").stop().slideUp()
        }
    )
})