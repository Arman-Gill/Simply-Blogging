
const openModalLink = document.querySelector('[data-modal-target]')
const closeModalButton = document.querySelector('[data-close-button]')
const allInDevelopmentLinks = document.querySelectorAll('a')

allInDevelopmentLinks.forEach(link =>{

    if (link != openModalLink){
        link.addEventListener('click', ()=>{
            alert('Sorry! This page or utility is under development.')
        })
    
    }
})

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