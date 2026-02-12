let themeIndex = 0;

const themes = [
  "linear-gradient(135deg,#1a0026,#330066)",
  "linear-gradient(135deg,#3a2600,#806000)",
  "linear-gradient(135deg,#002626,#004d4d)",
  "linear-gradient(135deg,#1a1a1a,#333333)"
];

document.getElementById("imgInput").addEventListener("change", function(e){
  const file = e.target.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = function(){
    document.getElementById("previewImg").src = reader.result;
  };
  reader.readAsDataURL(file);
});

function applyPoster(){
  const text = document.getElementById("quoteInput").value;
  document.getElementById("textPanel").innerText = text;
}

function changeTheme(){
  themeIndex++;
  if(themeIndex >= themes.length) themeIndex = 0;
  document.body.style.background = themes[themeIndex];
}
