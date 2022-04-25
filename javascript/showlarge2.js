function showLargeM(e){
    let imgs = document.querySelectorAll('.small-m img');
    let smallPic1 = imgs[0];
    let smallPic2 = imgs[1];
    document.getElementById('large-m').src = e.target.src;
    if(document.getElementById('large-m').src == smallPic1.src){
        document.getElementById('bag').innerText='虎鯨造型背包黑色'
    }else if(document.getElementById('large-m').src == smallPic2.src){
            document.getElementById('bag').innerText='虎鯨造型背包綠色'
    }
  }
  
  function init(){
      let imgs = document.querySelectorAll('.small-m img');
      for(let i=0;i<imgs.length; i++){
          imgs[i].onmouseover = showLargeM ;
      }
  }
  
  window.addEventListener("load", init, false);
 
