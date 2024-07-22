document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const value = button.value;

            if (action === 'clear') {
                display.value = '';
            } else if (action === 'delete') {
                display.value = display.value.slice(0, -1);
            } else if (action === 'input') {
                display.value += value;
            } else if (action === 'calculate') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            }
        });
    });
});