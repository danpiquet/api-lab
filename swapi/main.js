// const { default: axios } = require("axios")
let button = document.querySelector('#button')
const buttonClick = async () => {
    let request = await axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    let residents = request.data.results[0].residents
    for(let i=0;i<residents.length;i++){
        let body = document.querySelector('body')
        let resRequest = await axios.get(residents[i])
        let name = resRequest.data.name
        console.log(name)
        let h2 = document.createElement('h2')
        h2.textContent = name
        body.appendChild(h2)
    }
}

button.addEventListener('click',buttonClick)