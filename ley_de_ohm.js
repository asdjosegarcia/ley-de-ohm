/////////////////////////////////////////////////////voltageCalc
const streamCalcVolt = document.querySelector('#input-stream-calc-voltage')
const resitenceCalcVolt = document.querySelector('#input-resistence-calc-voltage')
const btnCalcVolt = document.querySelector('#btn-calc-volt')
const resultCalcVoltageSpan = document.querySelector('#calc-voltage-result')
/////////////////////////////////////////////////////streamCalc
const voltageCalcStream = document.querySelector('#input-voltage-calc-stream')
const resistenceCalcStream = document.querySelector('#input-resistence-calc-stream')
const btnCalcStream = document.querySelector('#btn-calc-stream')
const resultCalcStreamSpan = document.querySelector('#calc-stream-result')
//////////////////////////////////////////////////////resitenceCalc
const voltageCalcResistence = document.querySelector('#input-voltage-calc-resistence')
const streamCalcResistence = document.querySelector('#input-stream-calc-resistence')
const btnCalcResistence = document.querySelector('#btn-calc-reistence')
const resultCalcResistenceSpan = document.querySelector('#calc-resistence-result')

btnCalcVolt.addEventListener('click', calcVoltage)
btnCalcStream.addEventListener('click', calcStream)
btnCalcResistence.addEventListener('click', calcResistence)


function calcVoltage() {
    const resistence = resitenceCalcVolt.value
    const stream = streamCalcVolt.value
    console.log('resitencia', resistence, 'corriente', stream);
    voltage = stream * resistence;
    console.log(voltage);
    resultCalcVoltageSpan.innerText = voltage + ' V'
    return voltage
}

function calcStream() {
    const voltage = voltageCalcStream.value
    const resistence = resistenceCalcStream.value
    stream = voltage / resistence;
    resultCalcStreamSpan.innerText = stream + ' A'
}

function calcResistence() {
    const voltage = voltageCalcResistence.value
    const stream = streamCalcResistence.value
    resistence = voltage / stream
    resultCalcResistenceSpan.innerText = resistence + ' Ω'
}
