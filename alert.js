function alertActived(){
  const alertDivs = document.querySelectorAll(`[data-tg="alert"]`);
alertDivs.forEach((alertDiv => {
  alertDiv.querySelector(`button`).addEventListener(`click`, function() {
    alertDiv.style.display = `none`
  })
}))
}
export{alertActived};
