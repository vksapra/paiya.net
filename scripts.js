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
}
