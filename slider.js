function sliderActived(){
window.addEventListener(`load`, function(){
const sliderELe = document.querySelectorAll('[data-tg="sliderBox"]');
sliderELe.forEach((element) => {
    const container = element.querySelector(`[data-tg="slideable"]`);
    let img = element.querySelector(`img`);
    element.style.width = img.clientWidth + "px";
    element.style.height = img.clientHeight + "px";
    const slides = container.children;
    const prevButton = element.querySelector('[data-tg="prev"]');
    const nextButton = element.querySelector('[data-tg="next"]');
    let currentSlideIndex = 0;
    slides[currentSlideIndex].setAttribute("data-tg", "action");
    nextButton.addEventListener("click", () => {
        slides[currentSlideIndex].removeAttribute("data-tg");
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].setAttribute("data-tg", "action");
        container.style.transform = `translateX(-${100 * currentSlideIndex}%)`;
    });
    prevButton.addEventListener("click", () => {
        slides[currentSlideIndex].removeAttribute("data-tg");
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        slides[currentSlideIndex].setAttribute("data-tg", "action");
        container.style.transform = `translateX(-${100 * currentSlideIndex}%)`;
    });
});
});
}
export{sliderActived}
