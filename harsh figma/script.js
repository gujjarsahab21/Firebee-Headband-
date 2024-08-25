const thumbnails = document.querySelectorAll('.carousel-slide');
const mainImage = document.getElementById('mainImage');
let currentIndex = 0;

function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

document.addEventListener('DOMContentLoaded', function() {
    const switchButton = document.getElementById('switch-kit-btn');
    const starterKit = document.getElementById('starter-kit');
    const foundersKit = document.getElementById('founders-kit');

    // Show Starter Kit by default
    starterKit.style.display = 'block';
    foundersKit.style.display = 'none';
    switchButton.textContent = 'Switch to Founder’s Kit';

    switchButton.addEventListener('click', function() {
        if (starterKit.style.display === 'none') {
            starterKit.style.display = 'block';
            foundersKit.style.display = 'none';
            switchButton.textContent = 'Switch to Founder’s Kit';
        } else {
            starterKit.style.display = 'none';
            foundersKit.style.display = 'block';
            switchButton.textContent = 'Switch to Starter Kit';
        }
    });
});
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("nav-active");
}

function updateImageAndBorder() {
    // Remove 'active' class from all thumbnails
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    // Add 'active' class to the current thumbnail
    thumbnails[currentIndex].classList.add('active');
    mainImage.src = thumbnails[currentIndex].src;
}

// Add event listener for thumbnail clicks
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateImageAndBorder();
    });

    thumbnail.addEventListener('mouseover', () => {
        currentIndex = index;
        updateImageAndBorder();
    });
});

// Initial call to set up the first image and border
updateImageAndBorder();
