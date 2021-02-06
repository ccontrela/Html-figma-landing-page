document.addEventListener('scroll', (e) => {

        document.querySelector('.back-to').style.display = (window.pageYOffset > 250) ? 'flex' : 'none';
});