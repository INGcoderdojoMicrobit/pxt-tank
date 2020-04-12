radio.onReceivedString(function (receivedString) {
    lpredkosc = parseInt(receivedString.substr(2, 3))
    lk = parseInt(receivedString.charAt(0))
    if (lk == 0) { lk = -1 }
    //
    ppredkosc = parseInt(receivedString.substr(5, 3))
    pk = parseInt(receivedString.charAt(1))
    if (pk == 0) { pk = -1 }


    serial.writeLine("l=" + lpredkosc + " w=" + lk + " p=" + ppredkosc + " w=" + pk)


    motor.MotorRun(motor.Motors.M1, lk, lpredkosc)
    motor.MotorRun(motor.Motors.M3, -lk, lpredkosc)
    motor.MotorRun(motor.Motors.M2, -pk, ppredkosc)
    motor.MotorRun(motor.Motors.M4, -pk, ppredkosc)

})

let lpredkosc = 0
let ppredkosc = 0
let lk = 0
let pk = 0
radio.setGroup(1)

