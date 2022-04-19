function showLargeM(e){
    document.getElementById('large-m').src = e.target.src;
  }
  
  function init(){
      let imgs = document.querySelectorAll('.small-m img');
      for(let i=0;i<imgs.length; i++){
          imgs[i].onmouseover = showLargeM ;
      }
  }
  
  window.addEventListener("load", init, false);
 
