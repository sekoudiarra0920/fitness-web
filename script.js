// --- FUNCIONES DE NAVEGACIÓN Y BIENVENIDA ---

function saludo() {
    // Usamos un estilo de alerta un poco más limpio
    alert("🔥 ¡Bienvenido a Fitness Pro! Tu transformación comienza ahora.");
}

// --- LÓGICA DE LAS RUTINAS ---

function verRutina(tipo) {
    let mensaje = "";
    let ejercicios = "";

    // Estructuramos mejor la información por tipo de entrenamiento
    switch (tipo) {
        case 'fuerza':
            mensaje = "💪 PLAN DE FUERZA SELECCIONADO";
            ejercicios = "\n• Press de Banca: 4x8\n• Sentadilla: 4x10\n• Peso Muerto: 3x5";
            break;
        case 'cardio':
            mensaje = "🏃 PLAN DE CARDIO SELECCIONADO";
            ejercicios = "\n• Carrera suave: 20 min\n• Sprints en cuesta: 5 series\n• Bici estática: 10 min";
            break;
        case 'hiit':
            mensaje = "🔥 PLAN HIIT SELECCIONADO";
            ejercicios = "\n• Burpees: 45 seg\n• Mountain Climbers: 45 seg\n• Descanso: 15 seg\n(Repetir 4 veces)";
            break;
        default:
            mensaje = "¡Elige una rutina para empezar!";
    }

    alert(mensaje + "\n" + ejercicios);
}

// --- LÓGICA DEL FORMULARIO DE CONTACTO ---

function enviar() {
    const nombreInput = document.getElementById("nombre");
    const nombre = nombreInput.value.trim(); // .trim() elimina espacios vacíos al principio/final

    if (nombre === "") {
        alert("⚠️ Por favor, introduce tu nombre para continuar.");
        nombreInput.focus(); // Pone el cursor en el cuadro de texto automáticamente
    } else {
        alert("✅ ¡Gracias por tu interés, " + nombre + "!\nEn breve un entrenador de Fitness Pro se pondrá en contacto contigo.");
        nombreInput.value = ""; // Limpia el formulario después de enviar
    }
}

// --- EXTRA: EFECTO DE NAVEGACIÓN ---
// Esto hace que el menú cambie de color al hacer scroll (opcional pero profesional)
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 2px 10px rgba(0,255,136,0.2)";
    } else {
        header.style.background = "rgba(0,0,0,0.9)";
        header.style.boxShadow = "none";
    }
});