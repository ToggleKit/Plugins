function nestMenu(){
if(typeof menu === "undefined"){
 let menu ={
    selector : `[data-tg="nestMenu"]`,
    firstBreaker: `_`,
    secondBreaker: `__`,
  }
 let menuEle = document.querySelector(menu.selector);
if(menuEle){
let ul = document.createElement("ul");
let liTag = menuEle.querySelectorAll("li");
for (var i = 0; i < liTag.length; i++) {
  let liText = liTag[i].textContent;
if (liText.startsWith(menu.firstBreaker)) {
let previousLiTag = liTag[i].previousElementSibling;
let previousLiTagText= previousLiTag.textContent;
if(previousLiTagText.charAt(0) !== menu.firstBreaker){
previousLiTag.classList="on-sub";
previousLiTag.appendChild(liTag[i]);
  if (liText.startsWith(menu.secondBreaker)) {
  let secondNestPreviusLiTag = liTag[i].previousElementSibling;
  liTag[i].classList="drop-2"
  if(secondNestPreviusLiTag.textContent.charAt(1)!== menu.firstBreaker){
    let ul= document.createElement("ul");
    ul.classList="sub-sub-menu"
    secondNestPreviusLiTag.classList="drop-1";
    secondNestPreviusLiTag.appendChild(ul);
  }}}}}
var homeLinks = document.querySelectorAll(".on-sub>a");
for (var i = 0; i < homeLinks.length; i++) {
  var homeLink = homeLinks[i];
  var homeItem = homeLink.parentElement;
  var newUl = document.createElement("ul");
  newUl.classList="sub-menu"
  var otherItems = homeItem.querySelectorAll("li");
  for (var j = 0; j < otherItems.length; j++){
    var otherItem = otherItems[j];
    newUl.appendChild(otherItem);}
  homeItem.appendChild(newUl);}
  
  var nmElements = document.getElementsByClassName("drop-1");
for (var i = 0; i < nmElements.length; i++) {
  var nextSibling = nmElements[i].nextElementSibling;''
  while (nextSibling && nextSibling.classList.contains("drop-2")) {
    nmElements[i].querySelector("ul").appendChild(nextSibling);
    nextSibling = nmElements[i].nextElementSibling;  }}
let links = document.querySelectorAll(`${menu.selector} a`);
    for (let link of links) {
      let text = link.textContent;
      let newText = text.replace(new RegExp(menu.firstBreaker, "g"), "");
      link.textContent = newText;} 
let onSubs = document.querySelectorAll('.on-sub');
for (let i = 0; i < onSubs.length; i++) {
  if (onSubs[i]) {
    onSubs[i].querySelector('a').href = 'javascript:void(0)';

    onSubs[i].addEventListener('click', function(event) {
  event.stopPropagation();
if(onSubs[i].querySelector('.sub-menu').classList.contains("show")){
      removeSM();
}else{
      removeSM();
      onSubs[i].querySelector('a').classList.add('On');
      onSubs[i].querySelector('.sub-menu').classList.add('show');
}
document.addEventListener("click", function(events) {
if (!onSubs[i].contains(events.target)) {
removeSM()}})

})
    let drop1 = onSubs[i].querySelectorAll('.drop-1');
for(let d=0; d<drop1.length; d++){
    drop1[d].querySelector('a').href = 'javascript:void(0)';
drop1[d].addEventListener('click', function(event) {
  event.stopPropagation();
if(drop1[d].querySelector('.sub-sub-menu').classList.contains("show")){
    removeSSM();
}else{
      removeSSM();
      drop1[d].querySelector('a').classList.add('active');
      drop1[d].querySelector('.sub-sub-menu').classList.add('show')}
})}}}
function removeSM(){
let subMenu = document.querySelectorAll('.sub-menu');
for(let sm = 0; sm<subMenu.length; sm++){
subMenu[sm].classList.remove("show")
}
let onSub = document.querySelectorAll('.on-sub>a')
for(let os = 0; os<onSub.length; os++){
onSub[os].classList.remove("On");
}}
function removeSSM(){
let subSubMenu = document.querySelectorAll('.sub-sub-menu');
for(let ssm = 0; ssm<subSubMenu.length; ssm++){
subSubMenu[ssm].classList.remove("show")
}
let allDrop1 = document.querySelectorAll('.drop-1>a');
for(let d1i =0; d1i<allDrop1.length; d1i++){
allDrop1[d1i].classList.remove('active')
}}}
}else{
menu.selector = menu.selector || '[data-tg="nestMenu"]';
menu.firstBreaker = menu.firstBreaker || '_';
menu.secondBreaker = menu.secondBreaker || '__';
let menuEle = document.querySelector(menu.selector);

if(menuEle){
let ul = document.createElement("ul");
let liTag = menuEle.querySelectorAll("li");
for (var i = 0; i < liTag.length; i++) {
  let liText = liTag[i].textContent;
if (liText.startsWith(menu.firstBreaker)) {
let previousLiTag = liTag[i].previousElementSibling;
let previousLiTagText= previousLiTag.textContent;
if(previousLiTagText.charAt(0) !== menu.firstBreaker){
previousLiTag.classList="on-sub";
previousLiTag.appendChild(liTag[i]);
  if (liText.startsWith(menu.secondBreaker)) {
  let secondNestPreviusLiTag = liTag[i].previousElementSibling;
  liTag[i].classList="drop-2"
  if(secondNestPreviusLiTag.textContent.charAt(1)!== menu.firstBreaker){
    let ul= document.createElement("ul");
    ul.classList="sub-sub-menu"
    secondNestPreviusLiTag.classList="drop-1";
    secondNestPreviusLiTag.appendChild(ul);
  }}}}}
  
var homeLinks = document.querySelectorAll(".on-sub>a");
for (var i = 0; i < homeLinks.length; i++) {
  var homeLink = homeLinks[i];
  var homeItem = homeLink.parentElement;
  var newUl = document.createElement("ul");
  newUl.classList="sub-menu"
  var otherItems = homeItem.querySelectorAll("li");
  for (var j = 0; j < otherItems.length; j++){
    var otherItem = otherItems[j];
    newUl.appendChild(otherItem);}
  homeItem.appendChild(newUl);}
  
  var nmElements = document.getElementsByClassName("drop-1");
for (var i = 0; i < nmElements.length; i++) {
  var nextSibling = nmElements[i].nextElementSibling;''
  while (nextSibling && nextSibling.classList.contains("drop-2")) {
    nmElements[i].querySelector("ul").appendChild(nextSibling);
    nextSibling = nmElements[i].nextElementSibling;  }}
let links = document.querySelectorAll(`${menu.selector} a`);
    for (let link of links) {
      let text = link.textContent;
      let newText = text.replace(new RegExp(menu.firstBreaker, "g"), "");
      link.textContent = newText;} 
let onSubs = document.querySelectorAll('.on-sub');
for (let i = 0; i < onSubs.length; i++) {
  if (onSubs[i]) {
    onSubs[i].querySelector('a').href = 'javascript:void(0)';

    onSubs[i].addEventListener('click', function(event) {
  event.stopPropagation();
if(onSubs[i].querySelector('.sub-menu').classList.contains("show")){
      removeSM();
}else{
      removeSM();
      onSubs[i].querySelector('a').classList.add('On');
      onSubs[i].querySelector('.sub-menu').classList.add('show');
}
document.addEventListener("click", function(events) {
if (!onSubs[i].contains(events.target)) {
removeSM()}})
})
    let drop1 = onSubs[i].querySelectorAll('.drop-1');
for(let d=0; d<drop1.length; d++){
    drop1[d].querySelector('a').href = 'javascript:void(0)';
drop1[d].addEventListener('click', function(event) {
  event.stopPropagation();
if(drop1[d].querySelector('.sub-sub-menu').classList.contains("show")){
    removeSSM();
}else{
      removeSSM();
      drop1[d].querySelector('a').classList.add('active');
      drop1[d].querySelector('.sub-sub-menu').classList.add('show')}
})}}
}
function removeSM(){
let subMenu = document.querySelectorAll('.sub-menu');
for(let sm = 0; sm<subMenu.length; sm++){
subMenu[sm].classList.remove("show")
}
let onSub = document.querySelectorAll('.on-sub>a')
for(let os = 0; os<onSub.length; os++){
onSub[os].classList.remove("On");
}}
function removeSSM(){
let subSubMenu = document.querySelectorAll('.sub-sub-menu');
for(let ssm = 0; ssm<subSubMenu.length; ssm++){
subSubMenu[ssm].classList.remove("show")
}
let allDrop1 = document.querySelectorAll('.drop-1>a');
for(let d1i =0; d1i<allDrop1.length; d1i++){
allDrop1[d1i].classList.remove('active')
}}}}}
export{nestMenu}
