let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0a0a23;">Diseñadora web y Artista Digital.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
