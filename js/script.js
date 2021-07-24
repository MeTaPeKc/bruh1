$( document ).ready(function(){
    $('input').focusin(function(){
        $(this).addClass('focusinput')
    });
    $('input').focusout(function(){
        $(this).removeClass('focusinput')
    });
    $("#select").select2({
        minimumResultsForSearch: -1
    });
    $('select').on('select2:open', function (e) {
        $('.select2-selection__arrow > b').addClass('rotate-arrow')
    });
    $('select').on('select2:close', function (e) {
        $('.select2-selection__arrow > b').removeClass('rotate-arrow')
    });
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top + -100
        }, 1000);
    });
    $('input[type=range]').on('input', function () {
        $('#fill-color').css({'padding-right': 'calc(100% - ' + ($(this).val()/10) + '%)'});
    });
    if (jQuery(window).width() < 768) {
        $('.burger').click(function() {
            $(this).toggleClass('active');
            $('ul.menu li').slideToggle('fast');
        })
        $('ul.menu li').click(function() {
            $('.burger').toggleClass('active');
            $('ul.menu li').slideToggle('fast');
        })
    }

});