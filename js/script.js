const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
emailField = document.getElementById("email");
passwordField = document.getElementById("password"); 
var doubleCheck;
document.getElementById("form").addEventListener('submit',e=>{
    e.preventDefault();
    validate(e);
});
const setSuccess = element => {
    const inputControl = element.parentElement;
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const setError = (element, message) => {
    const inputControl = element.parentElement;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function validate(){
    doubleCheck=0;
    if(emailField.value==""){
        setError(emailField,"Email is required");
    }
    else if(!re.test(String(emailField.value).toLowerCase())){
        setError(emailField,"Email shouldn't have special characters");
    }
    else{
        setSuccess(emailField);
        doubleCheck++;
    }

    if(passwordField.value === '') {
        setError(passwordField, 'Password is required');
    } else if (passwordField.value.length < 8 ) {
        setError(passwordField, 'Password must be at least 8 character.')
    } else {
        setSuccess(passwordField);
        doubleCheck++;
    }

    if(doubleCheck===2){
        localStorage.setItem('is_email',emailField.value);
        localStorage.setItem('is_password',passwordField.value);
        document.getElementById('form').style.display = "none";
        document.getElementById('welcome').innerHTML = `Welcome , ${emailField.value}.. <a href="./home/index.html">Continue</a>`
        document.getElementById('welcome').style.display = "block";
    }
}