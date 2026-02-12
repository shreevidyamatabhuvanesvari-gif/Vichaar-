function speakText() {
  const text = document.getElementById("quoteInput").value;

  if (!text.trim()) {
    alert("पहले सुविचार लिखें");
    return;
  }

  const speech = new SpeechSynthesisUtterance(text);

  let voices = speechSynthesis.getVoices();

  let bestVoice =
    voices.find(v => v.name.toLowerCase().includes("female")) ||
    voices.find(v => v.lang === "hi-IN") ||
    voices[0];

  if(bestVoice){
    speech.voice = bestVoice;
  }

  speech.rate = 0.85;
  speech.pitch = 1.3;

  speechSynthesis.cancel();
  speechSynthesis.speak(speech);
}
