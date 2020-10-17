// Получаем ссылки на наши объекты
const ulRef = document.querySelector("#ingredients");

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Создаем объекты li, и возвращаем на них ссылку 
const createListFood = ingredient => {
    const newLiRef = document.createElement("li");
    newLiRef.textContent = ingredient;
    return newLiRef
}

// Вставляем объекты одной операцией в HTML
const listProdRef = ingredients.map(ingredient => createListFood(ingredient))
ulRef.append(...listProdRef)