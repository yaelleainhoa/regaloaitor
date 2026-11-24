var images = [
	"../../assets/img/colors/q0.png",
	"../../assets/img/colors/r0.png",
	"../../assets/img/colors/q1.png",
	"../../assets/img/colors/r1.png",
	"../../assets/img/colors/q2.png",
	"../../assets/img/colors/r2.png",
	"../../assets/img/colors/q3.png",
	"../../assets/img/colors/r3.png",
	"../../assets/img/colors/q4.png",
	"../../assets/img/colors/r4.png",
	"../../assets/img/colors/q5.png",
	"../../assets/img/colors/r5.png",
	"../../assets/img/colors/q6.png",
	"../../assets/img/colors/r6.png",
	"../../assets/img/colors/q7.png",
	"../../assets/img/colors/r7.png",
	"../../assets/img/colors/q8.png",
	"../../assets/img/colors/r8.png",
	"../../assets/img/colors/q9.png",
	"../../assets/img/colors/r9.png",
	"../../assets/img/end.png",
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
