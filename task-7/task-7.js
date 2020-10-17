// Получаем ссылки на наши объекты
const slideInputRef = document.querySelector("#font-size-control");
const textInputRef = document.querySelector("#text");

// Определяем размер шрифта заданный по-умолчанию
const strFontSize = window.getComputedStyle(textInputRef).fontSize
const numFontSize = Number(strFontSize.slice(0,-2))

// Добавляем инлайн-атрибут style к нашему спану
textInputRef.setAttribute('style',`font-size: ${strFontSize}`);

// Т.к. по-умолчанию слайдер = 50, а текст = numFontSize,
//  то будем вычислять размер текста по формуле x=y*numFontSize/50,
//  где у - значение слайдера
slideInputRef.addEventListener('input', () => { 
   textInputRef.attributes.style.value = `font-size: ${slideInputRef.value*numFontSize/50}px` 
})