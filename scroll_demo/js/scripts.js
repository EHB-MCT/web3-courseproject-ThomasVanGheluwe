/*!
* Start Bootstrap - Landing Page v6.0.4 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    triggerElement: '.showcase1',
})
.setClassToggle('.showcase1', 'showShowcase')
.addTo(controller);

let scene2 = new ScrollMagic.Scene({
    triggerElement: '.showcase2',
})
.setClassToggle('.showcase2', 'showShowcase')
.addTo(controller);

let scene3 = new ScrollMagic.Scene({
    triggerElement: '.showcase3',
})
.setClassToggle('.showcase3', 'showShowcase')
.addTo(controller);



let scene4 = new ScrollMagic.Scene({
    triggerElement: '.testimonials'
})
.setClassToggle('.testimonials', 'showTestimonials')
.addTo(controller)



