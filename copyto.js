const copyTos = document.querySelectorAll(`[data-copyto]`)
copyTos.forEach(copyTo => {
    const copy = copyTo.querySelector(`[data-copyable]`).textContent;
    const copyIt = copyTo.querySelector(`[data-copyit]`);
    copyIt.addEventListener('click', () => {
        navigator.clipboard.writeText(copy).then(() => {
            copyIt.textContent = "Copied!";
        }).catch(err => {
            copyIt.textContent = "Failed"
        })
    })
});
