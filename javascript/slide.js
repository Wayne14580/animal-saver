function $id(id){
    return document.getElementById(id);
}

window.addEventListener("load",function(){
    
    let morePhotos = document.querySelector(".animals-more-photos");
    let curIndex = 0 ;
    $id("btnLeft").onclick = function(){
        curIndex--;
        morePhotos.style.left = -610 *curIndex + "px";
        if(curIndex == 0){
            $id("btnLeft").disabled = true;
        }
        $id("btnRight").disabled = false;
    }
    $id("btnRight").onclick = function(){
        curIndex++;
        morePhotos.style.left = -610 *curIndex + "px";
        if(curIndex == 5){
            $id("btnRight").disabled = true;
        }
        $id("btnLeft").disabled = false;
    }
})
