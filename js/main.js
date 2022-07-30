const nav = document.querySelector('.nav__mobile');
const navBtn = document.querySelector('.nav__buttons-burger');
const allNavItems = document.querySelectorAll('.nav__items-link');

const handleNav = () => {
	nav.classList.toggle('nav__mobile--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__mobile--active');
		});
	});
};

navBtn.addEventListener('click', handleNav);
