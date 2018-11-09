const celciusTemp = document.querySelector('#celcius > input');
const farenTemp = document.querySelector('#farenhiet > input');
const kelvinTemp = document.querySelector('#kevlin > input');


function tempChangeToFarenAndKelvin() {
    const cTemp = parseFloat(celciusTemp.value);
    const kTemp = cTemp * 3;
    const fTemp = cTemp * 2;
    farenTemp.value = fTemp;
    kelvinTemp.value = kTemp;
    //console.log(addTemp.value);
}
celciusTemp.addEventListener('input' , tempChangeToFarenAndKelvin);