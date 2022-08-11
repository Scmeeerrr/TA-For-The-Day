/**
 * This student is trying to diplay the name, number, and picture of
 * whatever pokemon the user puts in the search bar, right now all they
 * are gitting is a 404 error. Look up the documentation for the Pokemon API
 * and help this student finish their project.
 * 
 * https://pokeapi.co/
 */




let searchBar = document.getElementById("search")
let searchButn = document.getElementById("search_butn")
let titleContainer = document.getElementById("pokemon_title")
let picContainer = document.getElementById("pokemon_pic")


searchButn.onclick = searchPokemon()

function searchPokemon(event) {
    event.preventDefault()
    let url = `https://pokeapi.co/api/v2/pokemon/${searchBar}`
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            picContainer.innerHTML = ""
            let img = document.createElement("image")
            img.src = data.picture
            picContainer.appendChild(img)
            titleContainer.innerHTML = data.name + "#" + data.number
        })

    }