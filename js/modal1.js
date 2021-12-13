console.log('Hello, how are you?');
const openModalButtons1 = document.querySelectorAll('[data-modal1-target]');
const closeModalButtons1 = document.querySelectorAll('[data-modal1-close]');

const overlay = document.getElementById('overlay1');
 

openModalButtons1.forEach(button => {
  button.addEventListener('click', () => {
    console.log('Hello from openModalButtons1');
    const modal = document.querySelector(button.dataset.modal1Target);
    openModal(modal);
  })
})

closeModalButtons1.forEach(button => {
  console.log('Hello from closeModalButtons1');
  button.addEventListener('click', () => {
    const modal = button.closest('.modal1');
    closeModal(modal);
  })
})
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal1.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
