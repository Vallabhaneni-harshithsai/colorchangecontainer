document.getElementById('toggleButton').addEventListener('click', function() {
    const container = document.querySelector('.container');
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');

    if (button.textContent === 'Click me') {
        button.textContent = 'Clicked';
        text.textContent = 'Text has changed!';
        container.classList.add('changed');
    } else {
        button.textContent = 'Click me';
        text.textContent = 'Initial Text';
        container.classList.remove('changed');
    }
});