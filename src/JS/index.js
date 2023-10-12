import '../css/normalize.css';//ELIMINAR ESTO PARA TESTEAR SIN WEBPACK!
import '../css/styles.css';

////////////////////////////////////////////////////navigation
/////////////////////////////////items
const homeInfo=document.querySelector('#home-first-info-page-container');
const homeInfoTwo=document.querySelector('#home-second-info-page-container');
const infoPageVoltage=document.querySelector('#voltage-first-info-page-container');
const infoPageStream=document.querySelector('#stream-first-info-page-container');
const infoPageResistence=document.querySelector('#resitence-first-info-page-container');

/////////////////////////////////btn
const btnInfoHome=document.querySelector('.btn-info-home');
const btnInfoHomeNext=document.querySelector('.btn-next');
const btnInfoVoltage=document.querySelectorAll('.btn-info-voltage');
const btnInfoStream=document.querySelectorAll('.btn-info-stream');
const btnInfoResistence=document.querySelectorAll('.btn-info-resitence');

////////////////////////////////btn functions
btnInfoHome.addEventListener('click',()=> enableDisabble(homeInfo))
btnInfoHomeNext.addEventListener('click',()=>enableDisabble(homeInfoTwo))
btnInfoVoltage[0].addEventListener('click',()=> {enableDisabble(infoPageVoltage)})
btnInfoVoltage[1].addEventListener('click',()=> {enableDisabble(infoPageVoltage)})
btnInfoStream[0].addEventListener('click',()=> enableDisabble(infoPageStream))
btnInfoStream[1].addEventListener('click',()=> enableDisabble(infoPageStream))
btnInfoResistence[0].addEventListener('click',()=> enableDisabble(infoPageResistence))
btnInfoResistence[1].addEventListener('click',()=> enableDisabble(infoPageResistence))


let itemForDissable; //aqui guardamos el item que se 


function enableDisabble(itemForEnable){
    if(itemForDissable==undefined){
        homeInfo.classList.add('dissable')
        itemForEnable.classList.remove('dissable')
        itemForDissable=itemForEnable;
    }else{
        itemForDissable.classList.add('dissable');
        itemForEnable.classList.remove('dissable')
        itemForDissable=itemForEnable;
    }
}
////////////////////////////////////////////////////exercises
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
    const voltage = (Math.random() * (120 - 1 + 1) + 1).toFixed(2) //numero aleatorio entre 120 y 1 con 2 decimales
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
////////////////////////////////////////////////////ley_de_ohm
////////////////////////////////////////////////////global variables
let calcVoltMah = false;
let calcResMah = false;
let calcStreamMah = false;
/////////////////////////////////////////////////////voltageCalc
const streamCalcVolt = document.querySelector('#input-stream-calc-voltage')//input corriente
const resitanceCalcVolt = document.querySelector('#input-resistance-calc-voltage')//input resitencia
// const btnCalcVolt = document.querySelector('#btn-calc-volt')//boton "calcular"
const resultCalcVoltageSpan = document.querySelector('#calc-voltage-result')//span donde se muestra el resultado
const btnCalcVoltMah = document.querySelector('#btn-calc-volt-mah')//boton "mAh" que alterna entre miliampers y ampers
const matOperationVolt = document.querySelector('#mathematical-operation-voltage') //span que contiene la operacion matematica que se realiza
const ampMahSymbolVoltage = document.querySelector('#Amp-mAh-symbol-voltage')//span que varia entre A y mAh
/////////////////////////////////////////////////////streamCalc
const voltageCalcStream = document.querySelector('#input-voltage-calc-stream')//input voltaje
const resistanceCalcStream = document.querySelector('#input-resistance-calc-stream')//input resistencia
// const btnCalcStream = document.querySelector('#btn-calc-stream')//boton calcular corriente
const resultCalcStreamSpan = document.querySelector('#calc-stream-result')//span que nos da el resultado
const btnCalStreamcMah = document.querySelector('#btn-calc-stream-mah')//boton que alterna tente mAh y A
const matOperationStream = document.querySelector('#mathematical-operation-stream') //span que contiene la operacion matematica que se realiza

