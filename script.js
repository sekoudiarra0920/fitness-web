function abrirModal(contenidoHtml) {
    const modal = document.getElementById("miModal");
    const body = document.getElementById("modal-body");
    body.innerHTML = contenidoHtml; // Inyectamos el texto o iconos
    modal.style.display = "block";
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}

// Actualizamos las funciones para usar el Modal
function saludo() {
    abrirModal(`
        <h2 style="color:#00ff88">¡Hola Guerrero!</h2>
        <p>Tu transformación comienza hoy mismo en Fitness Pro.</p>
    `);
}

function verRutina(tipo) {
    let titulo = "";
    let lista = "";

    if (tipo === 'fuerza') {
        titulo = "🏋️ Plan Fuerza";
        lista = "<li>Press Banca: 4x8</li><li>Sentadilla: 4x10</li><li>Peso Muerto: 3x5</li>";
    } else if (tipo === 'cardio') {
        titulo = "🏃 Plan Cardio";
        lista = "<li>Carrera: 20 min</li><li>Sprints: 5 series</li><li>Bici: 10 min</li>";
    } else {
        titulo = "🔥 Plan HIIT";
        lista = "<li>Burpees: 45s</li><li>Saltos: 45s</li><li>Descanso: 15s</li>";
    }

    abrirModal(`
        <h2 style="color:#00ff88">${titulo}</h2>
        <ul style="text-align:left; display:inline-block;">${lista}</ul>
    `);
}

// Cerrar si hacen clic fuera de la ventana
window.onclick = function(event) {
    let modal = document.getElementById("miModal");
    if (event.target == modal) { cerrarModal(); }
}
function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if (nombre === "" || email === "") {
        abrirModal(`
            <h2 style="color:#ff4444">⚠️ Error</h2>
            <p>Por favor, rellena todos los campos para poder ayudarte.</p>
        `);
    } else {
        abrirModal(`
            <h2 style="color:#00ff88">¡Mensaje Recibido!</h2>
            <p>Gracias <b>${nombre}</b>. Hemos recibido tu interés y te escribiremos a <b>${email}</b> en menos de 24 horas.</p>
        `);
        // Limpiar campos
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
    }
}