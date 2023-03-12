function lancio(){
    dado=["./immagini/uno.png","./immagini/due.png","./immagini/tre.png","./immagini/quattro.png","./immagini/cinque.png","./immagini/sei.png"]
    let faccia=parseInt(Math.random()*6);
    //document.getElementById("d1").textContent=faccia;
    document.getElementById("d1").style.backgroundImage="url("+dado[faccia]+")";
                                                        
     
}



document.getElementById("b1").addEventListener("click",lancio)