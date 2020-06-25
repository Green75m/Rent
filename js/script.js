document.querySelector('#burger').addEventListener('click', () => {
  document.querySelector('#burger').classList.toggle('active'),
    document.querySelector('#menu').classList.toggle('active')
})

let stpbl1 = document.getElementById('stepbl1')
let stpbrbr1 = document.getElementById('stepbrbr1')

let stpbl2 = document.getElementById('stepbl2')
let stpbrbr2 = document.getElementById('stepbrbr2')

let stpbl3 = document.getElementById('stepbl3')
let stpbrbr3 = document.getElementById('stepbrbr3')

stpbl1.onmouseover = function () {
  stpbrbr1.style.borderBottom = '3px solid #fff'
}
stpbl1.onmouseout = function () {
  stpbrbr1.style.borderBottom = '3px solid #000'
}

stpbl2.onmouseover = function () {
  stpbrbr2.style.borderBottom = '3px solid #fff'
}
stpbl2.onmouseout = function () {
  stpbrbr2.style.borderBottom = '3px solid #000'
}

stpbl3.onmouseover = function () {
  stpbrbr3.style.borderBottom = '3px solid #fff'
}
stpbl3.onmouseout = function () {
  stpbrbr3.style.borderBottom = '3px solid #000'
}
