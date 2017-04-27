var tareasJason = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }];

 for (var i = 0; i < 10; i++) {
	document.write('<ul> <li> ' + tareasJason[i].title + '</li></ul>');
};

var btnadd = document.getElementById('agregartarea');
var tareaInput = document.getElementById('listatareas');

btnadd.addEventListener("click",agregarTarea);

var agregarTarea = function (){
	var tarea = tareaInput.value;


}

function Tareas(tarea) {
  this.tarea = tarea;
  this.tareaID = (tareitas.length + 1);
};

//var eleiminarTarea = function(){}

/*function addToDo(){
	var input = document.getElementById("toDo");

	var agregarTarea = document.getElementsByClassName("list");

	agregarTarea[0].innerHTML += input.value +"<br>";

	input.value = "";
}



/*var tareitas = [];
var records = document.getElementById('records');
//var input = document.getElementById("toDo");
// Constructor para generar una nueva tarea


// Cuando hacen click en el boton Add, crea una nueva tarea y la añade al array de tareitas
var addtarea = document.getElementById('toDoList');
addtarea.onclick = function() {
	var tarea = document.getElementById("toDo");
  var nuevatarea  = new Tareas (tarea);
  tareitas.push(nuevatarea);
  
	//Tareas.innerHTML += tarea.value + "<br>";
	//tarea.value = "";

};


Tareas.prototype.toHTML = function () {
  var html = '';
  html += this.tarea + '<br>';
  
  return html;
}

function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}
*/

