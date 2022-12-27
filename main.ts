input.onButtonPressed(Button.A, function () {
    let num = 0
    if (num == 1) {
        pawn += 1
    } else if (num == 2) {
        pawn += 2
    } else if (num == 3) {
        pawn += 3
    } else if (num == 4) {
        pawn += 4
    } else if (num == 5) {
        pawn += 5
    } else if (num == 6) {
        pawn += 6
    }
    if (pawn == led.point(2, 2)) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
let pawn = 0
led.plot(0, 2)
basic.forever(function () {
	
})
