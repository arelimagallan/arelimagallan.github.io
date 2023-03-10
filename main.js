let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString( '<span style="color:#8b365f;"> Desarrollando sitios web con enfoque al analisis de datos. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
