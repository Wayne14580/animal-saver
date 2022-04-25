let mail = document.getElementById('mail');
let mailText= document.getElementById('mail-text');
let custom = document.getElementById('custom');
let textArea= document.getElementById('text-area');
function show(){
   mailText.style.display="block";
   textArea.style.display="none"; 
};
function show1(){
    mailText.style.display="none";
    textArea.style.display="block";
}
function init(){
    mail.onclick = show;
    custom.onclick= show1;
};
window.addEventListener('load',init,false)