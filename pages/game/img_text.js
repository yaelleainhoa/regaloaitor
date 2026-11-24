images = []
texts = []
let manchesNb = 4
const bonnes_reponses = [
  // position=image, text=number [image0->text nb?]
  [2,0,4,1,3],
  [3,0,2,4,1],
  [1,4,0,2,3],
  [1,3,0,2,4],
];

texts = [
  ["Mero Mero no mi", "Goro goro no mi", "Kage Kage no mi", "Tori tori no mi", "Jiki jiki no mi"],
  ["Edouard Philippe", "Reconquête", "Rassemblement National", "Le parti d'Attal (qui a son nom même)", "Parti Socialiste"],
  ["1,03 M", "147k", "404k", "932k", "118k"],
  ["Ça me choque que Rima Hassan puisse être députée européenne et répandre le fiel. ", "« Est-ce que la corde est française ? »— A propos du suicide d'un agriculteur, juin 2021", "Est-ce qu’il va y avoir une extermination des Palestiniens ? Non [...] heureusement on n’en est pas là. [...] Le génocide pour moi ça signifie l'extermination. ", "Je vais transformer ton chien en kebab. ", "Le problème des urgences dans ce pays, c’est que c’est rempli de Mamadou."],
]
for(let i =0; i<manchesNb; i++)
{
  images.push(Array.from({ length: 5 }, (_, j) =>
    `../../assets/img/img_text/manche${i}/${j}.png`
  ));
}

currentManche = 0;


for(let i = 0; i < manchesNb ; i++)
	{
		this.document.getElementById("manche-select").innerHTML += '<option value='+i + '> Manche ' + String(i+1) + "</option>"
	}

document.getElementById("manche-select").addEventListener 
("change", function() 
	{
	var selectedValue = document.getElementById("manche-select").value;
	currentManche = selectedValue 
  clearManche()
  drawManche()
  resetMatches()
	}
)

const links = new Map(); // image index -> text index
let selectedImage = null;
let selectedText = null;

const imagesArea = document.getElementById("imagesToDrop");
const textsArea = document.getElementById("textsToLink");
const linksSvg = document.getElementById("linkLines");

function clearManche()
{
  imagesArea.innerHTML = '';
  textsArea.innerHTML = '';
}

function makeScene(index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "match-item image-item";
  card.id = `image-${index}`;
  card.setAttribute("aria-label", `Select scene image ${index + 1}`);

  const img = document.createElement("img");
  img.src = images[currentManche][index];
  img.alt = `Scene ${index + 1}`;
  img.className = "scene-image";

  card.appendChild(img);
  card.addEventListener("click", () => chooseImage(index));
  imagesArea.appendChild(card);
}

function makeText(index) {
  const card = document.createElement("div");
  card.className = "match-item text-item";
  card.id = `text-${index}`;

  const text = document.createElement("p");
  text.controls = true;
  text.preload = "none";
  text.textContent = texts[currentManche][index];
  text.className = "text-player";
  // text.addEventListener("click", (event) => event.stopPropagation());

  card.append(text);
  card.addEventListener("click", () => chooseText(index));
  textsArea.appendChild(card);
}

function chooseImage(index) {
  selectedImage = index;
  updateSelection();
  if (selectedText !== null) completeLink();
}

function chooseText(index) {
  selectedText = index;
  updateSelection();
  if (selectedImage !== null) completeLink();
}

function updateSelection() {
  document.querySelectorAll(".match-item").forEach(el => el.classList.remove("selected"));
  if (selectedImage !== null) document.getElementById(`image-${selectedImage}`)?.classList.add("selected");
  if (selectedText !== null) document.getElementById(`text-${selectedText}`)?.classList.add("selected");
  drawLinks();
}

function completeLink() {
  // Keep each image and each text in at most one match.
  for (const [imageIndex, textIndex] of links.entries()) {
    if (imageIndex === selectedImage || textIndex === selectedText) links.delete(imageIndex);
  }
  links.set(selectedImage, selectedText);
  selectedImage = null;
  selectedText = null;
  updateSelection();
}

function unlink(imageIndex) {
  links.delete(imageIndex);
  drawLinks();
}

function drawLinks() {
  linksSvg.innerHTML = "";
  const container = document.querySelector(".matching-board");
  if (!container) return;
  const boardRect = container.getBoundingClientRect();
  linksSvg.setAttribute("viewBox", `0 0 ${boardRect.width} ${boardRect.height}`);
  linksSvg.setAttribute("width", boardRect.width);
  linksSvg.setAttribute("height", boardRect.height);

  document.querySelectorAll(".match-item").forEach(el => el.classList.remove("matched"));
  for (const [imageIndex, textIndex] of links.entries()) {
    const imageEl = document.getElementById(`image-${imageIndex}`);
    const textEl = document.getElementById(`text-${textIndex}`);
    if (!imageEl || !textEl) continue;
    imageEl.classList.add("matched");
    textEl.classList.add("matched");

    const a = imageEl.getBoundingClientRect();
    const b = textEl.getBoundingClientRect();
    const x1 = a.right - boardRect.left;
    const y1 = a.top + a.height / 2 - boardRect.top;
    const x2 = b.left - boardRect.left;
    const y2 = b.top + b.height / 2 - boardRect.top;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("class", "match-line");
    linksSvg.appendChild(line);

    const cross = document.createElementNS("http://www.w3.org/2000/svg", "g");
    cross.setAttribute("class", "unlink-control");
    cross.setAttribute("transform", `translate(${(x1 + x2) / 2}, ${(y1 + y2) / 2})`);
    cross.setAttribute("role", "button");
    cross.setAttribute("tabindex", "0");
    cross.setAttribute("aria-label", "Undo this match");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "11");
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.textContent = "×";
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dy", "4");
    cross.append(circle, text);
    const undo = (event) => {
      event.stopPropagation();
      unlink(imageIndex);
    };
    cross.addEventListener("click", undo);
    cross.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") undo(event);
    });
    linksSvg.appendChild(cross);
  }
}

function resultat_final() {
  for (let i = 0; i < images[currentManche].length; i++) {
    const card = document.getElementById(`image-${i}`);
    card.classList.remove("correct", "incorrect");
    card.classList.add(links.get(i) === bonnes_reponses[currentManche][i] ? "correct" : "incorrect");
  }
}

function resetMatches() {
  links.clear();
  selectedImage = null;
  selectedText = null;
  document.querySelectorAll(".match-item").forEach(el => el.classList.remove("selected", "matched", "correct", "incorrect"));
  drawLinks();
}

function drawManche(){
  images[currentManche].forEach((_, i) => makeScene(i));
  texts[currentManche].forEach((_, i) => makeText(i));
  window.addEventListener("resize", drawLinks);
  window.addEventListener("load", drawLinks);
}

drawManche()
