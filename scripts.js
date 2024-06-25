//This makes the header follow the user as it scrolls the way Benzema follows 15 year olds
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const mobileMenu = document.getElementById('mobileMenu');
const nav = document.querySelector('nav');

mobileMenu.addEventListener('click', function() {
    nav.classList.toggle('active');
});

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Toggle active class on the clicked menu item
        item.classList.toggle('active');

        // Hide other dropdowns except the one clicked
        menuItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// Close dropdowns if clicked outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-item')) {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    }
});

// Prevent dropdown from closing when clicked inside
document.querySelector('nav').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.addEventListener('DOMContentLoaded', function() {
    var userLang = navigator.language || navigator.userLanguage; 
    var lang = userLang.split('-')[0]; 

    // Set the default language if needed
    if (!['en', 'es', 'fr', 'de'].includes(lang)) {
        lang = 'fr'; 
    }

    loadTranslations(lang);
});

function loadTranslations(lang) {
    fetch(`translations/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-translate]').forEach(el => {
                el.textContent = data[el.getAttribute('data-translate')];
            });
        });


function initializeCarousels() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const images = carousel.getElementsByClassName('restaurant-image');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        
        for (let i = 0; i < images.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => showSlide(carousel, i));
            dotsContainer.appendChild(dot);
        }

        showSlide(carousel, 0); // Initialize the first slide
    });
}

function showSlide(carousel, index) {
    const images = carousel.getElementsByClassName('restaurant-image');
    const dots = carousel.getElementsByClassName('dot');
    
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        dots[i].classList.remove('active');
    }

    images[index].style.display = 'block';
    dots[index].classList.add('active');
}

function nextSlide(button) {
    const carousel = button.parentElement;
    const images = carousel.getElementsByClassName('restaurant-image');
    const currentIndex = Array.from(images).findIndex(image => image.style.display === 'block');
    const nextIndex = (currentIndex + 1) % images.length;
    showSlide(carousel, nextIndex);
}

function prevSlide(button) {
    const carousel = button.parentElement;
    const images = carousel.getElementsByClassName('restaurant-image');
    const currentIndex = Array.from(images).findIndex(image => image.style.display === 'block');
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(carousel, prevIndex);
}
}

