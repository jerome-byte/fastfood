
// Menu burger pour mobile
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});





document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.galerie-track');
    const cards = document.querySelectorAll('.galerie-cart');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    if (cards.length === 0) return;

    let currentIndex = 0;
    
    // Déterminez la largeur de déplacement : largeur de la carte + sa marge (32% + 2% = 34%)
    // C'est la taille d'un "pas" de défilement.
    const stepPercentage = 34; // (32% + 2% de margin)
    
    // Si vous préférez un défilement carte par carte
    function updateCarousel() {
        const offset = -currentIndex * stepPercentage;
        track.style.transform = `translateX(${offset}%)`;
    }

    // Gestion du clic sur le bouton 'Suivant' (>)
    nextButton.addEventListener('click', () => {
        // Nous défilons tant qu'il y a assez de place pour une carte suivante
        if (currentIndex < cards.length - 1) {
             currentIndex++;
        } else {
            // Optionnel : Revenir au début
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Gestion du clic sur le bouton 'Précédent' (<)
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Optionnel : Aller à la fin
            currentIndex = cards.length - 1;
        }
        updateCarousel();
    });

    updateCarousel(); 
});