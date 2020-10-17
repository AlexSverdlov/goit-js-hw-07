// Получаем ссылки на наши объекты
const textInputRef = document.querySelector("#validation-input");
  
// При потере фокуса добавляем классы invalid или valid 
// в зависимости от кол-ва знаков в поле
textInputRef.addEventListener('blur', event => {
    if (event.target.value.length == event.target.dataset.length && event.target.value.length !== 0) {
        event.target.classList.add('valid')
        event.target.classList.remove('invalid')
    }
    else if (event.target.value.length != event.target.dataset.length && event.target.value.length !== 0) {
        event.target.classList.add('invalid')
        event.target.classList.remove('valid')
     }
})

// При получении фокуса убираем классы invalid и valid
textInputRef.addEventListener('focus', event => {
    event.target.classList.remove('invalid')
    event.target.classList.remove('valid')
    })