'use strict';
const result=document.querySelector('#result');
const copyBtn=document.querySelector('.btn-copy');
const passwordLength=document.querySelector('#characeterLenght');
const lowercaseCharacter=document.querySelector('#lowercaseCharacter');
const uppercaseCharacter=document.querySelector('#uppercaseCharacter');
const numbercharacters=document.querySelector('#numbercharacters');
const symbolcharacters=document.querySelector('#symbolcharacters');
const susccesMessageEl=document.querySelector('#suscces-message');
const GenerateBtn=document.querySelector('.btn-generate');

const getRandomCharacter=(characters) => characters[Math.floor(Math.random()*characters.length)];
const getLowercharacter=() => getRandomCharacter('qwertyuioplkjhgfdsazxcvbnm');
const getUppercharacter=() => getLowercharacter().toUpperCase();
const getNumbercharacter=() => getRandomCharacter('1234567890');
const getSymbelcharacter=() => getRandomCharacter('!@#$%^&*()_+-";-></?');
const generateRandomPassword=function (
    length=5,
    lower=true,
    upper=true,
    number=true,
    symbel=true,
) {
    if (length>20) {
        alert('Your number of password is big');
    } else {
        const arr=[];
        for (let i=0; i<length; i++) {
            const pass=[
                lower? getLowercharacter():'',
                upper? getUppercharacter():'',
                number? getNumbercharacter():'',
                symbel? getSymbelcharacter():''
            ];
            arr.push(pass.filter(res => res));
        }
        return arr.join('').replaceAll(',', '').slice(0, length);
    }
}

GenerateBtn.addEventListener('click', function () {
    result.value=generateRandomPassword(
        passwordLength.value,
        lowercaseCharacter.checked,
        uppercaseCharacter.checked,
        numbercharacters.checked,
        symbolcharacters.checked);
});
const copyValue=function () {
    result.select();
    document.execCommand('copy');
    result.value='';
    susccesMessageEl.style.opacity=1;
    setTimeout(() => {
        susccesMessageEl.style.opacity=0;
    }, 3000);
}
copyBtn.addEventListener('click', copyValue);
