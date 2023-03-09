datalogger.onLogFull(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (logging) {
        logging = false
        basic.showIcon(IconNames.No)
    } else {
        logging = true
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "x",
    "y",
    "z",
    "z",
    "t",
    "l",
    "s"
    )
})
let logging = false
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"x",
"y",
"z",
"z",
"t",
"l",
"s"
)
loops.everyInterval(1000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("x", input.acceleration(Dimension.X)),
        datalogger.createCV("y", input.acceleration(Dimension.Y)),
        datalogger.createCV("z", input.acceleration(Dimension.Z)),
        datalogger.createCV("t", input.temperature()),
        datalogger.createCV("l", input.lightLevel()),
        datalogger.createCV("s", input.soundLevel())
        )
    }
})
