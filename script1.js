const images = [
    { src: "https://th.bing.com/th?id=OIP.25wqmha00iElZ2hQK73TgQHaJG&w=225&h=277&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", link: "https://th.bing.com/th?id=OIP.25wqmha00iElZ2hQK73TgQHaJG&w=225&h=277&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { src: "https://th.bing.com/th/id/OIP.exqMnXsU_Vh0k9X-wVzpTQHaFj?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", link: "https://th.bing.com/th/id/OIP.exqMnXsU_Vh0k9X-wVzpTQHaFj?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { src: "https://th.bing.com/th?id=ODL.8b5bdb25e932f74224a4a602e94b2939&w=298&h=240&c=10&rs=1&qlt=99&o=6&dpr=1.3&pid=13.1", link: "https://th.bing.com/th?id=ODL.8b5bdb25e932f74224a4a602e94b2939&w=298&h=240&c=10&rs=1&qlt=99&o=6&dpr=1.3&pid=13.1" },
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
