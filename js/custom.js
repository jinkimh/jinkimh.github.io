// Custom Script
// Developed by: Samson.Onna
var customScripts = {
    navigation: function () {
        // 햄버거 버튼 ARIA 상태 업데이트
        $('#nav-toggle').on('click', function() {
            var isExpanded = $(this).attr('aria-expanded') === 'true';
            $(this).attr('aria-expanded', !isExpanded);
        });
        
        // Bootstrap collapse 이벤트와 동기화
        $('#main-nav').on('show.bs.collapse', function() {
            $('#nav-toggle').attr('aria-expanded', 'true');
        }).on('hide.bs.collapse', function() {
            $('#nav-toggle').attr('aria-expanded', 'false');
            // 메뉴가 닫힐 때 모든 드롭다운도 닫기
            $('.has-dropdown').removeClass('open').attr('aria-expanded', 'false');
        });
        
        // 데스크톱: 드롭다운 클릭 지원
        var isMobile = $(window).width() <= 767;
        
        function handleDropdown() {
            isMobile = $(window).width() <= 767;
            
            // 기존 이벤트 리스너 제거
            $('.has-dropdown > a.dropdown-toggle').off('click.dropdown keydown.dropdown');
            
            if (isMobile) {
                // 모바일: 클릭으로 토글
                $('.has-dropdown > a.dropdown-toggle').on('click.dropdown', function(e) {
                    e.preventDefault();
                    var $parent = $(this).parent('.has-dropdown');
                    var $dropdown = $parent.find('.dropdown');
                    var isOpen = $parent.hasClass('open');
                    
                    // 다른 드롭다운 닫기
                    $('.has-dropdown').not($parent).removeClass('open').attr('aria-expanded', 'false')
                        .find('.dropdown').css('max-height', '0');
                    
                    // 현재 드롭다운 토글
                    if (isOpen) {
                        $parent.removeClass('open').attr('aria-expanded', 'false');
                        $dropdown.css('max-height', '0');
                    } else {
                        $parent.addClass('open').attr('aria-expanded', 'true');
                        $dropdown.css('max-height', '500px');
                    }
                });
            } else {
                // 데스크톱: 클릭으로도 토글 가능 (hover는 CSS로 처리)
                $('.has-dropdown > a.dropdown-toggle').on('click.dropdown', function(e) {
                    e.preventDefault();
                    var $parent = $(this).parent('.has-dropdown');
                    var isOpen = $parent.hasClass('open');
                    
                    // 다른 드롭다운 닫기
                    $('.has-dropdown').not($parent).removeClass('open').attr('aria-expanded', 'false');
                    
                    // 현재 드롭다운 토글
                    if (isOpen) {
                        $parent.removeClass('open').attr('aria-expanded', 'false');
                    } else {
                        $parent.addClass('open').attr('aria-expanded', 'true');
                    }
                });
            }
            
            // 키보드 네비게이션 (모바일/데스크톱 공통)
            $('.has-dropdown > a.dropdown-toggle').on('keydown.dropdown', function(e) {
                var $parent = $(this).parent('.has-dropdown');
                var $dropdown = $parent.find('.dropdown');
                
                // Enter 또는 Space로 토글
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    var isOpen = $parent.hasClass('open');
                    
                    // 다른 드롭다운 닫기
                    $('.has-dropdown').not($parent).removeClass('open').attr('aria-expanded', 'false');
                    if (isMobile) {
                        $('.has-dropdown').not($parent).find('.dropdown').css('max-height', '0');
                    }
                    
                    // 현재 드롭다운 토글
                    if (isOpen) {
                        $parent.removeClass('open').attr('aria-expanded', 'false');
                        if (isMobile) {
                            $dropdown.css('max-height', '0');
                        }
                    } else {
                        $parent.addClass('open').attr('aria-expanded', 'true');
                        if (isMobile) {
                            $dropdown.css('max-height', '500px');
                        }
                    }
                }
                // Escape로 드롭다운 닫기
                else if (e.key === 'Escape') {
                    $parent.removeClass('open').attr('aria-expanded', 'false');
                    if (isMobile) {
                        $dropdown.css('max-height', '0');
                    }
                }
            });
            
            // 드롭다운 외부 클릭 시 닫기 (데스크톱만)
            if (!isMobile) {
                $(document).on('click.dropdown', function(e) {
                    if (!$(e.target).closest('.has-dropdown').length) {
                        $('.has-dropdown').removeClass('open').attr('aria-expanded', 'false');
                    }
                });
            }
        }
        
        // 초기화
        handleDropdown();
        
        // 리사이즈 시 재초기화
        $(window).on('resize', function() {
            handleDropdown();
        });
        
        // 메뉴 항목 클릭 시 모바일에서 메뉴 닫기
        $('.navbar-inverse').on('click', 'li:not(.has-dropdown) > a', function () {                
            if ($(window).width() <= 767) {
                $('#main-nav').collapse('hide');
            }
        });
        
        // 드롭다운 항목 클릭 시 모바일에서 메뉴 닫기
        $('.dropdown a').on('click', function() {
            if ($(window).width() <= 767) {
                $('#main-nav').collapse('hide');
                $('.has-dropdown').removeClass('open').attr('aria-expanded', 'false')
                    .find('.dropdown').css('max-height', '0');
            }
        });
    },
    profile: function () {
        // portfolio
        if ($('.isotopeWrapper').length) {
            var $container = $('.isotopeWrapper');
            var $resize = $('.isotopeWrapper').attr('id');
            // initialize isotope
            $container.isotope({
                itemSelector: '.isotopeItem',
                resizable: false, // disable normal resizing
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
			
            $("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");               
                return false;
            });
            $('.navbar-inverse').on('click', 'li a', function () {                
                $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
            });
            $('#filter a').click(function () {
                $('#filter a').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'easeOutQuart',
                        queue: false
                    }
                });
                return false;
            });
            $(window).smartresize(function () {
                $container.isotope({
                    // update columnWidth to a percentage of container width
                    masonry: {
                        columnWidth: $container.width() / $resize
                    }
                });
            });
        }
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {
		if($('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').css('background','none');
		}
        $('#mainNav').onePageNav({        
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
				
            },
            end: function () {
                //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').addClass('addBg');
				}else{
						$('#main-nav').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').addClass('addBg');
				}else{
						$('#main-nav').removeClass('addBg');
				}
            }
        });
    },
    slider: function () {
        $('#da-slider').cslider({
            autoplay: true,
            bgincrement: 0
        });
    },
    init: function () {
        customScripts.navigation();
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox();
        customScripts.slider();
    }
}
$('document').ready(function () {
    customScripts.init();
});