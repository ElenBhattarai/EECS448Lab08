let firstField = document.querySelector('#first')
let secondField = document.querySelector('#second')

let submitBut = document.querySelector('#submit')

submitBut.addEventListener("click", ()=> {
    if(firstField.value.length < 8 || secondField.value.length < 8) {
        alert("The password is less than 8 characters long")
    } else if (firstField.value  != secondField.value) {
        alert("The passwords don't match")
    } else {
        alert("Validation sucessful")
    }
})