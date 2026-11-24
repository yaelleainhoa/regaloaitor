var images = [
	"../../assets/img/arc/Dressrossa.png", //franky
    "../../assets/img/arc/Skypiea 2.png", //cosplay
    "../../assets/img/arc/Impel Down.jpg", //luffy
    "../../assets/img/arc/wano.jpg", // Sanji
    "../../assets/img/arc/wano.png",
    "../../assets/img/arc/Water Seven.png",
    "../../assets/img/arc/Marineford.jpg",
    "../../assets/img/arc/Water Seven.jpg",
    "../../assets/img/arc/Punk Hazard.png",
    "../../assets/img/arc/Enies Lobby.png",
    "../../assets/img/arc/Sabaody.jpg",
    "../../assets/img/arc/Punk Hazard.jpg",
    "../../assets/img/arc/Whole Cake.jpg",
	"../../assets/img/arc/wano 2.png",
	"../../assets/img/arc/Skypiea.png",
	"../../assets/img/arc/Thriller Bark.jpg",
	"../../assets/img/arc/Thriller Bark.png",
]

var reponses = [
	"Dressrossa", //franky
    "Skypiea", //cosplay
    "Impel Down", //luffy
    "Wano", // Sanji
    "Wano",
    "Water Seven",
    "Marineford",
    "Water Seven",
    "Punk Hazard",
    "Enies Lobby",
    "Sabaody",
    "Punk Hazard",
    "Whole Cake",
	"Wano",
	"Skypiea",
	"Thriller Bark",
	"Thriller Bark",
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); 
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		if(id<images.length-1)
		{
			id++;
			raz();
		}
		document.getElementById("solution").classList.add("btn") ;
	}

 	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.style = "bold" ;
		document.getElementById("solution").classList.remove("btn") ;
	}