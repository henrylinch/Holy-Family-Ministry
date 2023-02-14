
const body = document.querySelector('body')
const onBtn = document.querySelector('.on')
const offBtn = document.querySelector('.off')
const modeText = document.querySelector('.mode')
const radios = document.querySelector('.radios')
const modeButton = document.getElementById('mode-btn')
const contentChange = document.querySelector('.content')

        
modeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode')
    contentChange.classList.toggle('content-change')
    modeText.classList.toggle('mode-after')
    radios.classList.toggle('radios-bg')
    offBtn.classList.toggle('hide-off')
    onBtn.classList.toggle('show-on')
});