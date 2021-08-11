import handleSubmit from './js/formHandler'

//To DOOOOOOOOOO import ur styles 
import './styles/style.scss'
 
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded ');
    const form = document.getElementById('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        handleSubmit()
    })
});
export { handleSubmit }