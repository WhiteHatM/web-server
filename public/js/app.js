const locationField = document.querySelector('form')
const searchElement = document.querySelector('input')
const msgOne = document.querySelector('#msgOne')
const msgTwo = document.querySelector('#msgTwo')


locationField.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = searchElement.value

    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''

    fetch('/weather?address=' + location).then(response => {
        response.json().then((data) => {
            if (data.error) {
                msgOne.textContent = data.error;
                
            }
            else {
                msgOne.textContent = data.location
                msgTwo.textContent = data.forecast
               
            }

        })
    })
})