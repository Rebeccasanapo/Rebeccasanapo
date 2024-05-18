const images = [
    { src: "https://th.bing.com/th/id/OIP.Bt-WNASdah5RAhI7aZyE5QAAAA?w=250&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7", link: "https://th.bing.com/th/id/OIP.Bt-WNASdah5RAhI7aZyE5QAAAA?w=250&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { src: "https://th.bing.com/th/id/OIP.QNpz4XUrAvjsDmwVJsR3DQHaFB?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", link: "https://th.bing.com/th/id/OIP.QNpz4XUrAvjsDmwVJsR3DQHaFB?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { src: "https://th.bing.com/th/id/OIP.A6-DE_dbc_PsLs7fUeAj-AHaFb?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", link: "https://th.bing.com/th/id/OIP.A6-DE_dbc_PsLs7fUeAj-AHaFb?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

let currentIndex = 0;
const slideshow = document.getElementById("slideshow");

function showImage(index) {
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }

    const imageUrl = images[index].src;
    const imageLink = images[index].link;
    slideshow.innerHTML = `<a href="${imageLink}" target="_blank"><img src="${imageUrl}" alt="Monet ${index + 1}"></a>`;
    currentIndex = index;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

document.getElementById("nextBtn").addEventListener("click", nextImage); document.getElementById("prevBtn").addEventListener("click", prevImage);

showImage(currentIndex);

const immagineIngrandita = document.getElementById("immagine-ingrandita");

immagineIngrandita.addEventListener("mouseover", function() {
    // Ingrandisci l'immagine al 150% quando ci passi sopra con il mouse
    immagineIngrandita.style.transform = "scale(1.5)";
});

immagineIngrandita.addEventListener("mouseout", function() {
    // Riporta l'immagine alle dimensioni originali quando il mouse esce
    immagineIngrandita.style.transform = "scale(1)";
});