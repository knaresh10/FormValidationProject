const form = document.getElementById('form');
const FullName = document.getElementById('FullName');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const FullNameValue = FullName.value.trim();
    const mobileValue = mobile.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(FullNameValue === '') {
        setError(FullName, 'Full Name is required');
    } else if(FullNameValue.length < 5) {
        setError(FullName, 'length of name must be more then 5 characters ');
    }
    else{
        setSuccess(FullName);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!emailValue.includes('@')) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(mobileValue === '') {
        setError(mobile, 'number is required');
    } else if ((mobileValue.length != 10 )&&(isNaN)) {
        setError(mobile, 'number must be  10 digits.')
    } 
    else if(mobileValue==='1234567890')
    {
        setError(mobile, 'number must not be 1234567890')
    }
    else
    {
        setSuccess(mobile);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    }
     else if(passwordValue==='Password')
        {
            setError(password, 'Password not be password')
        }
      else if(passwordValue===usernameValue)  
      {
        setError(password, 'Password not be username')
      }
     else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
    
};
