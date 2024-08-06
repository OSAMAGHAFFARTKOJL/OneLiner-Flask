document.addEventListener('DOMContentLoaded', () => {
    const currentProblemElement = document.getElementById('current-problem');
    const hintList = document.querySelector('.hint-list');
    const resetBtn = document.querySelector('.reset-btn');
    const problemInput = document.querySelector('.answer-input');
    const problemTypeSelect = document.querySelector('.problem-type');
    const submitBtn = document.querySelector('.submit-btn');
    const loader = document.getElementById('loader');

    function loadProblem() {
        const currentProblem = localStorage.getItem('currentProblem');
        const problemType = localStorage.getItem('problemType');
        if (currentProblem) {
            currentProblemElement.textContent = `${problemType} Problem: ${currentProblem}`;
            problemInput.value = currentProblem; // Set the value of the problem input
            problemTypeSelect.value = problemType;
            // Fetch hints only when submit button is clicked
        }
    }

    loadProblem();

    resetBtn.addEventListener('click', () => {
        localStorage.removeItem('currentProblem');
        localStorage.removeItem('problemType');
        window.location.href = './';
    });

    submitBtn.addEventListener('click', async () => {
        const problem = problemInput.value.trim();
        const problemType = problemTypeSelect.value;
        localStorage.setItem('currentProblem', problem);
        localStorage.setItem('problemType', problemType);
        if (problem) {
            
            await fetchHints(problem, problemType);
        }
    });

    async function fetchHints(problem, type) {
        try {
            // Show loader
            loader.style.display = 'flex';
            hintList.innerHTML = ''; // Clear existing hints

            const response = await fetch('/api/get_hints', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ problem, type }),
            });

            if (response.ok) {
                const data = await response.json();
                displayHints(data);
            } else {
                console.error('Error fetching hints');
                hintList.innerHTML = '<li>Error fetching hints. Please try again.</li>';
            }
        } catch (error) {
            console.error('Error:', error);
            hintList.innerHTML = '<li>An unexpected error occurred. Please try again.</li>';
        } finally {
            // Hide loader
            loader.style.display = 'none';
        }
    }

    function displayHints(hints) {
        const hintLevels = [
            { label: 'Level 1', content: hints.hint1 },
            { label: 'Level 2', content: hints.hint2 },
            { label: 'Level 3', content: hints.hint3 },
            { label: 'Full Solution', content: hints.hint4 },
            { label: 'Recommended topics to improve', content: hints.hint5 },
        ];

        hintList.innerHTML = ''; // Clear existing hints

        if (hints.hint1 && hints.hint2) {
            hintLevels.forEach((hint, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="hint-level">${hint.label}</span>
                    <span class="hint-desc"></span>
                    <button class="unlock-btn">Unlock</button>
                `;

                const unlockBtn = li.querySelector('.unlock-btn');
                const hintDesc = li.querySelector('.hint-desc');

                unlockBtn.addEventListener('click', () => {
                    if (hint.label === 'Full Solution' && isCodeHint(hint.content)) {
                        hintDesc.innerHTML = createCodeBlock(hint.content);
                    } else {
                        hintDesc.textContent = hint.content;
                    }
                    unlockBtn.style.display = 'none';
                    li.querySelector('.hint-level').style.display = 'none'; // Hide the level heading
                });

                hintList.appendChild(li);
            });
        } else {
            hintList.innerHTML = ''; // Clear the hintList
            hintList.style.display = 'none'; // Hide the hintList
            const parentElement = hintList.parentNode;
            const paragraphElement = document.createElement('p');
            paragraphElement.textContent = hints.hint1;
            parentElement.appendChild(paragraphElement); // Append the paragraph element
        }
    }

    function isCodeHint(hintContent) {
        return hintContent.includes('def ') || hintContent.includes('```'); // Adjust condition as needed
    }

    function createCodeBlock(codeContent) {
        const cleanCode = codeContent.replace(/```/g, '');
        return `
            <pre><code>${cleanCode}</code></pre>
            <button class="copy-btn">Copy</button>
        `;
    }

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('copy-btn')) {
            const codeElement = event.target.previousElementSibling;
            const codeText = codeElement.textContent;
            navigator.clipboard.writeText(codeText).then(() => {
                event.target.textContent = 'Copied!';
                setTimeout(() => {
                    event.target.textContent = 'Copy';
                }, 2000);
            });
        }
    });
});
