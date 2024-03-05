var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${horas}:${minutos}`)
if (horas < 12) {
    console.log('Bom Dia!')
} 
else if (horas < 18) {
    console.log('Boa Tarde!')
}
else {
    console.log('Boa Noite!')
}