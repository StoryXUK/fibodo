/*

Template: fibodo
Author: fibodo
Design and Developed by: fibodo.com

NOTE: This file contains all scripts for the actual Template.

*/

/*================================================
[  Table of contents  ]
================================================

:: Preloader
:: Menu
:: Sticky
:: Tooltip
:: Popover
:: Counter
:: Owl carousel
:: Slick slider
:: Countdown
:: Swiper 
:: Swiper Animation
:: Back to top
:: Magnific Popup
:: Search bar
:: Gsap


======================================
[ End table content ]
======================================*/
//POTENZA var

(function ($) {
  "use strict";
  var POTENZA = {};

/*************************
  Predefined Variables
*************************/
  var $window = $(window),
    $document = $(document),
    $body = $('body'),
    $countdownTimer = $('.countdown'),
    $counter = $('.counter'),
    $progressBar = $('.skill-bar');
  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };

/*************************
        Preloader
  *************************/
  POTENZA.preloader = function () {
    $("#load").fadeOut();
    $('#pre-loader').delay(0).fadeOut('slow');
  };


/*************************
      Menu
  *************************/
  POTENZA.dropdownmenu = function () {
    if ($('.navbar').exists()) {
      $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
      });
    }
  };


  POTENZA.menuaddclass = function () {
    $('.top-menu').on('click',function () {
        $('.nav-menu').toggleClass('open-menu');
    });
  };

  POTENZA.menuToggle = function () {
    $('.header-overlay-menu .navbar-nav .nav-link').on('click',function () {
        $(this).next('.dropdown-menu').slideToggle();
    });
  };

/*************************
         Sticky
*************************/

POTENZA.isSticky = function () {
      var $window       = $(window);
      var lastScrollTop = 0;
      var $header       = $('.header');
      var headerHeight  = $header.outerHeight();

      $window.scroll(function() {

          var windowTop  = $window.scrollTop();

          if ( windowTop >= headerHeight ) {
            $header.addClass( 'is-sticky' );
          } else {
            $header.removeClass( 'is-sticky' );
            $header.removeClass( 'sticky-show' );
          }
        
          if ( $header.hasClass( 'is-sticky' ) ) {
            if ( windowTop < lastScrollTop ) {
              $header.addClass( 'sticky-show' );
            } else {
              $header.removeClass( 'sticky-show' );
            }
          }
          $('#lastscrolltop').text('LastscrollTop: ' + lastScrollTop);
        
          lastScrollTop = windowTop;
        
          $('#windowtop').text('scrollTop: ' + windowTop);
      } );
};


  /*************************
       Tooltip
  *************************/
  POTENZA.Tooltip = function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }

  /*************************
        Popover
  *************************/
  POTENZA.Popover = function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
  }

