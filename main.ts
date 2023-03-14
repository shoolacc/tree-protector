input.onGesture(Gesture.Shake, function () {
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
