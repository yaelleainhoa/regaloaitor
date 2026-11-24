var images = [
	"../../assets/img/characters/0.png",
	"../../assets/img/characters/0 answer.png",
	"../../assets/img/characters/1.png",
	"../../assets/img/characters/1 answer.png",
	"../../assets/img/characters/2.png",
	"../../assets/img/characters/2 answer.png",
	"../../assets/img/characters/3.png",
	"../../assets/img/characters/3 answer.png",
	"../../assets/img/characters/4.png",
	"../../assets/img/characters/4 answer.png",
	"../../assets/img/characters/5.png",
	"../../assets/img/characters/5 answer.png",
	"../../assets/img/characters/6.png",
	"../../assets/img/characters/6 answer.png",
	"../../assets/img/characters/7.png",
	"../../assets/img/characters/7 answer.png",
	"../../assets/img/characters/8.png",
	"../../assets/img/characters/8 answer.png",
	"../../assets/img/characters/9.png",
	"../../assets/img/characters/9 answer.png",
	"../../assets/img/characters/10.png",
	"../../assets/img/characters/10 answer.png",
	"../../assets/img/characters/11.png",
	"../../assets/img/characters/11 answer.png",
	"../../assets/img/characters/12.png",
	"../../assets/img/characters/12 answer.png",
	"../../assets/img/characters/13.png",
	"../../assets/img/characters/13 answer.png",
	"../../assets/img/characters/14.png",
	"../../assets/img/characters/14 answer.png",
	"../../assets/img/characters/15.png",
	"../../assets/img/characters/15 answer.png",
	"../../assets/img/characters/16.png",
	"../../assets/img/characters/16 answer.png",
	"../../assets/img/characters/17.png",
	"../../assets/img/characters/17 answer.png",
]

var reponses = [
	"",
	"",
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
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
	}
