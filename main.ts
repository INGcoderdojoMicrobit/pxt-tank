radio.onReceivedString(function (receivedString) {
    lpredkosc = parseInt(receivedString.substr(2, 3))
    lk = parseInt(receivedString.charAt(0))
    if (lk == 0) { lk = -1 }
    //
    ppredkosc = parseInt(receivedString.substr(5, 3))
    pk = parseInt(receivedString.charAt(1))
    if (pk == 0) { pk = -1 }


    //serial.writeLine("l=" + lpredkosc + " w=" + lk + " p=" + ppredkosc + " w=" + pk)


    motor.MotorRun(motor.Motors.M1, lk, lpredkosc)
    motor.MotorRun(motor.Motors.M3, -lk, lpredkosc)
    motor.MotorRun(motor.Motors.M2, -pk, ppredkosc)
    motor.MotorRun(motor.Motors.M4, -pk, ppredkosc)

    doMalujBiegi(0, Math.floor(Math.map(lpredkosc, 0, 240, 0, 5)))
    doMalujBiegi(4, Math.floor(Math.map(ppredkosc, 0, 240, 0, 5)))
    //serial.writeLine("l=" + Math.map(ppredkosc, 0, 240, 0, 5))
    if (lk == -1) {
        led.plot(1, 0)
        led.unplot(1, 4)
    } else {
        led.plot(1, 4)
        led.unplot(1, 0)
    }
    if (pk == -1) {
        led.plot(3, 0)
        led.unplot(3, 4)
    } else {
        led.plot(3, 4)
        led.unplot(3, 0)
    }
})

let lpredkosc = 0
let ppredkosc = 0
let lk = 0
let pk = 0
radio.setGroup(1)

//basic.showIcon(IconNames.Heart)

function doMalujBiegi(kol: number, ile: number) {
    for (let i = 0; i <= ile; i++) {
        led.plot(kol, 4 - i)
    }
    for (let i = ile; i <= 5; i++) {
        led.unplot(kol, 4 - i)
    }
}