$(document).ready(function() {

	// скрипт: показываем/скрываем выпадающее меню/под смартфоны
	//это переменные под кнопку и меню
    var pull = $('#navigation-toggle');
    var menu = $('.navigation ul');

        //menuheight = menu.height(); 
        
        //говорим, что будет происходить при нажатии кнопки
        $(pull).on("click", function(e){
            // отменяет стандартное поведение ссылки в браузере
            e.preventDefault();
            // открытие/скрытие меню
            menu.slideToggle();

            //добавляем модификатор --active
            $(this).toggleClass('navigation__toggle-button--active');
        });

    // при увеличении размера окна -отображает скрытое меню БОЖЕМОЙ
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 640 && menu.is(':hidden')){
            menu.removeAttr('style');
        }
    });

    /* вызов слайдера owl-carousel*/
    $("#top-slider").owlCarousel({
        singleItem: true,
        navigation: true,
        /*pagination : true,*/
        /*paginationNumbers: false,*/
        theme: "top-slider-theme",
        navigationText : ["",""],
        slideSpeed: 800
        /*paginationSpeed : 300,*/
    });    
});


