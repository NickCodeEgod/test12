const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

const email = document.getElementById('email');
  const emailConfirm = document.getElementById('email-confirm');
  const error = document.getElementById('email-confirm-error');
  const submitBtn = document.getElementById('submit-btn');
  
  function validateEmail() {
    if (email.value !== emailConfirm.value) {
      error.style.display = 'inline';
      submitBtn.disabled = true;
    } else {
      error.style.display = 'none';
      submitBtn.disabled = false;
    }
  }
  
  email.addEventListener('input', validateEmail);
  emailConfirm.addEventListener('input', validateEmail);


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



