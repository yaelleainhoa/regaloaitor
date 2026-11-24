var images = [
	"../../assets/img/wheretaken/0.png",
	"../../assets/img/wheretaken/1.png",
	"../../assets/img/wheretaken/2.png",
	"../../assets/img/wheretaken/3.png",
	"../../assets/img/wheretaken/4.png",
	"../../assets/img/wheretaken/5.png",
	"../../assets/img/wheretaken/6.png",
	"../../assets/img/wheretaken/7.png",
	"../../assets/img/wheretaken/8.png",
	"../../assets/img/wheretaken/9.png",
	"../../assets/img/wheretaken/10.png",
	"../../assets/img/wheretaken/11.png",
	"../../assets/img/wheretaken/12.png",

]

var reponses = [
"Iruña, Plaza Castillo",
"Rusukaina, Calm Belt",
"Nanohana, Royaume d'Alabasta",
"Boiling rock, Royaume du feu",
"Bonta",
"Omashu, Royaume de la Terre (Avatar)",
"Cité impériale de Hue",
"Salle Marcel Cerdan, VA",
"Orphelinat de Konoha",
"Leeds UK",
"Manchester UK",
"Résidence VA",
"Segovia"
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