/*************************
       Counter
*************************/
  POTENZA.counters = function () {
    var counter = jQuery(".counter");
    if (counter.length > 0) {
      $counter.each(function () {
        var $elem = $(this);
        $elem.appear(function () {
          $elem.find('.timer').countTo();
        });
      });
    }
  };

  /*************************
       Owl carousel
*************************/
  POTENZA.carousel = function () {
    var owlslider = jQuery("div.owl-carousel");
    if (owlslider.length > 0) {
      owlslider.each(function () {
        var $this = $(this),
          $items = ($this.data('items')) ? $this.data('items') : 1,
          $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
          $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
          $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
          $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
          $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
          $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
          $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
          $space = ($this.attr('data-space')) ? $this.data('space') : 30,
          $animateOut = ($this.attr('data-animateOut')) ? $this.data('animateOut') : false;
        $(this).owlCarousel({
          loop: $loop,
          items: $items,
          responsive: {
            0: {
              items: $this.data('xx-items') ? $this.data('xx-items') : 1
            },
            480: {
              items: $this.data('xs-items') ? $this.data('xs-items') : 1
            },
            768: {
              items: $this.data('sm-items') ? $this.data('sm-items') : 2
            },
            980: {
              items: $this.data('md-items') ? $this.data('md-items') : 3
            },
            1200: {
              items: $items
            }
          },
          dots: $navdots,
          autoplayTimeout: $autospeed,
          smartSpeed: $smartspeed,
          autoHeight: $autohgt,
          margin: $space,
          nav: $navarrow,
          navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
          autoplay: $autoplay,
          autoplayHoverPause: true
        });
      });
    }
  }



  /*************************
           Countdown
  *************************/
  POTENZA.countdownTimer = function () {
    if ($countdownTimer.exists()) {
      $countdownTimer.downCount({
        date: '5/31/2025 12:00:00', // Month/Date/Year HH:MM:SS
        offset: -4
      });
    }
  }


  /*************************
   Swiper Slider
  *************************/
  POTENZA.historySwiperSlider = function() {
    new Swiper('.swiper-container', {
        loop: true,
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
         pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        spaceBetween: 0,
        breakpoints: {
        
            1199: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
}



/*************************
       Progressbar
*************************/
POTENZA.progressBar = function () {
  if ($progressBar.exists()) {
    $progressBar.each(function (i, elem) {
      var $elem = $(this),
        percent = $elem.attr('data-percent') || "100",
        delay = $elem.attr('data-delay') || "100",
        type = $elem.attr('data-type') || "%";

      if (!$elem.hasClass('progress-animated')) {
        $elem.css({
            'width': '0%'
        });
      }
      var progressBarRun = function () {
        $elem.animate({
            'width': percent + '%'
        }, 'easeInOutCirc').addClass('progress-animated');

        $elem.delay(delay).append('<span class="progress-type animated fadeIn">' + type + '</span><span class="progress-number animated fadeIn">' + percent + '</span>');
      };
      $(elem).appear(function () {
        setTimeout(function () {
            progressBarRun();
        }, delay);
      });
    });
  }
};


/*************************
  Back To Top
*************************/
POTENZA.BackToTop = function () {
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';    
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress); 
  var offset = 50;
  var duration = 550;
  jQuery(window).on('scroll', function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });       
  jQuery('.progress-wrap').on('click', function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
};

/*************************
     Search bar
*************************/
POTENZA.searchbar = function () {
  if ($("#search").exists()) {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
   }
}

  /*************************
      Magnific Popup
  *************************/
  POTENZA.mediaPopups = function () {
    if ($(".popup-single").exists() || $(".popup-gallery").exists() || $('.modal-onload').exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
      if ($(".popup-single").exists()) {
        $('.popup-single').magnificPopup({
          type: 'image'
        });
      }
      if ($(".popup-gallery").exists()) {
        $('.popup-gallery').magnificPopup({
          delegate: 'a.portfolio-img',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
        });
      }
      if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      }
      var $modal = $('.modal-onload');
      if ($modal.length > 0) {
        $('.popup-modal').magnificPopup({
          type: 'inline'
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
        var elementTarget = $modal.attr('data-target');
        setTimeout(function () {
          $.magnificPopup.open({
            items: {
              src: elementTarget
            },
            type: "inline",
            mainClass: "mfp-no-margins mfp-fade",
            closeBtnInside: !0,
            fixedContentPos: !0,
            removalDelay: 500
          }, 0)
        }, 1500);
      }
    }
  }


  /*************************
    Gsap
  *************************/
  gsap.set('.service-fancy-item img.service-img', { yPercent: -50, xPercent: -50 });
  let activeImage;
  gsap.utils.toArray(".service-fancy-item").forEach((el) => {
    let image = el.querySelector('img.service-img'),
        setX, setY,
        align = e => {
          setX(e.clientX);
          setY(e.clientY);
        },
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
        fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow});
    
    el.addEventListener('mouseenter', (e) => {
      fade.play();
      startFollow();
      if (activeImage) { // if there's an actively-animating one, we should match its position here
        gsap.set(image, {x: gsap.getProperty(activeImage, "x"), y: gsap.getProperty(activeImage, "y")});
      }
      activeImage = image;
      setX = gsap.quickTo(image, "x", {duration: 0.6, ease: "power3"}),
      setY = gsap.quickTo(image, "y", {duration: 0.6, ease: "power3"})
      align(e);
    });
    
    el.addEventListener('mouseleave', () => fade.reverse());
   
  });

    /*************************
      Cursor
    *************************/
    POTENZA.mouseCursor = function () {const cursor = document.querySelector('#cursor');
      const cursorCircle = cursor.querySelector('.cursor__circle');

      const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
      const pos = { x: 0, y: 0 }; // cursor's coordinates
      const speed = 0.1; // between 0 and 1

      const updateCoordinates = e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }

      window.addEventListener('mousemove', updateCoordinates);

      function getAngle(diffX, diffY) {
        return Math.atan2(diffY, diffX) * 180 / Math.PI;
      }

      function getSqueeze(diffX, diffY) {
        const distance = Math.sqrt(
          Math.pow(diffX, 2) + Math.pow(diffY, 2)
        );
        const maxSqueeze = 0.15;
        const accelerator = 1500;
        return Math.min(distance / accelerator, maxSqueeze);
      }


      const updateCursor = () => {
        const diffX = Math.round(mouse.x - pos.x);
        const diffY = Math.round(mouse.y - pos.y);
        
        pos.x += diffX * speed;
        pos.y += diffY * speed;
        
        const angle = getAngle(diffX, diffY);
        const squeeze = getSqueeze(diffX, diffY);
        
        const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
        const rotate = 'rotate(' + angle +'deg)';
        const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

        cursor.style.transform = translate;
        cursorCircle.style.transform = rotate + scale;
      };

      function loop() {
        updateCursor();
        requestAnimationFrame(loop);
      }

      requestAnimationFrame(loop);

      const cursorModifiers = document.querySelectorAll('[data-cursor-type]');
      const cursorLinks = document.querySelectorAll('a:not(.cursor-style)');

      cursorModifiers.forEach(curosrModifier => {
        curosrModifier.addEventListener('mouseenter', function() {
          const className = this.getAttribute('data-cursor-type');
          cursor.classList.add(className);
          const cursorText = this.getAttribute('data-custom-text');
          if (cursorText !== null) {
              cursor.setAttribute('data-cursor-text', cursorText);
          }
          else {
            cursor.setAttribute('data-cursor-text', 'Drag');
        }
      });

      curosrModifier.addEventListener('mouseleave', function() {
          const className = this.getAttribute('data-cursor-type');
          cursor.classList.remove(className);
          cursor.removeAttribute('data-cursor-text');
        });
      });

      cursorLinks.forEach(cursorLink => {
        cursorLink.addEventListener('mouseenter', function() {
          //const className = this.getAttribute('a');
          cursor.classList.add('cursor-link');
      });
      cursorLink.addEventListener('mouseleave', function() {
          //const className = this.getAttribute('a');
          cursor.classList.remove('cursor-link');
        });
      });
    }

    
  /*************************
      Shuffle
  *************************/
  POTENZA.shuffle = function () {
    if ($('.my-shuffle-container').exists()) {
      var Shuffle = window.Shuffle;
      var element = document.querySelector('.my-shuffle-container');
      var sizer = element.querySelector('.my-sizer-element');
      var shuffleInstance = new Shuffle(element, {
        itemSelector: '.grid-item',
        sizer: sizer, // could also be a selector: '.my-sizer-element'
        speed: 700,
        columnThreshold: 0
      });
      jQuery(document).ready(function(){
        jQuery(".btn-filter").on( 'click', function(){
          var data_group = jQuery(this).attr('data-group');
          if( data_group != 'all' ){
            shuffleInstance.filter([data_group]);
          } else {
            shuffleInstance.filter();
          }
        });
        $(".filters-group .btn-filter").on( 'click', function(){
            $(".filters-group .btn-filter").removeClass("active");
            $(this).addClass("active");
        });
      });
    }
  }



  /*************************
   Portfolio Fancy
  *************************/
  POTENZA.portfolioFancy = function () {
    var portfolioItem = $('.portfolio-fancy-wrapper .portfolio-item');
    $(portfolioItem).hover(function(){
      $(portfolioItem).removeClass("active");
      $(this).addClass("active");
    });
  };

  /*************************
      Button Effect
  *************************/
    POTENZA.buttonEffect = function () {
      $.attractHover('.btn-effect',{
          proximity: 20,
          magnetism: 3
        }
      );
    };


  /****************************************************
       POTENZA Window load and functions
  ****************************************************/
  //Window load functions
  $window.on("load", function () {
    POTENZA.preloader(),
    POTENZA.shuffle(),
    POTENZA.progressBar();
  });
  //Document ready functions
  $document.ready(function () {
    POTENZA.counters(),
    POTENZA.dropdownmenu(),
    POTENZA.menuaddclass(),
    POTENZA.menuToggle(),
    POTENZA.isSticky(),
    POTENZA.countdownTimer(),
    POTENZA.Tooltip(),
    POTENZA.Popover(),
    POTENZA.historySwiperSlider(),
    POTENZA.searchbar(),
    POTENZA.mediaPopups(),
    POTENZA.buttonEffect(),
    POTENZA.carousel(),
    POTENZA.portfolioFancy(),
    POTENZA.BackToTop(),
    POTENZA.mouseCursor();
  });
})(jQuery);




