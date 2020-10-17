// Получаем ссылки на наши объекты
const buttDecrRef = document.querySelector("button[data-action=decrement]");
const buttIncrRef = document.querySelector("button[data-action=increment]");
const spanInputRef = document.querySelector("#value");

// Функция decrement
function handleClickDecr() {
    counterValue--
    spanInputRef.textContent=counterValue
}

// Функция increment 
function handleClickIncr() {
    counterValue++
    spanInputRef.textContent=counterValue
}
 
let counterValue = 0
// Добавляем слушатель 
buttDecrRef.addEventListener('click', handleClickDecr)
buttIncrRef.addEventListener('click', handleClickIncr)

