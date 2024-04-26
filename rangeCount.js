function rangeCountActived(){
const ranges = document.querySelectorAll(`[data-tg="range"]`);
ranges.forEach((range => {
  const rangeCounDiv = document.createElement(`span`);
  rangeCounDiv.textContent = range.value
  range.oninput = (function() {
    rangeCounDiv.textContent = range.value
  })
  range.after(rangeCounDiv)
}))}
export{rangeCountActived}
