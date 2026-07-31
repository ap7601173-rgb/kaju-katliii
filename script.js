const screens = ["start","hello","reward","question","response","inventory","item","inbox","letter","loading","final"];

function show(id) {
  screens.forEach(s => document.getElementById(s).classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function startGame() {
  show("hello");
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  const parent = btn.parentElement;
  if (!btn.classList.contains("moving")) {
    btn.classList.add("moving");
    btn.style.position = "relative";
  }
  btn.style.transform = `translate(${Math.random()*170-85}px, ${Math.random()*90-45}px)`;
  document.getElementById("helloFace").style.transform =
    `translateY(${Math.random()*4-2}px)`;
}

function showReward() {
  show("reward");
}

function showQuestion() {
  show("question");
}

function answerQuestion(answer) {
  const text = document.getElementById("responseText");
  if (answer === "not") {
    text.textContent = "Only maybe? I'll have to remind you every day.";
  } else if (answer === "maybe") {
    text.textContent = "Only maybe? I'll have to remind you every day.";
  } else {
    text.textContent = "That's more like it! You really are amazing.";
  }
  show("response");
  setTimeout(() => show("inventory"), 1800);
}

function openItem(item) {
  if (item === "flowers") {
    document.getElementById("itemTitle").textContent = "♥ flowers.exe";
    document.getElementById("itemBody").innerHTML =
      `<div class="item-art">🌷</div><div class="item-text">For you ♥</div>
       <button class="red-button back" onclick="show('inventory')">BACK</button>`;
    show("item");
  }
  if (item === "hugs") {
    document.getElementById("itemTitle").textContent = "♥ hugs.exe";
    document.getElementById("itemBody").innerHTML =
      `<div class="item-art">🫂</div><div class="item-text">Sending you the biggest hug ♥</div>
       <button class="red-button back" onclick="show('inventory')">BACK</button>`;
    show("item");
  }
  if (item === "letter") show("inbox");
}

function openLetter() {
  show("letter");
}

function finishGame() {
  show("loading");
  setTimeout(() => show("final"), 1700);
}
