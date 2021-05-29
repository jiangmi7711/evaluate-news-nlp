
const fetch = require('node-fetch');
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text-entry').value;
    document.getElementById('results').innerHTML = '';
    document.getElementById('user_input').innerHTML = formText;

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    // POST request to server
    const postData = async (url = '', data = {}) => {

        const options = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        const response = await fetch(url, options);
        try {
            const data = await response.json();
            document.getElementById('results').innerHTML = data.agreement;
        }catch(error) {
            console.log('error', error)
        }
    }

    postData('http://localhost:8081/userInput', {
        userInput: formText
    })
}

export { handleSubmit }
