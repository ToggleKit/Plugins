function modalActived(){
document.querySelectorAll(`[data-tg="modal"]`).forEach((modals=>{
  let sd = modals.querySelector(`[data-tg="shadow"]`);
  let cntr = modals.querySelector(`[data-tg="container"]`);
  let txt = modals.querySelector(`[data-tg="body"]>p`);
  modals.querySelector(`[data-tg="eventer"]`).addEventListener(`click`, function(){
    sd.setAttribute(`data-status`,`active`)
  });
['closer', 'saver', 'canceller'].forEach(function(buttons) {
      modals.querySelector(`[data-tg="${buttons}"]`).addEventListener('click', closeModal);
});
  function closeModal(){
    sd.removeAttribute(`data-status`)
  }
  if(typeof modal === `undefined`){
    sd.style.backgroundColor = `#00000033`;
    cntr.style.backgroundColor = `#fff`;
    cntr.style.maxWidth = `250px`;
    cntr.style.minWidth = `200px`;
    cntr.style.border = `solid 1px #000`;
    cntr.style.borderRadius = `5px`;
    txt.style.textAlign = `justify`;
    txt.style.maxHeight = '200px'
  }else{
      sd.style.backgroundColor = modal.shadow || `#00000033`;
      cntr.style.backgroundColor = modal.container.background || `#fff`;
      cntr.style.maxWidth = modal.container.maxWidth || `250px`;
      cntr.style.minWidth = modal.container.minWidth || `200px`;
      cntr.style.border = modal.container.border || `solid 1px #000`;
      cntr.style.borderRadius = modal.container.borderRadius || `5px`;
      txt.style.textAlign = modal.container.text.textAlign || `justify`;
      txt.style.maxHeight = modal.container.text.maxHeight || `200px`;
  }
}));}
export {modalActived}
