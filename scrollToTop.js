function scrollToTopActived(){
    const scrollToTop = document.querySelector(`[data-tg="scrollToTop"]`);
if(scrollToTop){
scrollToTop.addEventListener(`click`, function(){
window.scrollTo({
		top: 0,
		left: 0,
		behavior:`smooth`	
})	;			

});
window.addEventListener(`scroll`, function(){
			if (window.pageYOffset &gt;= 200) {
						scrollToTop.classList.add(`active`)
			}
			else{
						scrollToTop.classList.remove(`active`)
			}
});
}}
export{scrollToTopActived}
