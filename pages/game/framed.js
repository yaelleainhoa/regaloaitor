

manches = []
let manchesNb = 9
for(let i =0; i<manchesNb; i++)
{
	let currentManche = [];
	for(let j = 0; j < 5; j++)
	{
		currentManche.push("../../assets/img/framed/manche"+String(i)+"-indice"+String(j)+".png")
	}
	manches.push(currentManche)
}


var mancheActuelle = 0

for(let i = 0; i < manchesNb ; i++)
	{
		this.document.getElementById("manche-select").innerHTML += '<option value='+i + '> Manche ' + String(i+1) + "</option>"
	}

document.getElementById("manche-select").addEventListener 
("change", function() 
	{
	var selectedValue = document.getElementById("manche-select").value;
	console.log(selectedValue)
	console.log("selected : "+selectedValue)
	mancheActuelle = selectedValue 
	document.getElementById("image").setAttribute("src", manches[mancheActuelle][0]) ;	
	}
)

function Afficher_image(id) {
	var imgIndex = id-1

	document.getElementById("image").setAttribute("src", manches[mancheActuelle][imgIndex]) ;
}

