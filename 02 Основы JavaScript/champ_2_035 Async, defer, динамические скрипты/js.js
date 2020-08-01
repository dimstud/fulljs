"use strict";
// defer - 1) загружается в фоновом режиме и подключается когда всё загрузится 2) скрипты ждут друг друга
let p = document.querySelectorAll('p');
console.log(p);

// async - 1) страница нне ждет загрузку скриптов 2)скрипты не ждут друг друга

//  Помещение  тэга  script в DOM


function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("test.js");
loadScript("same.js");              