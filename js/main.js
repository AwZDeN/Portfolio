const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            
            entry.target.classList.add('show');

            observer.unobserve(entry.target);
        }
    });
});
const elements = document.querySelectorAll('.animation-on-scroll');

elements.forEach(element => {

    observer.observe(element);
    
});

const dealBtn = document.querySelectorAll('.deal-button')
dealBtn.forEach((el) => {
    el.addEventListener('click', () => {
        alert('В данный момент для оформления заказов используется сервис KWork, Telegram, напишите мне на этих платформах и мы приступим к разработке!')
        window.open('https://t.me/WestFault?text=Здравствуйте%2C+я+хочу+заказать+услугу, ','_blank');
    })
})

const burgerBtn = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuBtn = document.querySelectorAll('.menu-button')
burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('show')  
})
burgerMenuBtn.forEach((el) => {
    el.addEventListener('click', () => {
        burgerMenu.classList.remove('show')
    })
})