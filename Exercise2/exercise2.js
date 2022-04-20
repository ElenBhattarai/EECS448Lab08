let prev = document.querySelector("#prev")
let next = document.querySelector("#next")
let imgs = document.querySelector('#image')

let imgarray = ["first.jpeg", "second.jpeg", "third.png", "fourth.jpeg","fifth.png"]

let cur = 0

next.addEventListener("click", ()=> {
    cur++;
    if(cur == 5) {
        cur = 0
    }
    console.log(cur)
    change(cur)
})

prev.addEventListener("click", ()=> {
    if(cur == 0) {
        cur = 5
    }
    cur--;
    console.log(cur)
    change(cur)  
})

const change = (i) => {
    imgs.setAttribute('src', 'images/'+imgarray[i])
}