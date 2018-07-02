const nombre = "Giuliano"
const dias = [
"Lunes",
"Martes",
"Miércoes",
"Jueves",
"Sábado",
"Domingo"
]

function correr() {
    // Valor entre 5 y 15
    const min = 5
    const max = 10
    return Math.round(Math.random() * (max - min)) + min
}


let totalKms = 0
const size = dias.length
for (let i = 0; i < size; i++) {
    const kms = correr()
    totalKms += kms
    console.log(`El día ${dias[i]}, ${nombre} corrió ${kms}kms`)
}
const promedioKms = totalKms / dias.length
console.log(`= En promedio, ${nombre} corrió ${promedioKms.toFixed(2)}kms =`)