$(document).ready(function(){
    
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [
            "Software Engineer, AI Products & Platforms @ Cognizant",
            "Generative AI Engineer",
            "AWS Bedrock & Agentic AI Engineer",
            "LLM & RAG Systems Builder",
            "FastAPI & Flask Backend Developer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();

        if (!this.checkValidity()) {
            this.reportValidity();
            return;
        }

        const name = $('#contact-name').val().trim();
        const email = $('#contact-email').val().trim();
        const subject = $('#contact-subject').val().trim();
        const message = $('#contact-message').val().trim();

        const emailBody =
            `${message}\n\n` +
            `Regards,\n` +
            `${name}\n` +
            `${email}`;

        const mailtoLink =
            `mailto:varun.mithyantha@gmail.com?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;
    });
});


