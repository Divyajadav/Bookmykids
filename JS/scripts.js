// JavaScript for form validation and other interactivity
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                event.preventDefault();
            } else {
                input.style.borderColor = 'initial';
            }
        });
    });
});
