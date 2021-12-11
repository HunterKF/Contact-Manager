const openModalButtons = document.querySelectorAll('[data-modal1-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button1]');

const overlay = document.getElementById('overlay');
 
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal1 = document.querySelector(button.dataset.modal1Target)
    openModalButtons(modal1)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal1 = button.closest('.modal1')
    closeModalButtons(modal1)
  })
})

function openModal(modal1) {
  if (modal1 == null) return
  modal1.classList.add('active')
  overlay.classList.add('active')
}
function closeModal(modal1) {
  if (modal1 == null) return
  modal1.classList.remove('active')
  overlay1.classList.remove('active')
}
console.log('Hello, how are you?')