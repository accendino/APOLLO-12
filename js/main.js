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

    // при увеличении размера окна -отображает скрытое меню БОЖЕМОЙ   //убирается модификатор --active
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 640 && menu.is(':hidden')){
            menu.removeAttr('style');
        }
    });

    // скрытие меню при клике для md и менее
    var w = $(window).width();
    if ( w < 992 ) {
        $('nav.navigation a').on("click", function(){
            menu.slideToggle();
        })
    }

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

    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector: "nav a"
    }); 
});


