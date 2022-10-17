function displayName(elementName) {
  console.log(elementName);
}
displayName();

function turnOff(element) {
  element.innerText = 'Off';
  console.log('Its off')
}

function hide(el) {
  el.remove();
}