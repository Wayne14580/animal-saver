function showLarge(e){
    document.getElementById('large').src = e.target.src;
  }
  
  function init(){
      let imgs = document.querySelectorAll('.small img');
      for(let i=0;i<imgs.length; i++){
          imgs[i].onmouseover = showLarge ;
      }
  }
  
window.addEventListener("load", init, false);