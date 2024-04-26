function tabActived(){
let tabContainers = document.querySelectorAll(`[data-tg="tabContainer"]`)
  tabContainers.forEach((tabContainer =>{
    let tabSwitch = tabContainer.querySelectorAll(`[data-tg="tabSwitchs"]>button`);
    let tab = tabContainer.querySelectorAll(`[data-tg="Tabs"]>div`);
    for(let i=0; i<tabSwitch.length; i++){
    tab[0].setAttribute(`data-tab`,``);
    tabSwitch[i].addEventListener('click',function(){
      hideTabs();
      tab[i].setAttribute('data-tab',"");
    })
  function hideTabs(){
    tab.forEach((t=>{
      t.removeAttribute('data-tab');
    }))
  }}
  }))
}
export{tabActived}
