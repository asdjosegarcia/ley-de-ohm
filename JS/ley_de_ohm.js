////////////////////////////////////////////////////global variables
let calcVoltMah=false;
let calcResMah=false;
let calcStreamMah=false;
/////////////////////////////////////////////////////voltageCalc
const streamCalcVolt = document.querySelector('#input-stream-calc-voltage')//input corriente
const resitenceCalcVolt = document.querySelector('#input-resistance-calc-voltage')//input resitencia
const btnCalcVolt = document.querySelector('#btn-calc-volt')//boton "calcular"
const resultCalcVoltageSpan = document.querySelector('#calc-voltage-result')//span donde se muestra el resultado
const btnCalcVoltMah = document.querySelector('#btn-calc-volt-mah')//boton "mAh" que alterna entre miliampers y ampers
const matOperationVolt=document.querySelector('#mathematical-operation-voltage') //span que contiene la operacion matematica que se realiza
const ampMahSymbolVoltage = document.querySelector('#Amp-mAh-symbol-voltage')//span que varia entre A y mAh
/////////////////////////////////////////////////////streamCalc
const voltageCalcStream = document.querySelector('#input-voltage-calc-stream')//input voltaje
const resistanceCalcStream = document.querySelector('#input-resistance-calc-stream')//input resistencia
const btnCalcStream = document.querySelector('#btn-calc-stream')//boton calcular corriente
const resultCalcStreamSpan = document.querySelector('#calc-stream-result')//span que nos da el resultado
const btnCalStreamcMah=document.querySelector('#btn-calc-stream-mah')//boton que alterna tente mAh y A
const matOperationStream=document.querySelector('#mathematical-operation-stream') //span que contiene la operacion matematica que se realiza

//////////////////////////////////////////////////////resitenceCalc
const voltageCalcResistance = document.querySelector('#input-voltage-calc-resistance')//input voltaje
const streamCalcResistance = document.querySelector('#input-stream-calc-resistance')//input resitencia
const btnCalcResistance = document.querySelector('#btn-calc-reistance')//boton calcular
const resultCalcResistanceSpan = document.querySelector('#calc-resistance-result')//span resultado
const btnCalcResMah = document.querySelector('#btn-calc-res-mah')//boton "mAh" que alterna entre miliampers y ampers
const matOperationResistance=document.querySelector('#mathematical-operation-resistance') //span que contiene la operacion matematica que se realiza
const ampMahSimbolResistance = document.querySelector('#Amp-mAh-symbol-resistance')//span que varia entre A y mAh




btnCalcVolt.addEventListener('click', calcVoltage)
btnCalcStream.addEventListener('click', calcStream)
btnCalcResistance.addEventListener('click', calcResistance)
btnCalcVoltMah.addEventListener('click',  ()=>{calcVoltMah=!calcVoltMah;calcVoltage()})//cambia el valor a true o false para que se divia entre 1000 los ampers
btnCalcResMah.addEventListener('click',  ()=>{calcResMah=!calcResMah;calcResistance()})//
btnCalStreamcMah.addEventListener('click', ()=>{calcStreamMah=!calcStreamMah;calcStream()})


function calcVoltage() {
    const resistance = resitenceCalcVolt.value
    const stream = streamCalcVolt.value
    voltage = stream * resistance;

    if(calcVoltMah){
        voltage=voltage/1000
        matOperationVolt.textContent='/1000 X '
        ampMahSymbolVoltage.textContent='mAh'
        btnCalcVoltMah.textContent='A'
    }else{
        matOperationVolt.textContent='X'
        ampMahSymbolVoltage.textContent='A'
        btnCalcVoltMah.textContent='mAh'
    }
    resultCalcVoltageSpan.innerText = voltage.toFixed(2) + ' V'
}



function calcStream() {
    const voltage = voltageCalcStream.value
    const resistance = resistanceCalcStream.value
    stream = Number(voltage / resistance);
    if(calcStreamMah){
        stream=stream*1000
        resultCalcStreamSpan.innerText = stream.toFixed(2) + ' mAh'
        // ampMahSymbolStream.textContent='mAh'
        matOperationStream.textContent='X1000 /'
        btnCalStreamcMah.textContent='A'
    }else{
        resultCalcStreamSpan.innerText = stream.toFixed(4) + ' A'   
        matOperationStream.textContent='/'
        btnCalStreamcMah.textContent='mAh'


    }
}

function calcResistance() {
    const voltage = voltageCalcResistance.value
    const stream = streamCalcResistance.value
    resistance = voltage / stream
    if(calcResMah){
        resistance=resistance*1000
        ampMahSimbolResistance.textContent='mAh'
        matOperationResistance.textContent='X1000 /'
        btnCalcResMah.textContent='A'
    }else{
        ampMahSimbolResistance.textContent='A'
        matOperationResistance.textContent='/'
        btnCalcResMah.textContent='mAh'
    }
    resultCalcResistanceSpan.innerText = resistance.toFixed(2)   + ' Ω'
}

