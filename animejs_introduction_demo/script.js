anime({
    targets: '.square',
    keyframes: [
        {translateX: 250, scale: 2},
        {translateY: 50},
        {translateX: -250, scale: 1},
        {translateY: -50},
    ],
    duration: 5000,
    loop: true
})

anime({
    targets: '#input',
    value: [0,100],
    duration: 2000,
    round: 1,
    easing: 'linear',
    direction: 'alternate',
    loop: true
})