////////////////////////////////////////////////////global variables
let calcVoltMah=false;
let calcResMah=false;
let mahIs=false;
/////////////////////////////////////////////////////voltageCalc
const streamCalcVolt = document.querySelector('#input-stream-calc-voltage')//input corriente
const resitenceCalcVolt = document.querySelector('#input-resistence-calc-voltage')//input resitencia
const btnCalcVolt = document.querySelector('#btn-calc-volt')//boton "calcular"
const resultCalcVoltageSpan = document.querySelector('#calc-voltage-result')//span donde se muestra el resultado
const btnCalcVoltMah = document.querySelector('#btn-calc-volt-mah')//boton "mAh" que alterna entre miliampers y ampers
/////////////////////////////////////////////////////streamCalc
const voltageCalcStream = document.querySelector('#input-voltage-calc-stream')//input voltaje
const resistenceCalcStream = document.querySelector('#input-resistence-calc-stream')//input resistencia
const btnCalcStream = document.querySelector('#btn-calc-stream')//boton calcular corriente
const resultCalcStreamSpan = document.querySelector('#calc-stream-result')//span que nos da el resultado
const btnCalcMah=document.querySelector('#btn-calc-mah')//boton que alterna tente mAh y A
//////////////////////////////////////////////////////resitenceCalc
const voltageCalcResistence = document.querySelector('#input-voltage-calc-resistence')//input voltaje
const streamCalcResistence = document.querySelector('#input-stream-calc-resistence')//input resitencia
const btnCalcResistence = document.querySelector('#btn-calc-reistence')//boton calcular
const resultCalcResistenceSpan = document.querySelector('#calc-resistence-result')//span resultado
const btnCalcResMah = document.querySelector('#btn-calc-res-mah')//boton "mAh" que alterna entre miliampers y ampers



btnCalcVolt.addEventListener('click', calcVoltage)
btnCalcStream.addEventListener('click', calcStream)
btnCalcResistence.addEventListener('click', calcResistence)
btnCalcVoltMah.addEventListener('click',  ()=>{calcVoltMah=!calcVoltMah;calcVoltage()})//cambia el valor a true o false para que se divia entre 1000 los ampers
btnCalcResMah.addEventListener('click',  ()=>{calcResMah=!calcResMah;calcResistence()})//cambia el valor a true o false para que se divia entre 1000 los ampers
btnCalcMah.addEventListener('click',mahToggle)


function calcVoltage() {
    const resistence = resitenceCalcVolt.value
    const stream = streamCalcVolt.value
    voltage = stream * resistence;
    if(calcVoltMah){
        voltage=voltage/1000
    }
    resultCalcVoltageSpan.innerText = voltage.toFixed(2) + ' V'
}


function mahToggle(){
    mahIs=!mahIs
    calcStream(mahIs)
}
function calcStream() {
    const voltage = voltageCalcStream.value
    const resistence = resistenceCalcStream.value
    stream = Number(voltage / resistence);
    if(mahIs){
        const  mah=stream*1000;
        resultCalcStreamSpan.innerText = mah.toFixed(2) + ' mAh'
    }else{
        resultCalcStreamSpan.innerText = stream.toFixed(4) + ' A'   
    }
}

function calcResistence() {
    const voltage = voltageCalcResistence.value
    const stream = streamCalcResistence.value
    resistence = voltage / stream
    if(calcResMah){
        resistence=resistence*1000
    }
    resultCalcResistenceSpan.innerText = resistence.toFixed(2)   + ' Ω'
}
