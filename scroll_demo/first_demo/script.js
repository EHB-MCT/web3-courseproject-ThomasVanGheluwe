let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    triggerElement: '.box'
})
.setClassToggle('.box', 'show')
.addTo(controller)



