const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')

let active = 0;
const total = items.length
let timer;

function update(direction){
    document.querySelector('.text.active').classList.remove('active')
}

prevButton.addEventListener('click', function(){
    update(-1)
})
nextButton.addEventListener('click', function(){
    update(1)
})