let homeCount = document.getElementById("counter1")

let guestCount = document.getElementById("counter2")

let homCount = 0
let gusCount = 0

function plus1() {
    homCount += 1
    homeCount.textContent = homCount
}

function plus2() {
    homCount += 2
    homeCount.textContent = homCount
}

function plus3() {
    homCount += 3
    homeCount.textContent = homCount
}

function plus1g() {
    gusCount += 1
    guestCount.textContent = gusCount
}

function plus2g() {
    gusCount += 2
    guestCount.textContent = gusCount
}

function plus3g() {
    gusCount += 3
    guestCount.textContent = gusCount
}

function zero() {
    gusCount = 0
    homCount = 0
    homeCount.textContent = 0
    guestCount.textContent = 0
}