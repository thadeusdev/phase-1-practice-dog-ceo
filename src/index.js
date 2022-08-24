document.addEventListener('DOMContentLoaded', () => {
    let dogBreeds = []

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    const imgContainer = document.getElementById('dog-image-container')
    const dogBreed = document.getElementById('dog-breeds')
    const breedDropdown = document.getElementById('breed-dropdown')

    dogBreed.addEventListener('click', function(event){
        event.target.style.color = '##ec1839'
    })

    breedDropdown.addEventListener('change', function(event){
        const letter = event.target.value
        const filteredBreeds = allBreeds.filter(breed => breed.startsWith(letter))
        dogBreed.innerHTML = createList(filteredBreeds)
    })

    fetch(imgUrl, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(imgData => {
        imgData.message.forEach(imgUrl => {
            imgContainer.innerHTML = `<img src="${imgUrl}">`
        })

        const imgString = imgData.message.map(imgUrl => `<img src='${imgUrl}'>`)
    })
    
    fetch(breedUrl, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(breedData => {
        allBreeds = Object.keys(breedData.message)
        dogBreed.innerHTML = createList(allBreeds)
    })
})

function createList(breedArray){
    const listStringArray = breedArray.map(breed => `<li>${breed}</li>`)
    return listStringArray.join('')
}
