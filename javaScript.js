const openModalLink = document.querySelector('[data-modal-target]')
const closeModalButton = document.querySelector('[data-close-button]')

openModalLink.addEventListener('click', () => {
const modal = document.querySelector(openModalLink.dataset.modalTarget)
openModal(modal)
}
)

closeModalButton.addEventListener('click', () => {
    const modal = document.getElementById('categoryModal')
    closeModal(modal)
    })

function openModal(modal){
    modal.classList.add('activate')
}

function closeModal(modal){
    modal.classList.remove('activate')
}