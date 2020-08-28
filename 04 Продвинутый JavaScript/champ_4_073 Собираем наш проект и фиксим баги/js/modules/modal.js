function modal() {
    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');

        // Для toggle
        // modal.classList.toggle('show');

        // Чтобы задний фон не скролился
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });


    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');

        // Для toggle
        // modal.classList.toggle('show');

        // Чтобы задний фон не скролился
        document.body.style.overflow = '';
    }


    // Чтобы закрывать нажатием за окно на фон
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            closeModal();
        }
    });


    // Для того чтобы закрыть окно клавишей Esc
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });



    // 044

    const modalTimerId = setTimeout(openModal, 50000);

    // Чтобы удалить обработчик событий
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}


export default modal;