// features



document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-widget-items a");
  const sections = document.querySelectorAll(".service-single");

  // Hide all sections except the first one
  sections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = "none";
    }
  });

  menuItems.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target section ID
      let targetId = this.getAttribute("href").substring(1);
      let targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Hide all sections
        sections.forEach(section => {
          section.style.display = "none";
        });

        // Show the target section
        targetSection.style.display = "block";

        // Update active class
        document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("is-active"));
        this.parentElement.classList.add("is-active");

        // Smooth scroll to the top of the section
        window.scrollTo({
          top: targetSection.offsetTop - 100, // Adjust for header height
          behavior: "smooth"
        });
      }
    });
  });
});



 document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.radio-switch .nav-link');
  if (!tabs.length) return;

  let currentIndex = 0;
  let rotationId = null;

  activateTab(currentIndex);
  startRotation();

  // parent section wrapper
  const section = document.querySelector('.switch-content-tabs');
  if (section) {
    section.addEventListener('mouseenter', stopRotation);
    section.addEventListener('mouseleave', startRotation);
  }

  // if a user clicks a tab, jump to it immediately
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      currentIndex = i;
      activateTab(currentIndex);
    });
  });

  function startRotation() {
    stopRotation(); // clear any existing interval
    rotationId = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length;
      activateTab(currentIndex);
    }, 3000); // 3 seconds
  }

  function stopRotation() {
    if (rotationId) {
      clearInterval(rotationId);
      rotationId = null;
    }
  }

  function activateTab(index) {
    tabs.forEach((tab, i) => {
      const isActive = i === index;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive);
      tab.classList.toggle('show', isActive);

      const targetId = tab.getAttribute('data-bs-target');
      const pane = document.querySelector(targetId);
      if (pane) {
        pane.classList.toggle('active', isActive);
        pane.classList.toggle('show', isActive);
      }
    });
  }
});


(function () {
    const overlay = document.getElementById('contactModalOverlay');
    const modal = document.getElementById('contactModal');
    const closeBtn = document.getElementById('contactModalClose');
    let lastFocused;

    function openModal() {
      lastFocused = document.activeElement;
      overlay.classList.add('is-open');
      document.body.classList.add('modal-open');
      overlay.setAttribute('aria-hidden', 'false');
      // move focus into the modal for accessibility
      closeBtn.focus();
    }

    function closeModal() {
      overlay.classList.remove('is-open');
      document.body.classList.remove('modal-open');
      overlay.setAttribute('aria-hidden', 'true');
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
      }
    }

    // Close handlers
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      // close if they click the dark backdrop, not inside the dialog
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeModal();
      }
    });

    // Open on page load
    window.addEventListener('load', openModal);
  })();