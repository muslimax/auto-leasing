
const btnLogin = document.querySelector('.account-link');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__close');

btnLogin.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
})
function closeModal() {  
    modal.classList.remove('active');
    document.body.style.overflow = '';
};

btnClose.addEventListener('click', closeModal)

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('active')) {
        closeModal();        
    }
});