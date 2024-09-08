document.addEventListener('click', (event) => {
    if (event.target.matches('[data-fire]')) {
        const container = event.target.closest('[data-remove]');
        if (container) {
            const codeElement = event.target.closest('[data-code]');
            if (codeElement) {
                codeElement.remove();
            }
        }
    }
});
