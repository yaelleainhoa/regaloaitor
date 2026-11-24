var questions_reponses = [
	["¿Cuál es el nombre real de Sylar antes de adoptar su apodo?",
		["Gabriel Gray", "Gabriel Sullivan", "Arthur Gray", "Silas Gray"]],
	["¿Cuál es el nombre de la empresa fachada para la que trabaja Noah Bennet en la primera temporada?",
		["Primatech Paper", "Primatech Genetics", "Primatech Shipping", "Primatech Plastics"]],
	["¿Qué cargo político ocupa Nathan Petrelli en el futuro alternativo de «Five Years Gone»?",
		["Presidente de los Estados Unidos", "Senador de Nueva York", "Gobernador de Nueva York", "Director de La Compañía"]],
	["¿Cómo se llama la organización rival de Primatech, fundada por Arthur Petrelli?",
		["Pinehearst", "Level 5", "The Company", "Genesis Corp"]],
	["¿En qué nivel de Primatech están confinados los humanos evolucionados más peligrosos?",
		["Nivel 5", "Nivel 3", "El Sótano", "Celda Omega"]],
	["¿Cuál era la profesión de Gabriel Gray antes de descubrir sus habilidades?",
		["Relojero", "Profesor de física", "Vendedor de seguros", "Mecánico"]],
	["¿Cuál es el nombre del virus diseñado para erradicar a los humanos con habilidades?",
		["Virus Shanti", "Virus Prometheus", "Virus Genesis", "Virus Petrelli"]],
	["¿Qué personaje puede localizar a cualquier persona en el mundo simplemente pensando en ella?",
		["Molly Walker", "Maya Herrera", "Monica Dawson", "Micah Sanders"]],
	["¿Quién es la primera víctima que se muestra en pantalla asesinada por Sylar en el episodio piloto?",
		["Chandra Suresh", "Charlie Andrews", "Isaac Mendez", "El padre de Molly Walker"]],
	["¿Qué poder posee Maya Herrera en la segunda temporada?",
		["Generación de gas venenoso al llorar", "Manipulación del tiempo", "Control de la tecnología", "Intangibilidad"]],
	["¿Cómo se llama la organización secreta fundada por 12 personas para contener a los humanos evolucionados?",
		["La Compañía (The Company)", "El Sindicato", "Iniciativa Pinehearst", "Primatech Global"]],
	["¿En qué ciudad reside originalmente la familia Bennet (Claire y Noah) al inicio de la serie?",
		["Odessa, Texas", "Austin, Texas", "Dallas, Texas", "Houston, Texas"]],
	["¿Qué significa «¡Yatta!», el grito de Hiro cuando logra algo?",
		["¡Lo logré!", "¡Vamos!", "¡Cuidado!", "¡Es hora de irse!"]],
	["¿A qué se dedicaba Peter Petrelli al comienzo de la serie?",
		["Enfermero", "Policía", "Político", "Pintor"]],
	["¿Qué icónico personaje interpretó Zachary Quinto (Sylar) en la película Star Trek de 2009?",
		["Spock", "El Capitán Kirk", "Hikaru Sulu", "Dr. McCoy"]],
	["¿En qué año se estrenó la serie Heroes?",
		["2006", "2004", "2005", "2007"]],
	["¿Qué actor interpretó a Kaito Nakamura, el padre de Hiro?",
		["George Takei", "Pat Morita", "Ken Watanabe", "Hiroyuki Sanada"]]
];



var id = 0;
var test = "";
document.getElementById("previous").style.backgroundColor = "transparent";
document.getElementById("previous").style.color = "transparent";

document.getElementById("next").style.backgroundColor = "#668c6f";
document.getElementById("next").style.color = "white";

/* Navigation entre les questions */

	function raz() {
	if(id === questions_reponses.length - 1) {
		document.getElementById("next").style.backgroundColor = "transparent";
		document.getElementById("next").style.color = "transparent";}
	else {
		document.getElementById("next").style.backgroundColor = "#668c6f";
		document.getElementById("next").style.color = "#fff";}

	document.getElementById("idduo").style.display="flex";
	document.getElementById("idcarre").style.display="flex";
	document.getElementById("idcash").style.display="flex";
	document.getElementById("duo").style.display="none";
	document.getElementById("carre").style.display="none";
	document.getElementById("cash").style.display="none";

	for (var i = 0 ; i < 2 ; i ++ ) {
		var Elt = "duo0" + i;
		document.getElementById(Elt).style.backgroundColor = "#E3D9CF";
		document.getElementById(Elt).style.boxShadow="0px 0px 0px";
	}

	for (var i = 0 ; i < 4 ; i ++ ) {
		var EltC = "car0" + i;
		document.getElementById(EltC).style.backgroundColor = "#E3D9CF";
		document.getElementById(EltC).style.boxShadow="0px 0px 0px";
	}

	document.getElementById("cas00").textContent = "Quelle est votre réponse ?";
	document.getElementById("cas00").style.backgroundColor = "#E3D9CF";
	document.getElementById("cas00").style.boxShadow="0px 0px 0px";
	}
	function precedent () {
		id--;
		raz();
		afficher_question();}

	function suivant () {
		id++;
		raz();
		afficher_question();}

	function afficher_question() {
		console.log(questions_reponses, id)
		document.getElementById("question").textContent = questions_reponses[id][0];
	}
