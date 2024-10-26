images  = [
	"../../assets/img/exs/0.png", //0
	"../../assets/img/exs/1.png", //1
	"../../assets/img/exs/2.png", //2
	"../../assets/img/exs/3.png", //3
	"../../assets/img/exs/4.png", //4
	"../../assets/img/exs/5.png", //5
	"../../assets/img/exs/6.png", //6
	"../../assets/img/exs/7.png", //8
	"../../assets/img/exs/8.png", //9
	"../../assets/img/exs/9.png", //10
	
]

images_reponse  = [
	"../../assets/img/exs/10.png", //0
	"../../assets/img/exs/11.png", //1
	"../../assets/img/exs/12.png", //2
	"../../assets/img/exs/13.png", //3
	"../../assets/img/exs/14.png", //4
	"../../assets/img/exs/15.png", //5
	"../../assets/img/exs/16.png", //6
	"../../assets/img/exs/17.png", //8
	"../../assets/img/exs/18.png", //9
	"../../assets/img/exs/19.png", //10
	
]

reponses = [
	"Camille Cottin", 
	"François Civil",
	"Jérôme Niel",
	"JP Zadi",
	"Omar Sy",
	"Orelsan", 
	"Romain Frayssinet", 
	"Soso Maness", 
	"Squeezie", 
	"Eric Judor", 
]

bonnes_reponses = [
	
	"Jérôme Niel",
	"Squeezie", 
	"Soso Maness", 
	"Camille Cottin", 
	"Omar Sy", 
	"JP Zadi",
	"François Civil", 
	"Romain Frayssinet", 
	"Orelsan", 
	"Eric Judor", 
]

score  = [
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",

] 

function setFunctionsAndCurves(){
	var imagesToDropArea = document.getElementById("imagesToDrop");
	var textsToDragArea = document.getElementById("textsToDrag");
	for (let i = 0 ; i < reponses.length ; i++)
	{
		console.log(i);
		var imageToDropArea = document.createElement("div");
		var imageToDropImg = document.createElement("img");
		imageToDropImg.classList.add("image");
		imageToDropImg.setAttribute("src", images[i]);
		imageToDropImg.setAttribute("id", i);
		imageToDropImg.addEventListener("click", function() {
			if (this.requestFullscreen) {
			  this.requestFullscreen();
			} else if (this.msRequestFullscreen) {
			  this.msRequestFullscreen();
			} else if (this.mozRequestFullScreen) {
			  this.mozRequestFullScreen();
			} else if (this.webkitRequestFullscreen) {
			  this.webkitRequestFullscreen();
			}
		  });
		imageToDropArea.setAttribute("id", "prop"+i);
		imageToDropArea.setAttribute("ondrop", "dragDrop(event)");
		imageToDropArea.setAttribute("ondragover", "allowDrop(event)");
		imageToDropArea.classList.add("imageToDrop");
		imageToDropArea.appendChild(imageToDropImg);

		imagesToDropArea.appendChild(imageToDropArea);

		var textToDragArea = document.createElement("div");
		textToDragArea.innerText = reponses[i];
		textToDragArea.setAttribute("id","drag"+i);
		textToDragArea.setAttribute("ondrop","dragDrop(event)");
		textToDragArea.setAttribute("ondragover","allowDrop(event)");
		textToDragArea.setAttribute("draggable","true");
		textToDragArea.setAttribute("ondragstart","dragStart(event)");
		textToDragArea.classList.add("textToDrag");
		textToDragArea.classList.add("draggable");

		textsToDragArea.appendChild(textToDragArea);
	}
}

setFunctionsAndCurves();

var reponse_select = ""
var image_selectionne = 10
var indice = 0

function allowDrop(ev) {
	ev.preventDefault();
}
function dragStart(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function dragDrop(ev) {
	ev.preventDefault();

	reponse_select = ev.target.id
	indice = reponse_select.substr(-1)

	if(reponse_select)
	{
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
		ev.target.style.paddingBottom = "5px";
	}

	textToDrag_selected = document.getElementById(data).innerText;
	score[indice] = textToDrag_selected
	
}


function resultat_final()
{
	var carreau = ""

	for (let i = 0 ; i < reponses.length ; i++) 
	{
		console.log(document.getElementById(i).src)
		document.getElementById(i).src =  images_reponse[i];
		console.log(document.getElementById(i).src)
		if (bonnes_reponses[i] == score[i]) 
		{
			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#C6E5BA"
		}

		else 
		{
			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#FF6961"

			var goodAnswer = document.createElement("div");
			goodAnswer.innerText = bonnes_reponses[i];
			goodAnswer.classList.add("textToDrag");
			goodAnswer.style.color="white";
			document.getElementById(carreau).appendChild(goodAnswer);
		}
		
	}
}