/* 
  Ejercicio Quiz

  El ejercicio consiste en que debemos crear un pequeño quiz de 5 preguntas que el usuario debe de responder. Si el usuario responde las 5 preguntas correactamente se le mostrará un mensaje que dirá que se ganó la corona de oro, si responde 3 preguntas se le mostrará un mensaje diciendole que ganó la corona de plata y si responde menos de 3 preguntas se le mostrará un mensaje donde perdió.

  Crea el programa usando funciones y lo has aprendido hasta ahora.
*/

var divColor = '';
var rojo, verde, azul, colorRGB;


// Resolviendo el ejercicio con ciclos

for( var i = 1; i <= 100; i++ ){
	rojo = Math.floor(Math.random() * 256);
	verde = Math.floor(Math.random() * 256);
	azul = Math.floor(Math.random() * 256);
	colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
	divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';
}

document.write(divColor);