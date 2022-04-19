function showLargeB(e){
    document.getElementById('large-b').src = e.target.src;
  }
  
  function init(){
      let imgs = document.querySelectorAll('.small-b img');
      for(let i=0;i<imgs.length; i++){
          imgs[i].onmouseover = showLargeB ;
      }
  }
  
  window.addEventListener("load", init, false);