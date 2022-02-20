console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', (event) => {
  let dogImageContainer = document.getElementById('dog-image-container')
  let dogUL = document.querySelector("#dog-breeds")
  //chellenge1
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => {
    return response.json()
  })
  .then(function(jsonObject){
      let arrOfDogURLs = jsonObject.message
      arrOfDogURLs.forEach(url => {
        dogImageContainer.innerHTML += makeImageTagString(url)
      })
  })
//challenge2 
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => {
    return response.json()
  })
  .then(response =>{
    let dogBreedsArray = Object.keys(response.message)
    dogBreedsArray.forEach((breed) => {
      dogUL.innerHTML += `<li> ${breed} </li>`
    })
  })

  //challenge3
dogUL.addEventListener("click", (event) => {
  if (event.target.tagName === "LI"){
    event.target.style.color = "pink"
  }
})
//challenge4
let dogSelect = document.getElementById('breed-dropdown')
dogSelect.addEventListener("change", () => {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => {
    return response.json()
  })
  .then(response => {
    let dogBreedsArray = Object.keys(response.message)
    let filteredArray = dogBreedsArray.filter(breed => {
      return breed.startsWith(event.target.value)
    })
    
    dogUL.innerHTML = ""
    filteredArray.forEach((breed) => {
      dogUL.innerHTML += `<li data-info="breed"> ${breed} </li>`
    })
  })
  
})
 })


 function makeImageTagString(url){
    return `<img src="${url}"/>`
 }