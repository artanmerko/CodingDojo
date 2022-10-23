var count = 0;

var countElement = document.querySelector('#like');
console.log(countElement);

function increase() {
  count++;
  console.log(count);
  countElement.innerText = count + ' like(s)';
}