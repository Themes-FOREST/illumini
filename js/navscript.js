/* custom javascript here */


// Function here 



// (function() {

//     var Navwork = {

//         initialized: false,

//         initialize: function() {
//             if (this.initialized) return;
//             this.initialized = true;
//             this.create();

//         },

//         create: function() {

//             // page scroll top
//             this.Navset();


//         },

//         Navset: function() {



//             $(document).ready(function() {
//                 $(document).on("scroll", onScroll);

//                 //smoothscroll
//                 $('ul#menu li a[href^="#"]').on('click', function(e) {
//                     e.preventDefault();
//                     $(document).off("scroll");

//                     $('a').each(function() {
//                         $(this).removeClass('active');
//                     })
//                     $(this).addClass('active');

//                     var target = this.hash,
//                         menu = target;
//                     $target = $(target);
//                     $('html, body').stop().animate({
//                         'scrollTop': $target.offset().top + 2
//                     }, 500, 'swing', function() {
//                         window.location.hash = target;
//                         $(document).on("scroll", onScroll);
//                     });
//                 });
//             });

//             // $(document).on("scroll", onScroll);
//             // $('ul#menu li a[href^="#"]').on('click', function(e) {
//             //     e.preventDefault();
//             //     $(document).off("scroll");

//             //     $('a').each(function() {
//             //         $(this).removeClass('active');
//             //     })
//             //     $(this).addClass('active');

//             //     var target = this.hash,
//             //         menu = target;
//             //     $target = $(target);
//             //     $('html, body').stop().animate({
//             //         'scrollTop': $target.offset().top + 2
//             //     }, 1000, 'swing', function() {
//             //         window.location.hash = target;
//             //         $(document).on("scroll", onScroll);
//             //     });
//             // });

//             /* ///////////////scroll with link/////////// */

//             function onScroll(event) {

//                 var scrollPos = $(document).scrollTop();
//                 $('#menu a').each(function() {
//                     var currLink = $(this);
//                     var refElement = $(currLink.attr("href"));
//                     if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//                         $('ul#menu li a').removeClass("active"); //added to remove active class from all a elements
//                         currLink.addClass("active");
//                     } else {
//                         currLink.removeClass("active");
//                     }
//                 });
//             };

//         }



//     }

//     Navwork.initialize();

// })();

// // hover function
