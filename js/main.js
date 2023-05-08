// import emailjs from "@emailjs/browser";
let form;
let nameInput;
let emailInput;
let messageInput;
let subjectInput;
let peopleInput;
let datetimeInput;

// function sendEmail() {
//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();
//   const subject = subjectInput.value.trim();
//   const message = messageInput.value.trim();

//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "zakriyarashid",
//     Password: "etrshtdcafhuynsh",
//     To: "zakriyatestemail@gmail.com",
//     From: email,
//     Subject: `${subject}`,
//     Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
//   }).then(function(message) {
//     alert("Your message has been sent. Thank you!");
//     form.reset();
//   });
// }
// function sendEmail(e) {
    
//     emailjs.sendForm('service_xbz5pxc', 'service_xbz5pxc', 'contact-form', 'vzSBfd9x1zddaYDi3')
//       .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//         alert("Your message has been sent!");
//       }, function(error) {
//         console.log('FAILED...', error);
//         alert("Your message failed to send. Please try again later.");
//       });
//   }
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        // console.log(window.location.href.indexOf("contact.html"));
        if(window.location.href.indexOf("contact") > -1){
            form = document.getElementById("contact-form");
        }
        if(window.location.href.indexOf("index") > -1){
            form = document.getElementById("booking-form");
        }
        nameInput = document.getElementById("name");
        emailInput = document.getElementById("email");
        messageInput = document.getElementById("message");
        subjectInput = document.getElementById("subject");
        peopleInput = document.getElementById("people");
        datetimeInput = document.getElementById("datetime");
        switch (form.id) {
            case "contact-form":
                {
                    form.addEventListener("submit", function(event) {
                        event.preventDefault();
                        // sendEmail();
                        
                        const templateParams = {
                            from_name: nameInput,
                            to_name: "Zakriyaa",
                            subject: subjectInput,
                            message: messageInput
                        };
                        
                        emailjs.sendForm('service_xbz5pxc', 'template_zbojc6p', event.target, 'vzSBfd9x1zddaYDi3')
                        .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        alert("Your message has been sent!");
                        }, function(error) {
                        console.log('FAILED...', error);
                        alert("Your message failed to send. Please try again later.");
                        });
                    });
                }
              break;
            case "booking-form":
                {
                    form.addEventListener("submit", function(event) {
                        event.preventDefault();
                        // sendEmail();
                        
                        const templateParams = {
                            name: nameInput,
                            to_name: "Zakriyaa",
                            datetime: datetimeInput,
                            people: peopleInput,
                            message: messageInput,
            
                        };
                        
                        emailjs.sendForm('service_xbz5pxc', 'template_8bym5fs', event.target, 'vzSBfd9x1zddaYDi3')
                        .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        alert("Your message has been sent!");
                        }, function(error) {
                        console.log('FAILED...', error);
                        alert("Your message failed to send. Please try again later.");
                        });
                    });
                }
              break;
            
        }
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

