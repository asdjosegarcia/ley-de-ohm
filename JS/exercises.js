///////////////////////////////////voltage-info
const btnRegenerateVoltage = document.querySelector('#btn-regenerate-voltage')//boton regenerar
const btnRevealVoltage= document.querySelector('#btn-reveal-voltage')//boton mostrar resultado voltaje
const voltageVoltageChallenge= document.querySelector('#voltage-voltage-challenge')// voltaje en circuito
const resistanceVoltageChallenge= document.querySelectorAll('.resistance-voltage-challenge')//resitencia en circuito
const streamVoltageChallenge= document.querySelectorAll('.stream-voltage-challenge')// corriente en circuito
//////////////////////////////////stream-info
const btnRegenerateStream = document.querySelector('#btn-regenerate-stream')//boton regenerar
const btnRevealStream= document.querySelector('#btn-reveal-stream')//boton mostrar resultado corriente
const voltageStreamChallenge= document.querySelectorAll('.voltage-stream-challenge')// voltaje en circuito
const resistanceStreamChallenge= document.querySelectorAll('.resistance-stream-challenge')//resitencia en circuito
const streamStreamChallenge= document.querySelectorAll('.stream-stream-challenge')// corriente en circuito




btnRegenerateVoltage.addEventListener('click', ()=>{regenerate('voltage')})
btnRevealVoltage.addEventListener('click', ()=>{voltageReveal()})




let voltageResult='4.95 V';
let resistanceResult='330 Ω';
let streamResult='0.015';

function regenerate(challengeOperation){
    const resistance=(Math.floor(Math.random() * (200 - 10 + 1)) + 10)*10//numero entero aleatorio entre 2000 que termina en 0
    const voltage=Math.floor(Math.random() * (120 - 1 + 1)) + 1
    const stream=(Math.random()*(3-0)+0).toFixed(3) //numero decimal enetre 1 y 10, ojo toFixed lo vuelve texto
    console.log({resistance,voltage,stream})
    switch (true) {
        case (challengeOperation==='voltage'):
            resistanceVoltageChallenge[0].textContent=resistance + 'Ω'
            resistanceVoltageChallenge[1].textContent=resistance + 'Ω'
            streamVoltageChallenge[0].textContent=stream +' A'
            streamVoltageChallenge[1].textContent=stream +' A'
            resistanceVoltageChallenge[0].textContent=resistance + 'Ω'
            resistanceVoltageChallenge[0].textContent=resistance + 'Ω'
            voltageResult=(resistance*stream).toFixed(2) +' V'
            voltageVoltageChallenge.textContent='V ?'

            console.log('voltage')
            break;
    
        default:
            console.log('default')
            break;
    }
}
// console.log('numero entero aleatorio',Math.floor(Math.random() * (20000 - 10 + 1)) + 10)
// regenerate('voltage')
function voltageReveal(){
    voltageVoltageChallenge.textContent=voltageResult //desactivado por que todavia no lo usamos
}