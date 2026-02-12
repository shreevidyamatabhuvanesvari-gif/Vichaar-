/* MULTICOLOR TEXT STYLE ENGINE */

const textStyles = [
  "linear-gradient(90deg,#ffd700,#ff7f50,#ff1493)",   // gold-pink
  "linear-gradient(90deg,#00ffff,#ffffff,#ff00ff)",   // cyan mix
  "linear-gradient(90deg,#ffcc00,#ffffff)",           // soft gold
  "linear-gradient(90deg,#ff6ec7,#7366ff)",           // pink-purple
  "linear-gradient(90deg,#ffffff,#ffd700,#00ffff)"    // premium mix
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
/* COPYRIGHT TEXT AUTO ADD */

window.addEventListener("load", function(){

  const copy = document.createElement("div");

  copy.innerText = "© ShriVidya " + new Date().getFullYear();

  copy.style.position = "fixed";
  copy.style.bottom = "6px";
  copy.style.width = "100%";
  copy.style.textAlign = "center";
  copy.style.fontSize = "14px";
  copy.style.opacity = "0.8";
  copy.style.color = "#ffffff";

  document.body.appendChild(copy);

});
