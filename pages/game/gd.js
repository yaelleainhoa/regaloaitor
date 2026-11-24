var images = [
	"../../assets/img/gd/0.png",
	"../../assets/img/gd/1.png",
	"../../assets/img/gd/2.png",
	"../../assets/img/gd/3.png",
	"../../assets/img/gd/4.png",
	"../../assets/img/gd/5.png",
	"../../assets/img/gd/6.png",
	"../../assets/img/gd/7.png",
	"../../assets/img/gd/8.png",
	"../../assets/img/gd/9.png",
	"../../assets/img/gd/10.png",
	"../../assets/img/gd/11.png",
	"../../assets/img/gd/12.png",
	"../../assets/img/gd/13.png",
	"../../assets/img/gd/14.png",
	"../../assets/img/gd/15.png",

]



var reponses = [
"Gauche, Arza Porras, Javier, EH Bildu",
"Droite, Álvarez Alonso, Marta, Unión del Pueblo Navarro",
"Gauche, Gallo San Román, Oihana EH Bildu",
"Droite, García Malo, María Isabel",
"Gauche, Pardo García, Úrsula, PSOE",
"Droite, San Martín Rodríguez, Leticia, UPN",
"Ext Droite, Nosti Izquierdo, María Teresa VOX",
"Droite, Álvarez Martínez, Gorka, PNV",
"Gauche, girre Garitaonandia, Jasone, Bildu",
"Droite, María Eugenia Arrizabalaga, PNV",
"Ext Droite, Amaia Martínez Grisaleña, VOX",
"Gauche, Pinedo Bustamante, Leire, EH Bildu",
"Gauche, Arkaitz Rodriguez Torres, EH Bildu",
"Droite, Tapia Otaegi, Arantxa PNV",
"Gauche, Idoia Mendia Cueva, PSOE",
"Droite, María Soledad Tejería Otermin, PNV"
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