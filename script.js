
window.onload = function () {
	const slides = document.querySelectorAll('.carousel-item');
	const navbarItems = document.querySelectorAll('.nav__item');

	let currentSlide = 0;
	var filename = window.location.href.split('/').pop();

	if (filename == 'index.html') {
		navbarItems[0].classList.add('active');
	} else if (filename == 'adoption.html') {
		navbarItems[1].classList.add('active');
	} else if (filename == 'aboutus.html') {
		navbarItems[2].classList.add('active');
	}

	function showSlide(index) {
		slides.forEach((slide, i) => {
			if (i === index) {
				slide.classList.add('active');
			} else {
				slide.classList.remove('active');
			}
		});
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
		showSlide(currentSlide);
	}

	// Start carousel
	showSlide(currentSlide);
	setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)
};