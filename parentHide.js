function parentHideActived() {
document.querySelectorAll(`[data-tg="parentHide"]`).forEach((parent=>{
parent.querySelector(`button`).addEventListener(`click`,function(){
parent.style.display = "none";})}))
}
export{parentHideActived}
