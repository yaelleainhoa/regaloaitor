images = []
sounds = []
let manchesNb = 8
const bonnes_reponses = [
  // position=image, sound=number [image0->sound nb?]
  // [0,1,2,3,4],
  [3, 2, 1, 0, 4], 
  [2, 4, 0, 3, 1],
  [3, 1, 0, 4, 2],
  [1, 0, 4, 3, 2],
  [3, 4, 2, 0, 1],
  [3, 2, 0, 1, 4],
  [4, 3, 2, 0, 1],
  [4, 0, 2, 3, 1],
];
for(let i =0; i<manchesNb; i++)
{
  images.push(Array.from({ length: 5 }, (_, j) =>
    `../../assets/img/sound_scene/manche${i}/${j}.png`
  ));

  sounds.push(Array.from({ length: 5 }, (_, j) =>
    `../../assets/sound/sound_scene/manche${i}/${j}.mp3`
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

const links = new Map(); // image index -> sound index
let selectedImage = null;
let selectedSound = null;

const imagesArea = document.getElementById("imagesToDrop");
const soundsArea = document.getElementById("soundsToLink");
const linksSvg = document.getElementById("linkLines");

function clearManche()
{
  imagesArea.innerHTML = '';
  soundsArea.innerHTML = '';
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

function makeSound(index) {
  const card = document.createElement("div");
  card.className = "match-item sound-item";
  card.id = `sound-${index}`;

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.preload = "none";
  audio.src = sounds[currentManche][index];
  audio.className = "sound-player";
  audio.addEventListener("click", (event) => event.stopPropagation());

  card.append(audio);
  card.addEventListener("click", () => chooseSound(index));
  soundsArea.appendChild(card);
}

function chooseImage(index) {
  selectedImage = index;
  updateSelection();
  if (selectedSound !== null) completeLink();
}

function chooseSound(index) {
  selectedSound = index;
  updateSelection();
  if (selectedImage !== null) completeLink();
}

function updateSelection() {
  document.querySelectorAll(".match-item").forEach(el => el.classList.remove("selected"));
  if (selectedImage !== null) document.getElementById(`image-${selectedImage}`)?.classList.add("selected");
  if (selectedSound !== null) document.getElementById(`sound-${selectedSound}`)?.classList.add("selected");
  drawLinks();
}

function completeLink() {
  // Keep each image and each sound in at most one match.
  for (const [imageIndex, soundIndex] of links.entries()) {
    if (imageIndex === selectedImage || soundIndex === selectedSound) links.delete(imageIndex);
  }
  links.set(selectedImage, selectedSound);
  selectedImage = null;
  selectedSound = null;
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
  for (const [imageIndex, soundIndex] of links.entries()) {
    const imageEl = document.getElementById(`image-${imageIndex}`);
    const soundEl = document.getElementById(`sound-${soundIndex}`);
    if (!imageEl || !soundEl) continue;
    imageEl.classList.add("matched");
    soundEl.classList.add("matched");

    const a = imageEl.getBoundingClientRect();
    const b = soundEl.getBoundingClientRect();
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
  selectedSound = null;
  document.querySelectorAll(".match-item").forEach(el => el.classList.remove("selected", "matched", "correct", "incorrect"));
  drawLinks();
}

function drawManche(){
  images[currentManche].forEach((_, i) => makeScene(i));
  sounds[currentManche].forEach((_, i) => makeSound(i));
  window.addEventListener("resize", drawLinks);
  window.addEventListener("load", drawLinks);
}

drawManche()
