document.getElementById("leeg").addEventListener("click", leeg);
document.getElementById("betaal").addEventListener("click", betaal);
document.getElementById("ideal").addEventListener("click", link);
document.getElementById("paypal").addEventListener("click", link);


function leeg() {
    localStorage.clear();
    document.getElementById("mandInhoud").innerHTML = "Uw winkelmandje is leeg";
    document.getElementById("mandTotaal").innerHTML = "€ 0";
  }

function link(){
    document.getElementById("ideal").style.display = "none"
    document.getElementById("paypal").style.display = "none"
    document.getElementById("qr").style.display = "block"
}

function betaal(){
    document.getElementById("main").style.display = "none"
    document.getElementById("popup").style.display = "block"
}

if(localStorage.getItem("winkelmandTotaal")== null){
    leeg()
} else{
    document.getElementById("mandInhoud").innerHTML = localStorage.getItem("winkelmandInhoud");
    document.getElementById("mandTotaal").innerHTML = "€" + localStorage.getItem("winkelmandTotaal");
    document.getElementById("koopTotaal").innerHTML = "€" + localStorage.getItem("winkelmandTotaal");

}

