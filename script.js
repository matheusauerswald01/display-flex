const convertButton = document.querySelector('button');


function convert (){
    const inputValue = document.querySelector('.moeda2').value;
    
    const dolarToday = 5.25;
    const euroToday = 6.65;
    const bitcoinToday = 500000; 
    const convertValue = (inputValue / dolarToday).toFixed(2);

    const result = document.querySelector('.valueConverted');
    const resultText = document.querySelector('.valueToConvert');

    const formatterBRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const formatterUSD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const formatterEUR = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });
    const selectfound = document.querySelector('#moeda2')
    

    if(selectfound.value === 'euro'){
        const convertValue = (inputValue / euroToday).toFixed(2);
        result.innerHTML = formatterEUR.format(convertValue);
        return
    }else{
    }

    if(selectfound.value === 'bitcoin'){
        const convertValue = (inputValue / bitcoinToday).toFixed(8);
        result.innerHTML = `BTC ${convertValue} `;
        return
    }

    if(inputValue === '') {
        alert('Preencha o campo de valor!');
        return;
    }

    resultText.innerHTML = formatterBRL.format(inputValue);
    result.innerHTML = formatterUSD.format(convertValue);
    


    
}

const selectfound = document.querySelector('#moeda2');
const flagImage = document.querySelector('.bandeira2');
const selectfound2 = document.querySelector('#moeda22');
const placeholder = document.querySelector('.valueConverted');


function updateFlag() {
    
    if (selectfound.value === 'bitcoin') {
        flagImage.src = './assets/bitcoin 1.png'; 
        selectfound2.innerHTML = 'Bitcoin';
        placeholder.innerHTML = 'BTC 0,00000000';
    } else if (selectfound.value === 'dolar') {
        placeholder.innerHTML = 'US$ 0,00';
        selectfound2.innerHTML = 'Dólar Americano';
        flagImage.src = './assets/dolar.png'; 
    }else if (selectfound.value === 'euro') {
        flagImage.src = './assets/euro.png'; 
        selectfound2.innerHTML = 'Euro';
        placeholder.innerHTML = '€ 0,00';
    }else {
        flagImage.src = './assets/brasil.png'; 
    }
}

// Chame a função sempre que a moeda for alterada
selectfound.addEventListener('change', updateFlag);