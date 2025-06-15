const formData = { email: '', message: '' };

const inputFill = document.querySelector('.feedback-form');

const email = inputFill.elements.email;
const message = inputFill.elements.message;
const localStorageKey = 'feedback-form-state';

const savingDataForm = localStorage.getItem(localStorageKey);

if (savingDataForm) {
  email.value = JSON.parse(savingDataForm).email ?? '';
  message.value = JSON.parse(savingDataForm).message ?? '';
  formData.email = JSON.parse(savingDataForm).email ?? '';
  formData.message = JSON.parse(savingDataForm).message ?? '';
}

inputFill.addEventListener('input', () => {
  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

inputFill.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    inputFill.reset();
    formData.email = '';
    formData.message = '';
  } else {
    alert('Please fill all fields');
  }
});