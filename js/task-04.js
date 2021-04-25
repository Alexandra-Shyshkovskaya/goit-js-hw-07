//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrement.addEventListener('click', decrementHandler);

increment.addEventListener('click', incrementHandler);

function incrementHandler() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
function decrementHandler() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}