function dropDownActived(){
const dropDowns = document.querySelectorAll(`[data-tg="dropDown"]`);
document.addEventListener('click', function(event) {
  if (!Array.from(dropDowns).some(dropDown => dropDown.contains(event.target))) {
    dropDowns.forEach(dropDown => {
      const div = dropDown.querySelector('div');
      div.removeAttribute('data-dropon');
    });
  }
});
dropDowns.forEach(dropDown => {
  const div = dropDown.querySelector('div');
  dropDown.querySelector('button').addEventListener('click', function() {
    if (div.getAttribute('data-dropon') === '') {
      removeAttr()
    } else {
      removeAttr();
      div.setAttribute('data-dropon', '');
    }
  });
});

function removeAttr() {
  document.querySelectorAll(`[data-dropon]`).forEach((d => {
    d.removeAttribute(`data-dropon`);
  }))
}
}
export{dropDownActived}
