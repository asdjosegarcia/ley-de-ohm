//////////////////////////////////general-variables
const resistanceVariableChallenge = document.querySelectorAll('.resistance-variable-challenge')//resitencia en circuito
const voltageVariableChallenge = document.querySelectorAll('.voltage-variable-challenge')// voltaje en circuito
const streamVariableChallenge = document.querySelectorAll('.stream-variable-challenge')// corriente en circuito
///////////////////////////////////voltage-info
const btnRegenerateVoltage = document.querySelector('#btn-regenerate-voltage')//boton regenerar
const btnRevealVoltage = document.querySelector('#btn-reveal-voltage')//boton mostrar resultado voltaje
const voltageVoltageChallenge = document.querySelector('#voltage-voltage-challenge')// voltaje en circuito
//////////////////////////////////stream-info
const btnRegenerateStream = document.querySelector('#btn-regenerate-stream')//boton regenerar
const btnRevealStream = document.querySelector('#btn-reveal-stream')//boton mostrar resultado corriente
const streamStreamChallenge = document.querySelector('#stream-stream-challenge')// corriente en circuito
//////////////////////////////////resistance-info
const btnRegenerateResistance = document.querySelector('#btn-regenerate-resistance')//boton regenerar
const btnRevealResistance = document.querySelector('#btn-reveal-resistance')//boton mostrar resultado Resistencia
const resistanceResistanceChellenge = document.querySelector('#resistance-resitance-challenge')//resistencia en resitence-info


/////////////////eventos Voltaje
btnRegenerateVoltage.addEventListener('click', () => { regenerate('voltage') })
btnRevealVoltage.addEventListener('click', () => { voltageReveal() })
/////////////////eventos corriente
btnRegenerateStream.addEventListener('click', () => { regenerate('stream') })
btnRevealStream.addEventListener('click', () => { streamReveal() })
/////////////////eventos resitencia
btnRegenerateResistance.addEventListener('click', () => { regenerate('resistance') })
btnRevealResistance.addEventListener('click', () => { resitanceReveal() })


let voltageResult = '4.95 V';
let resistanceResult = '330 Ω';
let streamResult = '0.015 A';

function regenerate(challengeOperation) {
    const resistance = (Math.floor(Math.random() * (200 - 10 + 1)) + 10) * 10//numero entero aleatorio entre 2000 que termina en 0
    const voltage = Math.floor(Math.random() * (120 - 1 + 1)) + 1
    const stream = (Math.random() * (3 - 0) + 0).toFixed(3) //numero decimal enetre 1 y 10, ojo toFixed lo vuelve texto
    switch (true) {
        case (challengeOperation === 'voltage'):
            resistanceVariableChallenge[0].textContent = resistance + 'Ω'
            resistanceVariableChallenge[1].textContent = resistance + 'Ω'
            streamVariableChallenge[0].textContent = stream + ' A'
            streamVariableChallenge[1].textContent = stream + ' A'
            voltageResult = (resistance * stream).toFixed(2) + ' V'
            voltageVoltageChallenge.textContent = 'V ?'
            break;
        case (challengeOperation === 'stream'):
            voltageVariableChallenge[0].textContent = voltage + 'V'
            voltageVariableChallenge[1].textContent = voltage + 'V'
            resistanceVariableChallenge[2].textContent = resistance + 'Ω'
            resistanceVariableChallenge[3].textContent = resistance + 'Ω'
            streamResult = (voltage / resistance).toFixed(3) + ' A'
            streamStreamChallenge.textContent = 'A ?'
            break;
        case (challengeOperation === 'resistance'):
            voltageVariableChallenge[2].textContent = voltage + 'V'
            voltageVariableChallenge[3].textContent = voltage + 'V'
            streamVariableChallenge[2].textContent = stream + ' A'
            streamVariableChallenge[3].textContent = stream + ' A'
            resistanceResult = (voltage / stream).toFixed(0) + ' Ω'
            resistanceResistanceChellenge.textContent = 'Ω ?'
            break;
        default:
            break;
    }
}
function voltageReveal() {
    voltageVoltageChallenge.textContent = voltageResult 
}
function streamReveal() {
    streamStreamChallenge.textContent = streamResult
}
function resitanceReveal() {
    resistanceResistanceChellenge.textContent = resistanceResult
}