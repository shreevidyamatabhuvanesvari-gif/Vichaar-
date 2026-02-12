/* =========================
   MULTICOLOR TEXT STYLE
========================= */

const textStyles = [
  "linear-gradient(90deg,#ffd700,#ff7f50,#ff1493)",
  "linear-gradient(90deg,#00ffff,#ffffff,#ff00ff)",
  "linear-gradient(90deg,#ffcc00,#ffffff)",
  "linear-gradient(90deg,#ff6ec7,#7366ff)",
  "linear-gradient(90deg,#ffffff,#ffd700,#00ffff)"
];

let styleIndex = 0;

function applyMultiColorText(){
  const el = document.getElementById("quotePreview");
  if(!el) return;

  styleIndex++;
  if(styleIndex >= textStyles.length) styleIndex = 0;

  el.style.background = textStyles[styleIndex];
  el.style.webkitBackgroundClip = "text";
  el.style.webkitTextFillColor = "transparent";
  el.style.fontWeight = "bold";
}


/* =========================
   PREMIUM WATERMARK
========================= */

window.addEventListener("load", function(){

  const wm = document.createElement("div");

  wm.innerText = "© ShriVidya " + new Date().getFullYear();

  wm.style.position = "fixed";
  wm.style.bottom = "8px";
  wm.style.width = "100%";
  wm.style.textAlign = "center";
  wm.style.fontSize = "15px";
  wm.style.fontWeight = "bold";
  wm.style.opacity = "0.75";
  wm.style.pointerEvents = "none";

  wm.style.background =
    "linear-gradient(90deg,#ffd700,#ff00ff,#00ffff,#ffffff,#ffd700)";
  wm.style.webkitBackgroundClip = "text";
  wm.style.webkitTextFillColor = "transparent";

  wm.style.textShadow =
    "0 0 6px rgba(255,215,0,0.5), 0 0 12px rgba(255,255,255,0.3)";

  document.body.appendChild(wm);

});
