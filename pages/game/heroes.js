var images = [
	"../../assets/img/heroes/falcon.png", 
	"../../assets/img/heroes/frost.png", 
	"../../assets/img/heroes/ivy.png", 
	"../../assets/img/heroes/xavier.png", 
	"../../assets/img/heroes/storm.png", 
	"../../assets/img/heroes/flash.png", 
	"../../assets/img/heroes/rogue.png", 
	"../../assets/img/heroes/wolverine.png", 
]

var reponses = [
	"West Rosen",
	"Tracy Strauss",
	"Maya Herrera",
	"Matt Parkman",
	"Elle Bishop",
	"Daphne Millbrook",
	"Arthur Petrelli",
	"Adam Monroe ou Claire Bennet"
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