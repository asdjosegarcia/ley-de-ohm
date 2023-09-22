btnCalcVoltMah.addEventListener('click',  ()=>{toggleMah(calcVoltMah,calcVoltage)})

let calcVoltMah=false;

function toggleMah(varName,functionName){
    varName=!varName
    functionName(varName)
}
function calcVoltage(toggleVar) {
    alert(toggleVar)  
    const resistence = resitenceCalcVolt.value
    const stream = streamCalcVolt.value
    voltage = stream * resistence;
/*     if(toggleVar === false){  // Aquí corregimos la condición
        voltage=voltage*1000
    } */
    calcVoltMah=toggleVar
    // console.log(calcVoltMah)
    resultCalcVoltageSpan.innerText = voltage.toFixed(2) + ' V'
}