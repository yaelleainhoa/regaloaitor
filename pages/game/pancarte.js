var images = [
	"../../assets/img/pancarte/r0 question.png",
	"../../assets/img/pancarte/r0.png",
	"../../assets/img/pancarte/r1 question.png",
	"../../assets/img/pancarte/r1.png",
	"../../assets/img/pancarte/r2 question.png",
	"../../assets/img/pancarte/r2.png",
	"../../assets/img/pancarte/r3 question.png",
	"../../assets/img/pancarte/r3.png",
	"../../assets/img/pancarte/r4 question.png",
	"../../assets/img/pancarte/r4.png",
	"../../assets/img/pancarte/r5 question.png",
	"../../assets/img/pancarte/r5.png",
	"../../assets/img/pancarte/r6 question.png",
	"../../assets/img/pancarte/r6.png",
	"../../assets/img/pancarte/r7 question.png",
	"../../assets/img/pancarte/r7.png",
	"../../assets/img/pancarte/r8 question.png",
	"../../assets/img/pancarte/r8.png",
	"../../assets/img/pancarte/r9 question.png",
	"../../assets/img/pancarte/r9.png",
	"../../assets/img/pancarte/r10 question.png",
	"../../assets/img/pancarte/r10.png",
	"../../assets/img/pancarte/r11 question.png",
	"../../assets/img/pancarte/r11.png",
	"../../assets/img/pancarte/r12 question.png",
	"../../assets/img/pancarte/r12.png",
	"../../assets/img/pancarte/r13 question.png",
	"../../assets/img/pancarte/r13.png",
	"../../assets/img/pancarte/r14 question.png",
	"../../assets/img/pancarte/r14.png",
	"../../assets/img/pancarte/r15 question.png",
	"../../assets/img/pancarte/r15.png",
	"../../assets/img/pancarte/r16 question.png",
	"../../assets/img/pancarte/r16.png",
	"../../assets/img/pancarte/r17 question.png",
	"../../assets/img/pancarte/r17.png",
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
