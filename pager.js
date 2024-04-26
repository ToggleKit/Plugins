function pagerActived(){
const pagers = document.querySelectorAll(`[data-tg="pager"]`);
pagers.forEach((pager =>{
  const  div = document.createElement(`div`);
  div.setAttribute(`data-tg`, `numberDiv`)
  const pages = pager.querySelectorAll(`[data-page]`);
  pages[0].setAttribute(`data-pageon`,``)
  for(let i=0; i<pages.length; i++){
    const button = document.createElement(`button`);
    button.setAttribute(`data-tg`,`pageNumber`)
    button.textContent = `Page ${i+1}`;
    div.appendChild(button);
  }
  pager.appendChild(div);
  const buttons = pager.querySelectorAll(`[data-tg="pageNumber"]`);
  buttons.forEach((button, i) =>{
    button.addEventListener(`click`, function(){
      const pages = pager.querySelectorAll(`[data-page]`);
      pages.forEach((page =>{
        page.removeAttribute(`data-pageon`)
      }))
      pages[i].setAttribute(`data-pageon`, ``);
    }
)})}))}
export{pagerActived}
