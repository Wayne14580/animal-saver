function showLargeB(e){
    let imgs = document.querySelectorAll('.small-b img');
    let smallPic1 = imgs[0];
    let smallPic2 = imgs[1];
    document.getElementById('large-b').src = e.target.src;
    if(document.getElementById('large-b').src == smallPic1.src){
        document.getElementById('luggage').innerText='潮流行李箱粉色'
    }else if(document.getElementById('large-b').src == smallPic2.src){
            document.getElementById('luggage').innerText='潮流行李箱綠色'
    }
  }
  
  function init(){
      let imgs = document.querySelectorAll('.small-b img');
      for(let i=0;i<imgs.length; i++){
          imgs[i].onmouseover = showLargeB ;
      }
  }
  
  window.addEventListener("load", init, false);