const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')

let active = 0;
const total = items.length
let timer;

prevButton.addEventListener('click', function(){
    alert("prev")
})
nextButton.addEventListener('click', function(){
    alert("NEXT")
})