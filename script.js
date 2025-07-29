'use strict';
const result=document.querySelector('#result');
const copyBtn=document.querySelector('.btn-copy');

const passwordLength=document.querySelector('#characeterLenght');
const lowercaseCharacter=document.querySelector('#lowercaseCharacter');
const uppercaseCharacter=document.querySelector('#uppercaseCharacter');
const numbercharacters=document.querySelector('#numbercharacters');
const symbolcharacters=document.querySelector('#symbolcharacters');
const susccesMessageEl=document.querySelector('.suscces-message');
const GenerateBtn=document.querySelector('.btn-generate');

console.log(result, passwordLength, lowercaseCharacter,
    uppercaseCharacter, numbercharacters, symbolcharacters, GenerateBtn);
const getRandomCharacter=(num1, num2=97) => String
    .fromCharCode(Math.floor(Math.random()*num1)+num2);

const getLowercharacter=() => getRandomCharacter(26, 97);

const getUppercharacter=() => getRandomCharacter(26, 97).toUpperCase();

const getNumbercharacter=() => {
    const numberRandom='1234567890';
    return numberRandom[Math.floor(Math.random()*numberRandom.length)];
};


const getSymbelcharacter=() => {
    const symbel='!@#$%^&*()_+-";-></?';
    return symbel[Math.floor(Math.random()*symbel.length)];
}
console.log(getLowercharacter(), getUppercharacter()
    , getNumbercharacter(), getSymbelcharacter());

    const getRandomcharacter={
        lowercase: getLowercharacter(),
        uppercase: getUppercharacter(),
        number: getNumbercharacter(),
        symbel: getSymbelcharacter()
    }

    const generatepassword=(
    length,
    uppercase,
    number,
    symbel,
    lowercase
) => {
    let generatePassword='';
    const checkCound=uppercase+symbel+number+lowercase;

    const check=[{ length },{lowercase}, { uppercase }, { number }, { symbel }].filter(item => Object.values(item)[0]);
    console.log(check);

    if (checkCound===0) {
        return '';
    }
    for (let i=0; i<length; i+=checkCound) {
        check.forEach(check => {
            const randomCharacterfunction=Object.keys(check)[0];
            generatePassword+=getRandomcharacter[randomCharacterfunction];
        });

    }
    result.value=generatePassword;
    console.log(generatePassword);

}



GenerateBtn.addEventListener('click', () => {
    const length=+passwordLength.value;
    const lowercase=lowercaseCharacter.checked;
    const uppercase=uppercaseCharacter.checked;
    const symbol=symbolcharacters.checked;
    const number=numbercharacters.checked;
    generatepassword(length, uppercase, symbol, number);
});
const copypassword=() => {
    result.select();
    document.execCommand('copy');
    susccesMessageEl.style.opacity='1';
    setTimeout(() => {
        susccesMessageEl.style.opacity='0';
    }, 1000);
}

copyBtn.addEventListener('click', copypassword);