/* Duo, carré ou Cash */

	function carre_gen() {
		var ord = [0, 1, 2, 3];
		var prop = [-1, -1, -1, -1];
		for (var j = 0 ; j < ord.length ; j ++ )
		{
			var Elt = Math.floor(Math.random() * (4));
			while (prop[Elt] >=0 ) {Elt = Math.floor(Math.random() * (4));}
			prop[Elt] = ord[j];
		};
		return prop;}

	function duo_gen() {
		var ord = [0, 1];
		var prop = [-1, -1];
		for (var j = 0 ; j < ord.length ; j ++ )
		{
			var Elt = Math.floor(Math.random() * (2));
			while (prop[Elt] >=0 ) {Elt = Math.floor(Math.random() * (2));}
			prop[Elt] = ord[j];
		}
		return prop;
		}


	function duo() {
		document.getElementById("idduo").style.display="none";
		document.getElementById("idcarre").style.display="none";
		document.getElementById("idcash").style.display="none";
		document.getElementById("duo").style.display="flex";
		/* Gestion aléatoire des indices du tableau*/
			var res = duo_gen();
			for (var j = 0 ; j < 2 ; j ++) {
				var resid = "duo0" + j ; 
				var k = res[j];
				document.getElementById(resid).textContent = questions_reponses[id][1][k];
				if (res[j] === 0) {document.getElementById(resid).setAttribute("name","bonne-réponse");}
				else {document.getElementById(resid).setAttribute("name"," ");}
		}	
		test = "duo";
	}

	function carre() {
		document.getElementById("idduo").style.display="none";
		document.getElementById("idcarre").style.display="none";
		document.getElementById("idcash").style.display="none";
		document.getElementById("carre").style.display="flex";
		/* Gestion aléatoire des indices du tableau*/
			var res = carre_gen();
			for (var j = 0 ; j < 4 ; j ++) {
			var resid = "car0" + j ; 
			var k = res[j];
			document.getElementById(resid).textContent = questions_reponses[id][1][k];;
			if (res[j] === 0) {document.getElementById(resid).setAttribute("name","bonne-réponse");}
			else {document.getElementById(resid).setAttribute("name"," ");}
		}
		test = "car";	
	}

	function cash() {
		document.getElementById("idduo").style.display="none";
		document.getElementById("idcarre").style.display="none";
		document.getElementById("idcash").style.display="none";
		document.getElementById("cash").style.display="flex";
		test = "cas";
		}

/* Afficher les résultats */

	function resultatcash() {
		var reponse ="";
		var mauvaiseReponse = "";
		document.getElementById("cas00").textContent = questions_reponses[id][1][0];
		document.getElementById("cas00").style.backgroundColor = "#45C49C";
		document.getElementById("cas00").style.boxShadow="5px 5px 10px";
	}


	function resultat(clicked_id) 
		{	
			var EltListe = document.querySelectorAll('[name="bonne-réponse"]');
			var bonneReponse = "";

			if (document.getElementById(clicked_id).textContent === questions_reponses[id][1][0]) 
					{document.getElementById(clicked_id).style.backgroundColor = "#45C49C";
					document.getElementById(clicked_id).style.boxShadow="5px 5px 10px";}
			

			else {
				if (EltListe.length <= 1 )
					{
						bonneReponse = EltListe[0].id;
					}

				else 
					{
					var Elt0 = EltListe[0].getAttribute('id');
					var Elt1 = EltListe[1].getAttribute('id');
					if (test === Elt0.substr(0,3)) {bonneReponse = Elt0;}
					else {bonneReponse = Elt1;}
					}
				document.getElementById(clicked_id).style.backgroundColor = "#FF776B";
				document.getElementById(clicked_id).style.boxShadow="5px 5px 10px";
				document.getElementById(bonneReponse).style.boxShadow="5px 5px 10px";
				document.getElementById(bonneReponse).style.backgroundColor = "#45C49C";

			}
		}		

afficher_question()