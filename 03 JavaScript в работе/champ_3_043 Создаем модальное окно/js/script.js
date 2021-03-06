window.addEventListener('DOMContentLoaded', () => {


    // Tabs


    // const tabs = document.querySelectorAll('.tabheader__item'),
    //       tabsContent = document.querySelectorAll('.tabcontent'),
    //       tabsParent = document.querySelector('.tabheader__items');


    // function hideTabContent() {
    //     tabsContent.forEach(item => {
    //         item.style.display = 'none';
    //     });

    //     tabs.forEach(item => {
    //         item.classList.remove('tabheader__item_active');
    //     });
    // }

    // function showTabContent(i = 0) {
    //     tabsContent[i].style.display = 'block';
    //     tabs[i].classList.add('tabheader__item_active');
    // }

    // hideTabContent();
    // showTabContent();

    // // Открывает какждое окно соответствующее названию в меню
    // tabsParent.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('tabheader__item')) {
    //         tabs.forEach( (item, i) => {
    //             if (target == item) {
    //                 hideTabContent();
    //                 showTabContent(i);
    //             }
    //         });
    //     }
    // });

    // С использованием классов
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    // Открывает какждое окно соответствующее названию в меню
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });







    // Timer


    const deadLine = '2020-11-03';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            // Окрукление до близжайшего целого
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            // Вернет остатов
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock(); // запускаем здесь чтобы значение из верстки не отображалось на странице

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);




    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            // modal.classList.add('show');
            // modal.classList.remove('hide');

            // Для toggle
            modal.classList.toggle('show');

            // Чтобы задний фон не скролился
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        // modal.classList.add('hide');
        // modal.classList.remove('show');

        // Для toggle
        modal.classList.toggle('show');

        // Чтобы задний фон не скролился
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    // Чтобы закрывать нажатием за окно на фон
    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });


    // Для того чтобы закрыть окно клавишей Esc
    document.addEventListener('keydown', (e) => {
        if ( e.code === "Escape" && modal.classList.contains('show') ) {
            closeModal();
        }
    });
});