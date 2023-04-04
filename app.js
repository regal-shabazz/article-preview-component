const button = document.getElementById('button');
const button2 = document.querySelector('.desktop')
const activeState = document.getElementById('active-state')
const activeState2 = document.querySelector('.active-state2')

button.addEventListener('click', () => {
    activeState.classList.add('active');
})

button.addEventListener('click', () => {
    activeState2.classList.add('active2');
})