//////////////////////////////////////////////////////resitenceCalc
const voltageCalcResistance = document.querySelector('#input-voltage-calc-resistance')//input voltaje
const streamCalcResistance = document.querySelector('#input-stream-calc-resistance')//input resitencia
// const btnCalcResistance = document.querySelector('#btn-calc-reistance')//boton calcular
const resultCalcResistanceSpan = document.querySelector('#calc-resistance-result')//span resultado
const btnCalcResMah = document.querySelector('#btn-calc-res-mah')//boton "mAh" que alterna entre miliampers y ampers
const matOperationResistance = document.querySelector('#mathematical-operation-resistance') //span que contiene la operacion matematica que se realiza
const ampMahSimbolResistance = document.querySelector('#Amp-mAh-symbol-resistance')//span que varia entre A y mAh


streamCalcVolt.addEventListener("input",()=>calcVoltage())//añadimos on oninput ya que webpack no toma la funcion si la llamamos desde el html
resitanceCalcVolt.addEventListener("input",()=>calcVoltage())
voltageCalcStream.addEventListener("input",()=>calcStream())
resistanceCalcStream.addEventListener("input",()=>calcStream())
voltageCalcResistance.addEventListener("input",()=>calcResistance())
streamCalcResistance.addEventListener("input",()=>calcResistance())



btnCalcVoltMah.addEventListener('click', () => { calcVoltMah = !calcVoltMah; calcVoltage() })//cambia el valor a true o false para que se divia entre 1000 los ampers
btnCalcResMah.addEventListener('click', () => { calcResMah = !calcResMah; calcResistance() })//
btnCalStreamcMah.addEventListener('click', () => { calcStreamMah = !calcStreamMah; calcStream() })


function calcVoltage() {
    const resistance = resitanceCalcVolt.value
    const stream = streamCalcVolt.value
    if (!stream == "" && !resistance == "") {
        let voltage = stream * resistance;
        if (calcVoltMah) {
            voltage = voltage / 1000
        } 
        resultCalcVoltageSpan.innerText = voltage.toFixed(2) + ' V'
    } else {
        resultCalcVoltageSpan.innerText = '- - - - V'
    }
    btnCalcVoltMah.innerText = (calcVoltMah) ? 'A' : 'mAh'
    ampMahSymbolVoltage.innerText = (calcVoltMah) ? 'mAh':'A'
    matOperationVolt.innerText = (calcVoltMah) ? '/1000 X':'X'
}

function calcStream() {
    const voltage = voltageCalcStream.value
    const resistance = resistanceCalcStream.value
    if (!voltage == "" && !resistance == "") {
        let stream = Number(voltage / resistance);
        if (calcStreamMah) {
            stream = stream * 1000
            resultCalcStreamSpan.innerText = stream.toFixed(2) + ' mAh'
            matOperationStream.textContent = 'X1000 /'
            btnCalStreamcMah.textContent = 'A'
        } else {
            resultCalcStreamSpan.innerText = stream.toFixed(4) + ' A'
            matOperationStream.textContent = '/'
            btnCalStreamcMah.textContent = 'mAh'
        }
    } else {
        resultCalcStreamSpan.innerText = (calcStreamMah) ? '- - - - mAh' : '- - - - A'
        btnCalStreamcMah.innerText = (calcStreamMah) ? 'A' : 'mAh'
    }
}

function calcResistance() {
    const voltage = voltageCalcResistance.value
    const stream = streamCalcResistance.value
    if (!stream == "" && !voltage == "") {
        let resistance = voltage / stream
        if (calcResMah) {
            resistance = resistance * 1000 
        } 
        resultCalcResistanceSpan.innerText = resistance.toFixed(2) + ' Ω'
    } else {
        resultCalcResistanceSpan.innerText = '- - - - Ω'
    }
    btnCalcResMah.innerText = (calcResMah) ? 'A' : 'mAh'
    ampMahSimbolResistance.innerText = (calcResMah) ? 'mAh':'A'
    matOperationResistance.innerText = (calcResMah) ? 'X1000 /':'/'

}

