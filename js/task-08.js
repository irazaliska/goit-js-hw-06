const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  
  const { email, password } = event.currentTarget;
  
    if (email.value === '' || password.value === '') {
      alert("Усі поля повинні бути заповнені");
      return;
    }
  
    const formData = {
      email: email.value,
      password: password.value
    };
    console.log(formData);

    event.currentTarget.reset();
  }