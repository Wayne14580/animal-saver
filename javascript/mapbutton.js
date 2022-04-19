
let penguin = document.getElementById('penguin');
// let PenguinC = new Object
//     PenguinC.src="img/penguin-live-map.png",
//     PenguinC.p="lorem"
let polarBear = document.getElementById('polarbear');
let rhino = document.getElementById('rhino');
let redCat = document.getElementById('redcat');
let whale = document.getElementById('whale');
let limulidae = document.getElementById('limulidae');
let showMap = document.getElementById("showmap");
let animalBox = document.getElementById('animalbox');
let inMap =document.getElementById("inmap");
let animalText = document.getElementById("animaltext");

// function showConect(){
//  if(animalBox.style.width<"768px"){
//animalBox.style.display="none";
//  }else if(animalBox.style.width>="768px"){
//animalBox.style.display="block";
//  }
// }
function  showBox(){
    if(showMap.style.display="none"){
            showMap.style.display="block";
            animalBox.style.top="25%";
            animalBox.style.left="40%";
            animalBox.style.transition="left,1s";
            penguin.style.border="10px solid #d9ed92";
            polarbear.style.border="3px solid #34a0a4";
            rhino.style.border="3px solid #34a0a4";
            redCat.style.border="3px solid #34a0a4";
            whale.style.border="3px solid #34a0a4";
            limulidae.style.border="3px solid #34a0a4";
            inMap.src="img/penguin-live-map.png";
            animalText.innerText="主要生活在南半球，目前已知全世界的企鵝共有19種，另有兩種已滅絕。多數分布在南極地區，而其中環企鵝屬的漢波德企鵝、麥哲倫企鵝與黑腳企鵝分布在緯度較低的溫帶地區，至於加拉帕戈斯企鵝的分布則更接近赤道；完全生活在極地的只有皇帝企鵝及阿德利企鵝兩種。";
}
 //else if(showMap.style.display="block"){
 //showMap.style.display="none";
 //animalBox.style.display="none";
 //inMap.src="";
 //animalText.innerText=""; 
 // }
}
function  showBox1(){
    showMap.style.display="block";
//    animalBox.style.display="block";
    animalBox.style.left="50%";
    animalBox.style.top="20%";
    penguin.style.border="3px solid #34a0a4";
    polarbear.style.border="10px solid #d9ed92";
    rhino.style.border="3px solid #34a0a4";
    redCat.style.border="3px solid #34a0a4";
    whale.style.border="3px solid #34a0a4";
    limulidae.style.border="3px solid #34a0a4";
    animalBox.style.transition="left,1s";
    inMap.src="img/polarbear-live-map.png";
    inMap.style.opacity="0.5";
    animalText.innerText="學名：Ursus maritimus，意即「海熊」又稱 白熊 或 冰熊，是產自北極地區的一種大型肉食性哺乳動物，北極熊是現存體型最大的熊，也是現存陸地上最大的食肉動物，約在四十萬年前（也有不同的學者認為是十五、二十、六十甚至上百萬年前）由古代棕熊演化而來。";
}
function  showBox2(){
    showMap.style.display="block";
    animalBox.style.left="20%";
    animalBox.style.top="30%";
    penguin.style.border="3px solid #34a0a4";
    polarbear.style.border="3px solid #34a0a4";
    rhino.style.border="10px solid #d9ed92";
    redCat.style.border="3px solid #34a0a4";
    whale.style.border="3px solid #34a0a4";
    limulidae.style.border="3px solid #34a0a4";
    animalBox.style.transition="left,1s";
//  animalBox.style.display="block";
    inMap.src="img/rhino-live-map.png";
    animalText.innerText="白犀牛，是白犀的一個亞種。牠們是牧食的，生活在北非洲草原及大草原林地。野外北白犀已經滅絕，最後一隻已知的雄性北白犀「蘇丹」於2018年3月19日安樂死，白犀牛，是白犀的一個亞種。牠們是牧食的，生活在北非洲草原及大草原林地。野外北白犀已經滅絕，最後一隻已知的雄性北白犀「蘇丹」於2018年3月19日安樂死，享年45歲；現存的北白犀全球只剩2隻.....";
}
function  showBox3(){
    if(showMap.style.display="none"){
        showMap.style.display="block";
        animalBox.style.left="30%";
        animalBox.style.top="30%";
        animalBox.style.transition="left,1s";
        penguin.style.border="3px solid #34a0a4";
        polarbear.style.border="3px solid #34a0a4";
        rhino.style.border="3px solid #34a0a4";
        redCat.style.border="10px solid #d9ed92";
        whale.style.border="3px solid #34a0a4";
        limulidae.style.border="3px solid #34a0a4";
        //animalBox.style.display="block";
        inMap.src="img/redcat-live-map.png";
        animalText.innerText="學名：Ailurus，也叫紅熊貓、紅貓熊或九節狼，是一種小型哺乳動物，原產於中國西南地區由於野外成年生存數量預估不足10000隻，小貓熊已被國際自然保護聯盟歸為瀕危物種。儘管小貓熊受到其範圍內國家的法律保護，但是面臨棲息地破壞、棲息地零碎化、偷獵以及近交衰退的種種威脅，其數量仍在不斷減少。";
}
// else if(showMap.style.display="block"){
//       showMap.style.display="none";
//       animalBox.style.display="none";
//       inMap.src="";
//       animalText.innerText=""; 
// }
}
function  showBox4(){
    if(showMap.style.display="none"){
        showMap.style.display="block";
        animalBox.style.left="40%";
        animalBox.style.top="20%";
        animalBox.style.transition="left,1s";
        penguin.style.border="3px solid #34a0a4";
        polarbear.style.border="3px solid #34a0a4";
        rhino.style.border="3px solid #34a0a4";
        redCat.style.border="3px solid #34a0a4";
        whale.style.border="10px solid #d9ed92";
        limulidae.style.border="3px solid #34a0a4";
        // animalBox.style.display="block";
        inMap.src="img/whale-live-map-map2.png";
        animalText.innerText="學名：Balaenoptera musculus是屬於鬚鯨小目的海洋哺乳動物。藍鯨不僅是地球上現存體型最大的動物，也是地球史上最大的動物之一同樣也是鬚鯨屬的史前巨型鯨魚-Balaenoptera sibbaldina，體型能與藍鯨匹敵。長超過24米，重達177公噸。";
}
// else if(showMap.style.display="block"){
//     showMap.style.display="none";
//     animalBox.style.display="none";
//     inMap.src="";
//     animalText.innerText=""; 
//     }
}
function  showBox5(){
    if(showMap.style.display="none"){
        showMap.style.display="block";
        animalBox.style.left="40%";
        animalBox.style.top="30%";
        animalBox.style.transition="left,1s";
        penguin.style.border="3px solid #34a0a4";
        polarbear.style.border="3px solid #34a0a4";
        rhino.style.border="3px solid #34a0a4";
        redCat.style.border="3px solid #34a0a4";
        whale.style.border="3px solid #34a0a4";
        limulidae.style.border="10px solid #d9ed92"
        // animalBox.style.display="block";
        inMap.src="img/limulidae-live-map.png";
        animalText.innerText="鱟魚在千多年前已有記載。唐劉恂在其嶺表錄異中寫道：「鱟魚，其殼瑩淨滑如青瓷碗，鏊（注音：ㄠˊ）背，眼在背上，口在腹下，青黑色。腹兩傍為六腳，有尾長尺餘，三棱如棕莖，雌常負雄而行。捕者必雙得之，若摘去雄者，雌者即自止背負之方行。腹中有子如綠豆，南人取之，碎其肉腳，和以為醬，食之。尾中有珠，如慄色黃。雌者小，置水中，即雄者浮，雌者沉。」";
}
// else if(showMap.style.display="block"){
//         showMap.style.display="none";
//         animalBox.style.display="none";
//         inMap.src="";
//         animalText.innerText=""; 
//     }
}
// function  closeBox(){
//    let showMap = document.getElementById("showmap");
//    let animalBox = document.getElementById('animalbox');
//    let inMap =document.getElementById("inmap")
//    showMap.style.display="none";
//    animalBox.style.display="none";
//    inMap.src="";
//    animalBox.innerHTML="";
// }
                       
                    
function init(){
    penguin.onclick = showBox;
    // penguin.onmouseout = closeBox;
    polarBear.onclick = showBox1;
    rhino.onclick = showBox2;
    redCat.onclick = showBox3;
    whale.onclick = showBox4;
    limulidae.onclick = showBox5;
}
window.addEventListener("load",init,false)
// function $pig(name){
//     return document.getElementsByName(name)
// }
// window.addEventListener("load",function(){
//     $pig("this").onclick = function show(){
//         window.alert("hello")
// }
// },false)