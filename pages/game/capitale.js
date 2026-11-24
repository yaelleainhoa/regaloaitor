var images = [
	"../../assets/img/capitale/q0.png",
	"../../assets/img/capitale/r0.png",
	"../../assets/img/capitale/q1.png",
	"../../assets/img/capitale/r1.png",
	"../../assets/img/capitale/q2.png",
	"../../assets/img/capitale/r2.png",
	"../../assets/img/capitale/q3.png",
	"../../assets/img/capitale/r3.png",
	"../../assets/img/capitale/q4.png",
	"../../assets/img/capitale/r4.png",
	"../../assets/img/capitale/q5.png",
	"../../assets/img/capitale/r5.png",
	"../../assets/img/capitale/q6.png",
	"../../assets/img/capitale/r6.png",
	"../../assets/img/capitale/q7.png",
	"../../assets/img/capitale/r7.png",
	"../../assets/img/capitale/q8.png",
	"../../assets/img/capitale/r8.png",
	"../../assets/img/capitale/q9.png",
	"../../assets/img/capitale/r9.png",
	"../../assets/img/capitale/q10.png",
	"../../assets/img/capitale/r10.png",
	"../../assets/img/capitale/q11.png",
	"../../assets/img/capitale/r11.png",
	"../../assets/img/capitale/q12.png",
	"../../assets/img/capitale/r12.png",
	"../../assets/img/capitale/q13.png",
	"../../assets/img/capitale/r13.png",
	"../../assets/img/capitale/q14.png",
	"../../assets/img/capitale/r14.png",
	"../../assets/img/capitale/q15.png",
	"../../assets/img/capitale/r15.png",
	"../../assets/img/capitale/q16.png",
	"../../assets/img/capitale/r16.png",
	"../../assets/img/capitale/q17.png",
	"../../assets/img/capitale/r17.png",
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
