let emailLoginInput=document.getElementById('emailLoginInput');
let passwordLoginInput=document.getElementById('passwordLoginInput');
let loginBtn=document.getElementById('loginBtn');
let userContainer=[];
if(localStorage.getItem('user') != null){
    userContainer=JSON.parse(localStorage.getItem('user'));
}else{
    userContainer=[];
}
function login(){
   if( checkInput()==true){
    getAlert('All Input required' , 'red')
   }else{
    if(checkEmailPassword()==true)   {
        //to navigate to next page
        // console.log("ashta2");
        window.location.href='home.html' ; 
    }
    else{
        getAlert('email&password is not correct');
    
    }
   }
   
}
function checkEmailPassword(){
    for( let i=0; i<userContainer.length;i++){
        if( userContainer[i].email == emailLoginInput.value && userContainer[i].passward == passwordLoginInput.value)
    {
        localStorage.setItem('userName',userContainer[i].name);
        // console.log(userContainer[i].name);
        // console.log("ashta");
        return true;   
    }
    }
    

}
function getAlert(text, color) {
    alertMassage.classList.replace('d-none', 'd-flex');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;

}
function checkInput() {
    if ( emailLoginInput.value == '' || passwordLoginInput == '')
        return true;
    else
        return false;
}

loginBtn.addEventListener('click',login);