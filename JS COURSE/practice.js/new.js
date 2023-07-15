const getButton = document.getElementById('dogButton')
const dogImage = document.getElementById('dogImage')
const newName = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            dogImage.innerHTML = `<img src='${json.message}'>`
        })
}
getButton.onclick = () => newName();