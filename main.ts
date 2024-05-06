input.onButtonPressed(Button.A, function () {
	
})
let dood = 0
let knuffel = 20
let voeding = 20
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        voeding += 10
    }
    if (input.buttonIsPressed(Button.B)) {
        knuffel += 10
    }
})
basic.forever(function () {
    if ((knuffel && voeding) > 15) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (knuffel < 10) {
        dood = 1
    }
    if (voeding < 10) {
        dood = 1
    }
})
basic.forever(function () {
    voeding += -1
    knuffel += -1
    basic.pause(1000)
})
basic.forever(function () {
    if ((knuffel && voeding) < 10) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
        dood += 1
    }
    if ((voeding && knuffel) > 10 && (voeding && knuffel) < 15) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
