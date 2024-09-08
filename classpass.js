let classPasses = document.querySelectorAll(`[data-class]`);
classPasses.forEach(classPass => {
    let cls = classPass.getAttribute(`data-class`);
    let aim = classPass.getAttribute(`data-aim`);
    classPass.addEventListener('click', () => {
        if (document.querySelector(aim)) {
            document.querySelector(aim).classList.toggle(cls);
        } else {
            console.log(`Do not find the selector: ${aim}`)
        }
    })
});
