// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminamos espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido."); // Validación de entrada vacía
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    input.value = ""; // Limpiar el campo de texto
    actualizarLista(); // Actualizar la lista en pantalla
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    // Ocultar la lista de amigos después de sortear
    document.getElementById("listaAmigos").innerHTML = "";
}



