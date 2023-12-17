const listItems = document.querySelectorAll('.header__list li');
const sections = document.querySelectorAll('.section');
const logo = document.querySelector('.header__logo');

const selectSection = (item) => {
    const sectionName = item.target.getAttribute('data-section');

    listItems.forEach((li) => li.classList.toggle('active', li === item.target));
    sections.forEach((section) => section.classList.toggle('active', section.classList.contains(sectionName)));
};

listItems.forEach((item) => item.addEventListener('click', selectSection));
logo.addEventListener('click', selectSection);

//change theme

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    document.body.classList.toggle('light-theme', savedTheme !== 'dark');

    document.addEventListener('click', function (event) {
        if (event.target.id === 'themeToggleBtn') {
            toggleTheme();
        }
    });
});

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}



const burgerButton = document.querySelector('.hamburger');
burgerButton.addEventListener('click',()=>{
    burgerButton.classList.toggle('active');
})