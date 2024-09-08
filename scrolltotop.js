const scrollToTop = document.querySelector(`[data-tg="scrollToTop"]`);
if (scrollToTop) {
    scrollToTop.addEventListener(`click`, function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: `smooth`
        })
   });
