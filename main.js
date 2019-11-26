const ctx = new AudioContext();
let audio;

fetch("./music.mp3")
  .then(data => data.arrayBuffer())
  .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
  .then(decodedAudio => {
    audio = decodedAudio;
  });

  function play() {
      const playSound = ctx.createBufferSource();
      playSound.buffer = audio;
      playSound.connect(ctx.destination);
      playSound.start(ctx.currentTime);
  }

  window.addEventListener("mousedown", play)