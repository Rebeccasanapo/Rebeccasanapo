document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookie");
    const rejectButton = document.getElementById("reject-cookie"); // Seleziona il pulsante di rifiuto

    // Verifica se il cookie è già stato accettato
    if (document.cookie.includes("cookieAccepted=true")) {
        cookieBanner.style.display = "none"; // Nascondi il banner se il cookie è già stato accettato
    }

    // Aggiungi un gestore di eventi al pulsante Accetta
    acceptButton.addEventListener("click", function() {
        // Imposta un cookie che indica che i cookie sono stati accettati
        document.cookie = "cookieAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

        cookieBanner.style.display = "none"; // Nascondi il banner dopo aver accettato i cookie
    });

    // Aggiungi un gestore di eventi al pulsante Rifiuta
    rejectButton.addEventListener("click", function() {
        cookieBanner.style.display = "none"; // Nascondi il banner se i cookie sono stati rifiutati
    });
});