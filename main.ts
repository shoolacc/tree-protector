input.onGesture(Gesture.FreeFall, function () {
    while (true) {
        radio.sendString(GPS)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    while (true) {
        radio.sendString(GPS)
    }
})
input.onSound(DetectedSound.Loud, function () {
    while (true) {
        radio.sendString(GPS)
    }
})
input.onGesture(Gesture.Shake, function () {
    while (true) {
        radio.sendString(GPS)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    while (true) {
        radio.sendString(GPS)
    }
})
input.onGesture(Gesture.ThreeG, function () {
    while (true) {
        radio.sendString(GPS)
    }
})
let GPS = ""
radio.setGroup(4)
let Latitude = 52.1818424
let Longitude = 0.1789449
let Tree_fall_message = "Tree has fallen"
GPS = "" + Latitude + Longitude + Tree_fall_message
basic.showString(GPS)
basic.forever(function () {
    if (input.temperature() > 10) {
        radio.sendString(GPS)
    } else if (input.acceleration(Dimension.X) > 5) {
        radio.sendString(GPS)
    }
})
