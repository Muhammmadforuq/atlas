document.querySelectorAll('.search-btn').forEach((btn) => {
 if(btn) {
   btn.addEventListener('click', ()=> {
     document.querySelector('.search').classList.toggle('hidden')
   })
 }
})


// menu functionality
document.querySelector('.menu-btn').addEventListener('click', () => {
 document.querySelector('.menu').classList.toggle('-translate-x-full')
 document.querySelector('.overlay').classList.toggle('hidden')
 document.querySelector('.hamburger').classList.toggle('hidden')
 document.querySelector('.hide').classList.toggle('hidden')
})

document.querySelector('.overlay').addEventListener('click', () => {
 document.querySelector('.menu').classList.toggle('-translate-x-full')
 document.querySelector('.overlay').classList.toggle('hidden')
 document.querySelector('.hamburger').classList.toggle('hidden')
 document.querySelector('.hide').classList.toggle('hidden')
})
