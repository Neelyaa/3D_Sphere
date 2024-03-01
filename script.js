document.querySelector('.nav__list-burger').addEventListener('click', function() {
    document.querySelector('.nav__list ul').classList.toggle('active');
    document.querySelector('.nav__list-burger').classList.toggle('active');
});