function showLarge(e){
    let imgs = document.querySelectorAll('.small img');
    let smallPic1 = imgs[0];
    let smallPic2 = imgs[1];
    document.getElementById('large').src = e.target.src;
    if(document.getElementById('large').src == smallPic1.src){
        document.getElementById('cap').innerText='典雅咖啡杯白色'
    }else if(document.getElementById('large').src == smallPic2.src){
            document.getElementById('cap').innerText='典雅咖啡杯薰衣草色'
    }
  }
  function init(){
      let imgs = document.querySelectorAll('.small img');
      for(let i=0;i<imgs.length; i++){
          imgs[i].onmouseover = showLarge; 
    }
  }
  
window.addEventListener("load", init, false);