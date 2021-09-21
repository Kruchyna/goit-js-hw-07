
/*const counterValue = document.querySelector('#value');

const increment=()=>counterValue.textContent++;

const decrement=() =>counterValue.textContent--;

/*const btnIncrement = document.querySelector("button[data-action = 'decrement']");
const btnDecrement = document.querySelector("button[data-action = 'increment']");*/

/*const actions = document.querySelectorAll('#counter button');

actions[0].addEventListener('click',decrement);
actions[1].addEventListener('click', increment);*/

const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueSpanBtn: document.querySelector('#value')
}

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn)

let counterValue = 0;

function onDecrementBtn(event) {
    refs.valueSpanBtn.textContent = counterValue -= 1;
    console.log(event)
}
function onIncrementBtn(event) {
    refs.valueSpanBtn.textContent = counterValue += 1;
    console.log(event)
}