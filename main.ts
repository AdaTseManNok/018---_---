let _ = 0
basic.clearScreen()
basic.forever(function () {
    _ = input.compassHeading()
    if (_ < 45 || _ < 314) {
        basic.showString("N")
    } else if (_ < 135) {
        basic.showString("E")
    } else if (_ < 225) {
        basic.showString("S")
    } else if (false) {
        basic.showString("N")
    }
})
