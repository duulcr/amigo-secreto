const inputName = document.getElementById("inputName");
const addButton = document.getElementById("addButton");
const friendsList = document.getElementById("friendsList");
const sortButton = document.getElementById("sortButton");
const result = document.getElementById("result");

let friends = [];  // Aquí almacenamos los nombres de los amigos

// Función para agregar amigos a la lista
addButton.addEventListener("click", function () {
  const name = inputName.value.trim();  // Obtiene el valor del campo de texto

  if (name === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;  // Si el campo está vacío, no hacemos nada más
  }

  friends.push(name);  // Agrega el nombre a la lista de amigos
  inputName.value = "";  // Limpia el campo de texto
  renderFriends();  // Actualiza la lista visible en la página
});

// Función para renderizar la lista de amigos en la página
function renderFriends() {
  friendsList.innerHTML = "";  // Limpia la lista actual de amigos

  // Añade cada amigo de la lista al HTML
  friends.forEach(function (friend) {
    const li = document.createElement("li");
    li.textContent = friend;
    friendsList.appendChild(li);
  });
}

// Función para realizar el sorteo
sortButton.addEventListener("click", function () {
  // Aquí verificamos si la lista de amigos está vacía
  if (friends.length === 0) {
    alert("No hay amigos en la lista. Agrega algunos primero.");
    return;  // Si la lista está vacía, no hacemos el sorteo
  }

  // Si hay amigos en la lista, realizamos el sorteo
  const randomIndex = Math.floor(Math.random() * friends.length);  // Selecciona un índice aleatorio
  const friend = friends[randomIndex];  // Obtiene el amigo seleccionado
  result.textContent = `El amigo secreto es: ${friend}`;  // Muestra el resultado en la página
});
