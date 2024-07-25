const contrastBtn = document.getElementById('contrast-btn');

const darkMode = () => {
	document.body.classList.add('bg-dark');
	document.body.classList.add('text-light');
	document.querySelectorAll('.text-dark').forEach((element) => {
		element.classList.remove('text-dark');
		element.classList.add('text-light');
	});
	localStorage.setItem('contrastMode', 'dark');
};

const lightMode = () => {
	document.body.classList.remove('bg-dark');
	document.body.classList.remove('text-light');
	document.querySelectorAll('.text-light').forEach((element) => {
		element.classList.remove('text-light');
		element.classList.add('text-dark');
	});
	localStorage.setItem('contrastMode', 'light');
};

const toggleContrast = () => {
	const saveMode = localStorage.getItem('contrastMode');
	if (saveMode == 'light') {
		darkMode();
	} else if (saveMode == 'dark') {
		lightMode();
	}
};

if (contrastBtn) {
	contrastBtn.addEventListener('click', toggleContrast);
}

if (!localStorage.getItem('contrastMode')) {
	localStorage.setItem('contrastMode', 'light');
} else if (localStorage.getItem('contrastMode') == 'dark') {
	darkMode();
} else if (localStorage.getItem('contrastMode') == 'light') {
	lightMode();
} else {
	localStorage.removeItem('contrastMode');
}
