function saludo() {
    alert("🔥 ¡Empieza tu cambio hoy!");
}

function enviar() {
    let nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Escribe tu nombre");
    } else {
        alert("Gracias " + nombre + " 💪");
    }
}

function verRutina(tipo) {
    if (tipo === "fuerza") {
        alert("Rutina: Press banca, sentadilla, peso muerto");
    } else if (tipo === "cardio") {
        alert("Rutina: Correr 20 min + bici");
    } else {
        alert("Rutina: Burpees, saltos, sprints");
    }
}