const createPhoneElement = () => {
  const phoneElement = document.createElement('input');
  phoneElement.setAttribute('type', 'text');
  phoneElement.setAttribute('name', 'Mobile');
  phoneElement.setAttribute('id', 'phone');
  phoneElement.setAttribute('pattern', '[1-9]{1}[0-9]{9}');
  phoneElement.setAttribute('title', 'Enter 10 digit mobile number');
  phoneElement.setAttribute('placeholder', '123456789');
  phoneElement.setAttribute('class', 'form__input--phone');
  phoneElement.setAttribute('required', 'required');

  return phoneElement;
};

const createEmailElement = () => {
  const emailElement = document.createElement('input');
  emailElement.setAttribute('type', 'email');
  emailElement.setAttribute('name', 'Email');
  emailElement.setAttribute('id', 'email');
  emailElement.setAttribute('placeholder', 'johndoe@example.com');
  emailElement.setAttribute('class', 'form__input--email');
  emailElement.setAttribute('required', 'required');

  return emailElement;
};

const replacePhoneWithEmail = () => {
  const email = document.getElementById('email') || createEmailElement();
  const phone = document.getElementById('phone');

  if (phone) {
    phone.parentNode.replaceChild(email, phone);
  }
};

const replaceEmailWithPhone = () => {
  const email = document.getElementById('email');
  const phone = document.getElementById('phone') || createPhoneElement();

  if (email) {
    email.parentNode.replaceChild(phone, email);
  }
};

const router = () => {
  if (window.location.hash !== '#email' && window.location.hash !== '#phone') {
    window.location.hash = '#email';
    document.querySelector('.form__label--data').textContent = 'Enter your Email';
    replacePhoneWithEmail();
  } else if (window.location.hash === '#email') {
    document.querySelector('.form__label--data').textContent = 'Email';
    replacePhoneWithEmail();
  } else if (window.location.hash === '#phone') {
    document.querySelector('.form__label--data').textContent = 'Mobile phone';
    replaceEmailWithPhone();
  }

  document.querySelector('.form__button svg').style.display = 'none';
};

window.onhashchange = router;
router();

const formElem = document.getElementsByTagName('form')[0];

formElem.addEventListener('submit', (event) => {
  try {
    event.preventDefault();
    document.querySelector('.form__button svg').style.display = 'inline';
    document.querySelector('.form__button span').style.display = 'none';
    document.querySelector('.form__button').disabled = true;
    setTimeout(() => {
      document.querySelector('.fieldset').style.display = 'none';

      document.querySelector('.form__button').style.display = 'none';
      document.querySelector('.form__login').parentNode.style.display = 'block';
    }, 2000);
  } catch (e) {
    document.querySelector('.form__button span').style.display = 'Something went wrong.';
  }
});
