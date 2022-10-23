var count1 = 0;
var count2 = 0;
var count3 = 0;

var countElement1 = document.querySelector('.number-1')
var countElement2 = document.querySelector('.number-2')
var countElement3 = document.querySelector('.number-3')

function increase1() {
  count1++;
  console.log(`Neil M has ${count1} like(s)`);
  countElement1.innerText = count1 + ' like(s)';
}

function increase2() {
  count2++;
  console.log(`Nichile K has ${count2} like(s)`);
  countElement2.innerText = count2 + ' like(s)';
}

function increase3() {
  count3++;
  console.log(`Jim R has ${count3} like(s)`);
  countElement3.innerText = count3 + ' like(s)';
}


