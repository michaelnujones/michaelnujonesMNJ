const images = ["foto.jpg", "foto1.jpg", "foto2.jpg", "foto3.jpg"];
let currentImageIndex = 0;

function showImage(index) {
    const profileImage = document.getElementById("profileImage");
    profileImage.src = images[index];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Initial image display
showImage(currentImageIndex);
