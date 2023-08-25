let welcomeUser=document.getElementById('welcomeUser');
let logOutBtn= document.getElementById('logOutBtn');
if(localStorage.getItem('user')!=null)
{
    // console.log("test tmam");
    let test = localStorage.getItem('userName'); 
    console.log(test);
    welcomeUser.innerHTML=`welcome ${test}`
}
function logout(){
    window.location.href='login.html'
    // localStorage.removeItem('userName')
}
logOutBtn.addEventListener('click',logout)