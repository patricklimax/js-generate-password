let passwordLength = 7;
const inputPassword = document.querySelector('#password');
const lowcaseChekedEl = document.querySelector('#lowcaseCheck');
const uppercaseCheckEl = document.querySelector('#uppercaseCheck');
const numberCheckEl = document.querySelector('#numberCheck');
const specialCheckEl = document.querySelector('#specialCheck');
const barIndicatorBar = document.querySelector('#barIndicatorBar');

function generationPassword() {
  let charsNumbers = '0123456789';
  const chars = 'abcdefghijklmnopqrstuvxywz';
  const charsUpperCase = chars.toUpperCase();
  const charsSpecials = '!#$%&()*+,-./:;<=>?@[]^_{|} ~';

  if (lowcaseChekedEl.checked) {
    charsNumbers += chars;
  }

  if (uppercaseCheckEl.checked) {
    charsNumbers += charsUpperCase;
  }

  if (specialCheckEl.checked) {
    charsNumbers += charsSpecials;
  }

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * charsNumbers.length);
    password += charsNumbers.substring(randomNumber, randomNumber + 1);
  }

  inputPassword.value = password;
  calcSecurity();
}
function calcSecurity() {
  const statusSenha = document.querySelector('.statusSenha');
  const percent = (passwordLength / 50) * 100;
  if (percent < 10) {
    statusSenha.innerText = 'Muito fraca';
    barIndicatorBar.classList.remove(`safe`);
    barIndicatorBar.classList.remove(`warning`);
    barIndicatorBar.classList.remove(`completed`);
    barIndicatorBar.classList.add(`critical`);
  } else if (percent < 16) {
    statusSenha.innerText = 'Fraca';
    barIndicatorBar.classList.remove(`safe`);
    barIndicatorBar.classList.remove(`warning`);
    barIndicatorBar.classList.remove(`completed`);
    barIndicatorBar.classList.add(`critical`);
  } else if (percent < 20) {
    statusSenha.innerText = 'Boa';
    barIndicatorBar.classList.remove(`safe`);
    barIndicatorBar.classList.remove(`critical`);
    barIndicatorBar.classList.remove(`completed`);
    barIndicatorBar.classList.add(`warning`);
  } else if (percent < 28) {
    statusSenha.innerText = 'Forte';
    barIndicatorBar.classList.remove(`critical`);
    barIndicatorBar.classList.remove(`warning`);
    barIndicatorBar.classList.remove(`completed`);
    barIndicatorBar.classList.add(`safe`);
  } else {
    statusSenha.innerText = 'Muito forte';
    barIndicatorBar.classList.remove(`critical`);
    barIndicatorBar.classList.remove(`warning`);
    barIndicatorBar.classList.remove(`critical`);
    barIndicatorBar.classList.add(`completed`);
  }
}

function copyPassword() {
  navigator.clipboard.writeText(inputPassword.value);
}

const passwordLengthRange = document.querySelector('#passwordLength');
passwordLengthRange.addEventListener('input', function () {
  passwordLength = passwordLengthRange.value;
  document.querySelector('#passwordLengthText').innerText = passwordLength;
  generationPassword();
});

lowcaseChekedEl.addEventListener('click', generationPassword);
uppercaseCheckEl.addEventListener('click', generationPassword);
specialCheckEl.addEventListener('click', generationPassword);

const copyButtonPassword = document.querySelector('#copyPassword');
copyButtonPassword.addEventListener('click', copyPassword);

