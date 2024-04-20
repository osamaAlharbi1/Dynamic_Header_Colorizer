document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('color');
    const colorName = document.getElementById('colorName');
    const text = document.getElementById('text');
    form.addEventListener('submit', event => {
        event.preventDefault();
        text.style.color = colorName.value;
        colorName.value = ''; 
    });
});