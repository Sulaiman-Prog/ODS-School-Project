function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

}
function hidebar(){
    const sidebar = document.querySelector('.sidebar ')
    sidebar.style.display = 'none'
}
function showpswrd(){
    const passwordInput = document.getElementById('password');
    const showpassword = document.getElementById('show-pswrd');
    passwordInput.type = showpassword.checked ? 'text' : 'password';
   
}
function hidewelcome(){
    const welcome = document.querySelector('.welcome')
    welcome.style.display = 'none'
}
function showlogin(){
    const wrapper = document.querySelector('.wrapper')
    wrapper.style.display = 'flex'
}
function showwelcome(){
    const swelcome = document.querySelector('.welcome')
    swelcome.style.display = 'flex'
}
function hidelogin(){
    const swrapper = document.querySelector('.wrapper')
    swrapper.style.display = 'none'
}

function openbox(event){
    event.preventDefault();
    hidewelcome();
    showlogin();
}
function openbox1(event){
    event.preventDefault();
    hidewelcome();
    showlogin();
    hidebar();
}
function closebutton(){
    showwelcome();
    hidelogin();
}