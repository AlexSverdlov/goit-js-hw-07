// Получаем ссылки на наши объекты
const textInputRef = document.querySelector("#name-input");
const textSpanRef = document.querySelector("#name-output");

// Добавляем слушатель 
textInputRef.addEventListener('input', event => {
    textSpanRef.textContent = event.target.value !== '' ? event.target.value : 'Незнакомец'
})