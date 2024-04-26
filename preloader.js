function preloderActived(){
window.addEventListener('load', function(){
document.querySelectorAll(`[data-tg="preloader"]`).forEach((preloder=>{
  preloder.style.display = "none";
}))
});
}
export{preloderActived}
