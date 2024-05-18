const text = "devi scrivere però senno non servi a niente.";
const speed = 50; // Velocità di battitura delle lettere (in millisecondi)
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Avvia la funzione al caricamento della pagina
window.onload = typeWriter;