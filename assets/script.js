/************ Bon à savoir ************/
	// Const = variable qui ne change pas pendant l'exécution du programme




/*************** Carrousel JS ***************/
	// "const slide" -- > Déclariation de mon tableau appelé "slides" 
	// const -- > des valeurs constantes qui ne varient pas pendant l'exécution du programme
	// Pour ajouter un slide, il suffit de compléter la variable de type tableau slides en ajoutant un nom d'image correspondant au slide.
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//Déclaration des variables
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); // variable qui me permet de cibler le container dots

let currentIndex = 0;


// Gestionnaire d'événement pour le clic sur la flèche gauche
	arrowLeft.addEventListener('click', function clickLeft() {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite
	arrowRight.addEventListener('click', function clickRight() {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});


// Fonction pour mettre à jour les points indicateurs, l'image et le texte
	function updateCarousel(index, direction) {
      //correction du bug pour la première et la dernière image
      if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

    // Mettre à jour l'image
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    // Mettre à jour le texte
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic sur la flèche ${direction}`);
}




// Fonction pour mettre à jour les points indicateurs
	function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}