/* =========================
   ANIMATED MULTICOLOR TEXT
========================= */

const textStyles = [

  "linear-gradient(90deg,#ffd700,#fff5a0,#ffd700)",
  "linear-gradient(90deg,#ff6ec7,#7366ff,#ff6ec7)",
  "linear-gradient(90deg,#00ffff,#ffffff,#00aaff)",
  "linear-gradient(90deg,#ff8c00,#ffd700,#ff4500)",
  "linear-gradient(90deg,#ffffff,#ffd700,#ff00ff,#00ffff)",
  "linear-gradient(90deg,#ff512f,#f09819)",
  "linear-gradient(90deg,#e0c3fc,#8ec5fc)",
  "linear-gradient(90deg,#5f2c82,#49a09d)",
  "linear-gradient(90deg,#fff8dc,#ffd700,#fff8dc)",
  "linear-gradient(90deg,#ff0000,#ffa500,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff)"

];

let styleIndex = 0;

function applyMultiColorText(){
  const el = document.getElementById("quotePreview");
  if(!el) return;

  styleIndex++;
  if(styleIndex >= textStyles.length) styleIndex = 0;

  el.style.background = textStyles[styleIndex];
  el.style.backgroundSize = "300% 300%";
  el.style.webkitBackgroundClip = "text";
  el.style.webkitTextFillColor = "transparent";
  el.style.fontWeight = "bold";

  // Animation
  el.style.animation = "gradientMove 6s linear infinite";
}

/* CSS animation dynamically add */
const style = document.createElement("style");
style.innerHTML = `
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;
document.head.appendChild(style);


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
  wm.style.backgroundSize = "300% 300%";
  wm.style.webkitBackgroundClip = "text";
  wm.style.webkitTextFillColor = "transparent";

  wm.style.animation = "gradientMove 8s linear infinite";

  wm.style.textShadow =
    "0 0 6px rgba(255,215,0,0.5), 0 0 12px rgba(255,255,255,0.3)";

  document.body.appendChild(wm);

});
