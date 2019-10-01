let plus = document.getElementById('+');
let minus = document.getElementById('-');
let value = document.getElementById('child').value;
let button = document.getElementById('button');
let hrubaMzda = document.getElementById('hrubaMzda');
let restult = document.getElementById('result');
console.log(hrubaMzda);

plus.addEventListener('click', function incrementValue() {
    value = isNaN(value) ? 0 : value;
    value ++;
    document.getElementById('child').value = value;
})

minus.addEventListener('click', function decrementValue() {
    value = isNaN(value) ? 0 : value;
    value --;
    document.getElementById('child').value = value;
})



function calculate(){
    let ZP1 = (hrubaMzda.value/100) * 4.5;
    let ZP2 = (hrubaMzda.value/100) * 9;
    let SP1 = (hrubaMzda.value/100) * 6.5;
    let SP2 = (hrubaMzda.value/100) * 25;

    console.log(value);
    console.log(hrubaMzda);
    console.log(ZP1);
    console.log(ZP2);
    console.log(SP1);
    console.log(SP2);

    let DZND = 0;

    let y = Number(value);
    console.log(y);
    console.log(value);

    if (y < 0) alert('Počet dětí je nesmysl.');
    if (y == 0) {
        DZND = 0;
        console.log(DZND);
    }
    if (y == 1) {
        DZND = 1267;
        console.log(DZND);
    }
    if (y == 2) {
        DZND = 2884;
        console.log(DZND);
    }
    if (y >= 3) {
        DZND = 4901;
        console.log(DZND);
    }
    
    let i = Number(hrubaMzda.value);

    let SHM = i + ZP2 + SP2;
    console.log(SHM);
    //let SHM2 = SHM;
    let DZPFO = (SHM/100) * 15;
    //console.log(SHM2);
    console.log(DZPFO);

    let ZNDZPFO = DZPFO - 2070 - DZND;
    console.log(ZNDZPFO);

    let CM = i - ZP1 - SP1 - ZNDZPFO;
    console.log(CM);
    return Math.floor(CM);
}


button.addEventListener('click', function(){
    restult.innerText = calculate();
})



//ZP1       Zdravotní pojištění placené zaměstnancem
//ZP2       Zdravotní pojištění placené zaměstnavatelem
//SP1       Sociální pojištění placené zaměstnancem
//SP2       Sociální pojištění placené zaměstnavatelem
//DZND      Daňové zvýhodnění na dítě
//SHM       Superhrubá mzda
//DZPFO     Daň z příjmu fyzických osob
//ZNDZPFO   Záloha na daň z příjmu fyzických osob
//CM        Čistá mzda