// Unified togglePopup function
function togglePopup(contentId) {
    const allPopups = document.querySelectorAll('.popup-content');
    const header = document.querySelector('.header');
    let activeContent = null;

    allPopups.forEach(popup => {
        if (popup.id === contentId) {
            activeContent = popup;
        } else {
            popup.style.display = 'none';
            popup.classList.remove('active');
        }
    });

    if (activeContent) {
        const isActive = activeContent.classList.contains('active');
        if (isActive) {
            activeContent.style.display = 'none';
            activeContent.classList.remove('active');
            header.classList.remove('white-bg');
        } else {
            activeContent.style.display = 'block';
            activeContent.classList.add('active');
            header.classList.add('white-bg');
        }
    }
}

// Image modal functions
let slideIndex = 1;

function showImage(srcArray, index = 1) {
    const modal = document.getElementById('imageModal');
    const modalSlides = document.getElementById('modalSlides');
    
    modalSlides.innerHTML = ''; // Clear existing images

    srcArray.forEach(src => {
        let img = document.createElement('img');
        img.src = src;
        img.classList.add('modal-slide');
        modalSlides.appendChild(img);
    });

    modal.style.display = "block";
    slideIndex = index; // Set current slide index to the clicked image
    showSlide(slideIndex); // Display the initial image
}

function slideImage(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName('modal-slide');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function closeImage() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Language switcher function
function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-sv], [data-en]');
    elements.forEach(el => {
        el.innerHTML = el.getAttribute(`data-${language}`);
    });
}

// Change image on hover
const imageDisplay = document.getElementById('imageDisplay');
let slideInterval;
const galleryImages = [
    'https://uploads.staticjw.com/au/aurorawedding/rikardoalva001.png',
];
let currentSlide = 0;

function startSlideshow() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % galleryImages.length;
        imageDisplay.style.backgroundImage = `url(${galleryImages[currentSlide]})`;
    }, 1000); // Byter bild var tredje sekund
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('mouseover', function() {
        stopSlideshow();
        imageDisplay.style.backgroundImage = `url(${this.getAttribute('data-img')})`;
    });
    button.addEventListener('mouseout', function() {
        startSlideshow();
    });
});

// Start the slideshow on page load
window.onload = startSlideshow;

// Image carousel functions
let carouselIndex = 0;

function changeImage(n) {
    const images = document.querySelectorAll('.carousel-image');
    images[carouselIndex].style.display = 'none';
    carouselIndex = (carouselIndex + n + images.length) % images.length;
    images[carouselIndex].style.display = 'block';
}

// Open slideshow in modal
function openSlideshow(index) {
    showImage(galleryImages, index);
}
