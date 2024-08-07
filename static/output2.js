document.addEventListener('DOMContentLoaded', () => {
    const problemInput = document.getElementById('problemInput');
    const display = document.getElementById('display');
    const mathKeyboard = document.getElementById('mathKeyboard');
    const calculatorIcon = document.getElementById('calculatorIcon');
    const closeCalculator = document.getElementById('closeCalculator');
    const submitProblemBtn = document.getElementById('submitProblem');

    function toggleCalculator() {
        mathKeyboard.style.display = mathKeyboard.style.display === 'none' ? 'block' : 'none';
    }

    function handleButtonClick(value) {
        problemInput.value += value;
        display.textContent = problemInput.value;
    }

    function handleBackspace() {
        problemInput.value = problemInput.value.slice(0, -1);
        display.textContent = problemInput.value;
    }

    function handleClear() {
        problemInput.value = '';
        display.textContent = 'Enter a problem...';
    }

    function handleSubmit() {
        const problem = problemInput.value.trim();
        if (problem) {
            localStorage.setItem('currentProblem', problem);
            localStorage.setItem('problemType', document.getElementById('problemType').value);
            window.location.href = '/output';
        }
    }

    calculatorIcon.addEventListener('click', toggleCalculator);
    closeCalculator.addEventListener('click', () => {
        mathKeyboard.style.display = 'none';
    });

    document.querySelectorAll('.keyboard button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === '⌫') {
                handleBackspace();
            } else if (value === 'C') {
                handleClear();
            } else {
                handleButtonClick(value);
            }
        });
    });

    submitProblemBtn.addEventListener('click', handleSubmit);
});
