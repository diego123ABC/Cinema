let i, j;

function generazioneCinema(){
    let altezza = document.getElementById("altezza").value;
    if(altezza <= 0){
        alert("Altezza non valida");
    }else{
        let lunghezza = document.getElementById("lunghezza").value;
        if(lunghezza <= 0){
            alert("Lunghezza non valida");
        }else{
            let poltrone = document.getElementById("poltrone");
            for (i = 0; i < altezza; i++) {
                for (j = 0; j < lunghezza; j++) {
                    let img = document.createElement("img");
                    img.src = "poltronaNera.png";
                    img.onclick = function () {
                        if(img.src.includes("poltronaNera.png")) {
                            img.src="poltronaRossa.png";
                        } else {
                            img.src="poltronaNera.png";
                        }
                    }
                    poltrone.appendChild(img);
                }
                poltrone.appendChild(document.createElement("br"));
            }
        }
    }
}

function resetCinema(){
    document.getElementById("altezza").value = "";
    document.getElementById("lunghezza").value = "";
    document.getElementById("poltrone").innerHTML = "";
}