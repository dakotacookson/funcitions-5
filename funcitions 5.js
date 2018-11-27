var bandNumber = 0

const takeNumber = function (Band) {
    bandNumber++
    console.log(bandNumber , Band)
}

const scum = takeNumber("Galactic Scum")

const under = takeNumber("Underdogs")
