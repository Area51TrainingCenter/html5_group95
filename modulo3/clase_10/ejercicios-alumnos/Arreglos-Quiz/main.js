/* 
  Ejercicio Quiz

  El ejercicio consiste en que debemos crear un pequeño quiz de 3 preguntas que el usuario debe de responder. Para este ejercicio debes hacer uso de arreglos y los metodos que se vieron en clase. No es obligatorio usar todos, solo usa lo que consideres conveniente.
  
  Los escenarios para el caso de que el usuario responda correctamente una, algunas o todas las preguntas:

    a. Si el usuario responde correctamente cualquier pregunta, la respuesta correcta debe de ir dentro de un arreglo nuevo.

    b. Si el usuario responde correctamente cualquier pregunta, debes de tener un contador que guarde el registro de respuestas correctas.

  Los mensajes que se mostrarán según la cantidad de respuestas correctamente respondidas son los siguientes:

    a. Si el usuario respondió las 3 preguntas correctamente, se le enviará un mensaje que debe de contener 

      a.1: Te has ganado la corona de oro
      a.2: La cantidad de respuestas que respondió correctamente: 3
      a.3: Las respuestas textuales que contesto correctamente

    b. Si el usuario respondió  2 preguntas correctamente, se le enviará un mensaje que debe de contener 

      b.1: Te has ganado la corona de pata
      b.2: La cantidad de respuestas que respondió correctamente: 2
      b.3: Las respuestas textuales que contesto correctamente

    c. Si el usuario menos de 2 preguntas correctamente, se le enviará un mensaje que debe de contener 

      b.1: Perdiste!
      b.2: La cantidad de respuestas que respondió correctamente: 0
      b.3: Las respuestas textuales que contesto correctamente: ninguna
    

  Pasos / Pistas que te ayudarán a armar el ejercicio

    1. Necesitarás prompts que guarden las respuestas que ingrese el usuario.
    2. Necesitarás un arreglo que agrupe y guarde la relación de lo que responde el usuario con las respuestas correctas
    3. Necesitarás un contador de respuestas correctas
    4. Necesitarás de hacer uso de un método propio de los arreglos que te permita empujar datos dentro de un arreglo vacio 


    Buena Suerte!
*/

var pregunta1 = prompt("¿Quien es el presidente de USA?");
var pregunta2 = prompt("¿Cuantas patas tiene una araña?");
var pregunta3 = prompt("¿Quien fue el primer hombre en el espacio?");

var respuestasCorrectas = 0;

if(pregunta1 === "Donald Trump") {
  respuestasCorrectas++;
} 

if (parseInt(pregunta2) === 8 ) {
  respuestasCorrectas++;
}

if(pregunta3 === "Yuri Gagarin") {
  respuestasCorrectas++;
} 

if(respuestasCorrectas === 3) {
  document.write("Te has ganado la corona de oro");
}else if(respuestasCorrectas === 2) {
  document.write("Te has ganado la corona de plata");
} else if(respuestasCorrectas < 2) {
  document.write("Perdiste!");
}