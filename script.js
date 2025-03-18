// Obtenemos los elementos del DOM
const addButton = document.getElementById('addButton');
const inputName = document.getElementById('inputName');
const friendsList = document.getElementById('friendsList');
const sortButton = document.getElementById('sortButton');
const resultDiv = document.getElementById('result');

let friends = [];  // Array que almacenará los nombres de los amigos

// Función para adicionar un nombre a la lista
addButton.addEventListener('click', function() {
  const name = inputName.value.trim();

  if (name === '') {
    // Si el campo está vacío, mostramos una alerta
    alert('Por favor, ingresa un nombre válido.');
  } else {
    // Si el nombre es válido, lo agregamos a la lista
    friends.push(name);

    // Mostramos el nombre en la lista de la página
    const listItem = document.createElement('li');
    listItem.textContent = name;
    friendsList.appendChild(listItem);

    // Limpiamos el campo de texto
    inputName.value = '';
  }
});

// Función para realizar el sorteo del amigo secreto
sortButton.addEventListener('click', function() {
  if (friends.length === 0) {
    // Si no hay nombres en la lista, mostramos una alerta
    alert('No hay amigos en la lista para sortear.');
  } else {
    // Seleccionamos un nombre aleatorio
    const randomIndex = Math.floor(Math.random() * friends.length);
    const winner = friends[randomIndex];

    // Mostramos el ganador en el resultado
    resultDiv.textContent = `El amigo secreto es: ${winner}`;
  }
});
