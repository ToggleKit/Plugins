const elements = document.querySelectorAll(`[data-txtlimit]`);
elements.forEach(element => {
    const wordLimit = element.getAttribute('data-txtlimit')
    const words = element.innerText.split(' ');
    if (words.length > wordLimit) {
        element.innerText = words.slice(0, wordLimit).join(' ') + '...';
    }
});
