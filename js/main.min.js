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
        if(w > 992) {
            menu.removeAttr('style');
            pull.removeClass('navigation__toggle-button--active');
        }
    });

    // скрытие меню при клике для md и менее
    $('nav.navigation a').on("click", function(){
    	fnstart();
    });

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if ( $("#navigation-toggle").hasClass("navigation__toggle-button--active")  ) {
   			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();
		}
	};

    /* вызов слайдера owl-carousel*/
    $("#top-slider").owlCarousel({
        singleItem: true,
        navigation: true,
        /*pagination : true,*/
        /*paginationNumbers: false,*/
        theme: "top-slider-theme",
        navigationText : ["",""],
        slideSpeed: 600
    });

   $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector:"nav a"
    });
    
});


