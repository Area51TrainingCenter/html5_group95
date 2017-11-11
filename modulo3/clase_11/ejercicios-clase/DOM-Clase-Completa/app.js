// DOM: Document Object Model
/* Existen 3 concepto que hacen un sitio o aplicacion web interactiva

	Seleccion del elemento 
	Manipulacion del elemento	
	Escuchar accciones del usuario
*/

// Seleccion de elementos con el DOM

var heading = document.getElementById("myHeading");
var description = document.getElementsByClassName("description");
var li = document.getElementsByTagName("li");

document.querySelector("#myHeading");
document.querySelector(".description");
document.querySelector("li");
document.querySelector("li:first-child");
document.querySelector("input[type='text']");

document.querySelectorAll("li");

var descriptionArray = Array.from(description);
console.log(descriptionArray);

// Manipulacion de contenido de elementos con JavaScript

console.log(document.all);

heading.innerHTML = "hola estoy cambiando el contenido de este h1";
heading.textContent = "Hola estoy cambiando el contenido de este h1"

var input2 = document.querySelector("input.description");
var parrafo = document.querySelector("p.description");

parrafo.innerHTML = input2.value;

console.log(input2.value);

// Manipulacion de Atributos

console.log(input2.type);

input2.type = "checkbox";

console.log("La clase del input es:", input2.className);
/*
input2.className = "nueva-clase";

input2.className = input2.className + " nueva-clase";

input2.className += " nueva-clase";
*/

console.log(input2.classList);
input2.classList.add("nueva-clase");
input2.classList.add("nueva-clase");

input2.setAttribute("name", "usuario");


// Estilizando Elementos

parrafo.style.backgroundColor = "red";

// Creando Nuevos Elementos

var div = document.createElement("div");
div.innerHTML = input2.value;

// Anidando Elementos

var ultimoLi = document.querySelector("li:last-child");
ultimoLi.appendChild(div);
ultimoLi.prepend(div);

// Eliminando Elementos

var primerLI = document.querySelector("li:first-child");
var ul = document.querySelector("ul");

ul.removeChild(primerLI);
