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


// Fonction pour mettre à jour l'apparence des points indicateurs
function updateDots(index) {
    dots.forEach((dot, i) => { 		//Parcourt chaque point indicateur
        if (i === index) { 			//Si l'index du point correspond à l'index du slide actuel, ajoute la classe 'dot_selected'
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected'); // Sinon, retire la classe 'dot_selected'
        }
    });
}


// Gestionnaire d'événement pour le clic sur la flèche gauche
	arrowLeft.addEventListener('click', function clickLeft() {
    currentIndex = (currentIndex - 1);				// Diminue l'index actuel de 1 pour passer au slide précédent
    updateCarousel(currentIndex, 'left');			// Appelle la fonction pour mettre à jour le carrousel avec le nouvel index
    updateDots(currentIndex); 						// Appelle la fonction pour mettre à jour les points indicateurs avec le nouvel index
});

// Gestionnaire d'événement pour le clic sur la flèche droite
	arrowRight.addEventListener('click', function clickRight() {
    currentIndex = (currentIndex + 1) ;				// Augmente l'index actuel de 1 pour passer au slide suivant
    updateCarousel(currentIndex, 'right');			// Appelle la fonction pour mettre à jour le carrousel avec le nouvel index
    updateDots(currentIndex); 						// Appelle la fonction pour mettre à jour les points indicateurs avec le nouvel index
});


// Fonction pour mettre à jour les points indicateurs, l'image et le texte
	function updateCarousel(index, direction) {
      //correction du bug pour la première et la dernière image
	  //Si l'index actuel est -1 et la direction est 'left' : 
	  //l'utilisateur a cliqué sur la flèche gauche alors qu'il était sur le premier slide. L'index est donc réglé pour afficher le dernier slide.
      if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

    // Mise à jour de l'image
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`; //construit le chemin de l'image en utilisant l'index actuel.
    bannerImg.src = imagePath;						//met à jour la source de l'image dans le carrousel.
    bannerImg.alt = `Slide ${currentIndex + 1}`;	//met à jour le texte alternatif de l'image, ce qui est utile pour l'accessibilité.

    // Mise à jour du texte
    const tagLine = slides[currentIndex].tagLine;	//récupère le texte du slide actuel.
    document.querySelector('p').innerHTML = tagLine;//met à jour le contenu HTML du paragraphe pour afficher la nouvelle tagline.

    console.log(`Clic sur la flèche ${direction}`); //Cette ligne enregistre dans la console le fait qu'un clic a eu lieu, ainsi que la direction de ce clic.
}




