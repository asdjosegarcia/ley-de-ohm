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


