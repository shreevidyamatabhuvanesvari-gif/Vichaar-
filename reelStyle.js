/* =========================
   MULTICOLOR TEXT STYLE
========================= */

const textStyles = [

  // Gold Premium
  "linear-gradient(90deg,#ffd700,#fff5a0,#ffd700)",

  // Pink – Purple
  "linear-gradient(90deg,#ff6ec7,#7366ff,#ff6ec7)",

  // Cyan – White – Blue
  "linear-gradient(90deg,#00ffff,#ffffff,#00aaff)",

  // Orange – Gold – Red
  "linear-gradient(90deg,#ff8c00,#ffd700,#ff4500)",

  // Spiritual mix
  "linear-gradient(90deg,#ffffff,#ffd700,#ff00ff,#00ffff)",

  // Sunset tone
  "linear-gradient(90deg,#ff512f,#f09819)",

  // Soft divine
  "linear-gradient(90deg,#e0c3fc,#8ec5fc)",

  // Deep royal
  "linear-gradient(90deg,#5f2c82,#49a09d)",

  // Gold glow
  "linear-gradient(90deg,#fff8dc,#ffd700,#fff8dc)",

  // Rainbow premium
  "linear-gradient(90deg,#ff0000,#ffa500,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff)"
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
