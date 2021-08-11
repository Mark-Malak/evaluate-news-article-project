import handleSubmit from './js/formHandler'

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resers.scss'
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded ');
    const form = document.getElementById('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        handleSubmit()
    })
});
export { handleSubmit }