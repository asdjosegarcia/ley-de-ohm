///////////////////////////////////voltage-info
const btnRegenerateVoltage = document.querySelector('#btn-regenerate-voltage')//boton regenerar
const btnRevealVoltage= document.querySelector('#btn-reveal-voltage')//boton mostrar resultado voltaje
const resistanceVoltageChallenge= document.querySelectorAll('.resistance-voltage-challenge')//resitencia en circuito
const streamVoltageChallenge= document.querySelectorAll('.stream-voltage-challenge')// corriente en circuito
const voltageVoltageChallenge= document.querySelectorAll('.voltage-voltage-challenge')// voltaje en circuito


btnRegenerateVoltage.addEventListener('click', ()=>{regenerate('voltage')})
btnRevealVoltage.addEventListener('click', ()=>{alert('andando')})






function regenerate(challengeOperation){
    const resistance=(Math.floor(Math.random() * (200 - 10 + 1)) + 10)*10//numero entero aleatorio entre 2000 que termina en 0
    const voltage=Math.floor(Math.random() * (120 - 1 + 1)) + 1
    const stream=(Math.random()*(10-0)+0).toFixed(2) //numero decimal enetre 1 y 10, ojo toFixed lo vuelve texto
    console.log({resistance,voltage,stream})
    switch (true) {
        case (challengeOperation==='voltage'):
            resistanceVoltageChallenge[0].textContent=resistance + 'Ω'
            resistanceVoltageChallenge[1].textContent=resistance + 'Ω'
            streamVoltageChallenge[0].textContent=stream +' A'
            streamVoltageChallenge[1].textContent=stream +' A'
            resistanceVoltageChallenge[0].textContent=resistance + 'Ω'
            resistanceVoltageChallenge[0].textContent=resistance + 'Ω'
            const voltageReveal=
            console.log('voltage')
            break;
    
        default:
            console.log('default')
            break;
    }



    // voltageVoltageChallenge.textContent=voltage //desactivado por que todavia no lo usamos



}
// console.log('numero entero aleatorio',Math.floor(Math.random() * (20000 - 10 + 1)) + 10)
regenerate('voltage')