let contentPasses = document.querySelectorAll(`[data-container]`);
contentPasses.forEach(container => {
    let aim = container.getAttribute(`data-aim`);
    let code = container.querySelector(`[data-code]`).cloneNode(true);
    let btn = container.querySelector(`[data-fire]`)
    btn.addEventListener('click', () => {
        if (document.querySelector(aim)) {
            document.querySelector(aim).appendChild(code)
        } else {
            console.log(`Do not find the selector: ${aim}`)
        }
    })
});
