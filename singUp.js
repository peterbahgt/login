let userNameInput = document.getElementById('userNameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let signUpBtn = document.getElementById('signUpBtn');
let alertMassage = document.getElementById('alertMassage');
let userContainer = [];
if (localStorage.getItem('user') != null) {

    userContainer = JSON.parse(localStorage.getItem('user'));  

}
function signUp() {
    let data = {
        name: userNameInput.value,
        email: emailInput.value,
        passward: passwordInput.value
    }
    if (checkInput() == true) {
        getAlert ('All Input required', 'red');
    }
    else {
        if(checkEmail()== true)
        {

            getAlert ('Email already exist', 'red');
        
        }
        else{
            userContainer.push(data);
            localStorage.setItem('user', JSON.stringify(userContainer));
            cleanForm();
            getAlert('success', 'green');
        }
       
    }

}
function getAlert(text, color) {
    alertMassage.classList.replace('d-none', 'd-flex');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;

}
function cleanForm() {
    userNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}
function checkInput() {
    if (userNameInput.value == '' || emailInput.value == '' || passwordInput == '')
        return true;
    else
        return false;
}
function checkEmail(){
    for(let i=0; i<userContainer.length ; i++)
    {
        if(userContainer[i].email == emailInput.value)
        return true;
    }
}
signUpBtn.addEventListener('click', ()=>{signUp()})