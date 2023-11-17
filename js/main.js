const theme = document.querySelector('.list__theme')
const theme_modal = document.querySelector('.list__theme--modal')
const body = document.querySelector('body')
const blocks = document.querySelector('header')
const burger = document.querySelector('.burger-icon')
const burgerblock = document.querySelector('.burger-block')
const inputBlock = document.querySelector('.input_block')
const spawn_text = document.querySelector('.spawn-text')
const container = document.querySelector('.container')

theme.addEventListener('click', () => {
    if(theme.classList.contains('dark')) {
        theme.classList.remove('dark');
        theme_modal.classList.remove('dark');
        body.classList.remove('dark');
        blocks.classList.remove('dark--blocks');
        theme.innerHTML = 'Светлая тема';
        theme_modal.innerHTML = 'Светлая тема';
        
    } else {
        theme.classList.add('dark');
        theme_modal.classList.add('dark');
        theme.innerHTML = 'Темная тема';
        theme_modal.innerHTML = 'Темная тема';
        body.classList.add(`dark`);
        blocks.classList.add(`dark--blocks`);
    }
    
});
theme_modal.addEventListener('click', () => {
if(theme.classList.contains('dark')) {
        theme.classList.remove('dark');
        theme_modal.classList.remove('dark');
        body.classList.remove('dark');
        blocks.classList.remove('dark--blocks');
        theme.innerHTML = 'Светлая тема';
        theme_modal.innerHTML = 'Светлая тема';
        
    } else {
        theme.classList.add('dark');
        theme_modal.classList.add('dark');
        theme.innerHTML = 'Темная тема';
        theme_modal.innerHTML = 'Темная тема';
        body.classList.add(`dark`);
        blocks.classList.add(`dark--blocks`);
    }
})
burger.addEventListener('click', () => {
    burgerblock.classList.add('visible')
})
burgerblock.addEventListener('click', () => {
    burgerblock.classList.remove('visible')
})
spawn_text.addEventListener('click', () => {
    const inputText = inputBlock.querySelector('.input-window').value;
    const textDiv = document.createElement('div');
    textDiv.textContent = inputText;
    textDiv.style.margin = '30px 15px'
    textDiv.style.color = 'black'
    inputBlock.appendChild(textDiv);
});