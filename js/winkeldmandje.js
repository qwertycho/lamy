const twok = {naam: "Lamy 2000", prijs: 200};

const safari = {naam: "safari", prijs: 20};
const logo = {naam: "logo", prijs: 30};

const notebook1 = {naam: "notebook 1", prijs: 20};

const notebook2 = {naam: "notebook 2", prijs: 20};

const notebook3 = {naam: "notebook 3", prijs: 20};

const inkt1 = {naam: "inkt1", prijs: 10};

const inkt2 = {naam: "inkt2", prijs: 10};

const inkt3 = {naam: "inkt3", prijs: 10};


const winkelmand = {inhoud: "", totaal: 0}

document.getElementById("2k").addEventListener("click", cart);
document.getElementById("safari").addEventListener("click", cart)
document.getElementById("logo").addEventListener("click", cart)



function cart(e){
    let item = eval(e.target.id)
    winkelmand.inhoud += item.naam
    winkelmand.totaal +=  item.prijs
    console.log(winkelmand)
    localStorage.setItem("winkelmandInhoud", winkelmand.inhoud)
    localStorage.setItem("winkelmandTotaal", winkelmand.totaal)
    console.log(localStorage.getItem("winkelmandInhoud"))
    console.log(localStorage.getItem("winkelmandTotaal"))
}

