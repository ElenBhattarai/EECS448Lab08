let r1 = document.querySelector('#r1')
let g1 = document.querySelector('#g1')
let b1 = document.querySelector('#b1')
let w = document.querySelector('#w')

let r2 = document.querySelector('#r2')
let g2 = document.querySelector('#g2')
let b2 = document.querySelector('#b2')

let submit = document.querySelector('#but')
let paragraph = document.querySelector(".card")

submit.addEventListener("click", ()=> {
    paragraph.style.borderColor =  'rgb(' + r1.value + ',' + g1.value + ',' + b1.value + ')'
    paragraph.style.borderWidth = w.value + 'px'

    paragraph.style.backgroundColor = 'rgb(' + r2.value + ',' + g2.value + ',' + b2.value + ')'
})


