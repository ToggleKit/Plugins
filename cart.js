function cartActived(){
  let cart = document.querySelector(`[data-tg="cart"]`);
  let cartItems = document.querySelectorAll(`[data-tg="cItem"]`);
  let itemsInCart = JSON.parse(localStorage.getItem(`itemsInCart`)) || [];
  let btnTxt = {};
  if(cartItems){
    if(cart){
  cartItems.forEach(function(cartItem){
    let id =  cartItem.id;
    let cAdd = cartItem.querySelector(`[data-tg="cAdd"]`);
    let cURL = cartItem.querySelector(`[data-tg="cURL"]`).href;
    let cImg = cartItem.querySelector(`[data-tg="cImg"]`).src;
    let cTitle = cartItem.querySelector(`[data-tg="cTitle"]`).textContent;
    function btnStatus(itemsInCart){
    let itemIndex = itemsInCart.findIndex(item => item.id === id);
      if (itemIndex == -1) {
        btnTxt.btn= "Add"
      } else {
        btnTxt.btn="Remove"
      }
      cAdd.textContent=btnTxt.btn;
    }
    btnStatus(itemsInCart)
    
    cAdd.addEventListener(`click`, function(){

      let itemIndex = itemsInCart.findIndex(item => item.id === id);
      if(itemIndex !== -1){
          itemsInCart.splice(itemIndex, 1);
          itemsInCart = itemsInCart.filter(function(item) {
          return item.id !== id;
          
      });
          localStorage.setItem(`itemsInCart`, JSON.stringify(itemsInCart));
          updateCart();
         btnStatus(itemsInCart)
      }else{
        
         itemsInCart.push({
           id: id,
           link: cURL,
           src: cImg,
           title: cTitle,
         })
         localStorage.setItem(`itemsInCart`, JSON.stringify(itemsInCart));
         updateCart();
         btnStatus(itemsInCart)
      }
    })
  
  })
function updateCart() {
  cart.innerHTML = "";
  itemsInCart.forEach(function(item) {
    let li = document.createElement(`li`);
    let itemRemoveBtn = document.createElement(`button`);
    li.innerHTML = `<a href="${item.link}"> <h2>${item.title}</h2> <img src="${item.src}" alt="${item.title}"/></a>`;
    li.setAttribute(`data-tg`, `selectedItem`)
    li.id = item.id;
    itemRemoveBtn.setAttribute(`data-tg`, `itemRemoveBtn`)
    itemRemoveBtn.textContent = `Remove`;
    li.appendChild(itemRemoveBtn);
    cart.appendChild(li);
    itemRemoveBtn.addEventListener(`click`, function() {
      itemsInCart = itemsInCart.filter(function(filteredItem) {
        return filteredItem.id !== item.id})
      localStorage.setItem(`itemsInCart`, JSON.stringify(itemsInCart));
      updateCart();
      cartItems.forEach(function(cartItem){
        let id = cartItem.id
        let cAdd = cartItem.querySelector(`[data-tg="cAdd"]`);
        let itemIndex = itemsInCart.findIndex(item => item.id === id);
        if(itemIndex == -1){
          cAdd.textContent = "Add"
        }
      })

    })
})
  let total = document.createElement(`div`);
  total.textContent = `Total Items: ${itemsInCart.length}`;
  cart.appendChild(total);
  }
  updateCart()
  }}}
export{cartActived}
