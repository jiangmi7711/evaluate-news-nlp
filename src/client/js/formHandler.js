const { checkForUrl } = require("./urlChecker");
const fetch = require('node-fetch');

function handleSubmit(event) {
    event.preventDefault()

// check what text was put into the form field

let formText = document.getElementById('name').value;

checkForUrl(formText);

console.log("::: Form Submitted :::");

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
    body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    }
    catch(error) {
      console.log("error", error);
      }
  }

postData('http://localhost:8081/api', {txt: formText}) //http://localhost:8081/api
    .then(function(res) {
        if (res.agreement === undefined && res.confidence === undefined && res.subjectivity === undefined && res.irony === undefined && res.score_tag ===undefined) {
            alert("Please input url!")
        } else {
            document.getElementById('results').innerHTML = `Agreement: ${res.agreement}    Subjectivity: ${res.subjectivity}    Confidence: ${res.confidence}    Irony: ${res.irony}    Score_tag: ${res.score_tag}`;
        }
    })

}

export { handleSubmit }