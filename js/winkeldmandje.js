const twok = {naam: " Lamy 2000 ", prijs: 200};
const safari = {naam: " safari ", prijs: 20};
const logo = {naam: " logo ", prijs: 30};
const notebook1 = {naam: " notebook 1 ", prijs: 20};
const notebook2 = {naam: " notebook 2 ", prijs: 20};
const notebook3 = {naam: " notebook 3 ", prijs: 20};
const inkt1 = {naam: " inkt1 ", prijs: 10};
const inkt2 = {naam: " inkt2 ", prijs: 10};
const inkt3 = {naam: " inkt3 ", prijs: 10};

const winkelmand = {inhoud: "", totaal: 0}

// voegt listenerEvents toe aan alle koop knoppen
let buttons = document.querySelectorAll(".koop")
for(let i = 0; i < buttons.length; i++ ){
    buttons[i].addEventListener("click", cart)
}

// zet de inhoud van winkelmandje
if(localStorage.getItem("winkelmandTotaal") != null){
    winkelmand.inhoud = JSON.parse( localStorage.getItem("winkelmandInhoud"));
    winkelmand.totaal = parseInt(localStorage.getItem("winkelmandTotaal"));
}

// matcht e met de object namen
function cart(e){
    // het eerste item word gezet anders is het null. Daarna worden items normaal toegevoegd.
    if(localStorage.getItem("winkelmandTotaal") != null){
        let item = eval(e.target.id)
        winkelmand.inhoud += item.naam
        winkelmand.totaal += item.prijs
    } else{
        let item = eval(e.target.id)
        winkelmand.inhoud = item.naam
        winkelmand.totaal += item.prijs
    }
    localStorage.setItem("winkelmandInhoud", JSON.stringify(winkelmand.inhoud) )
    localStorage.setItem("winkelmandTotaal", winkelmand.totaal)
}

// todo: toegevoegd item-knop een andere kleur geven