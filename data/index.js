const array = ['Paris', 'Lyon', ['Montréal', 'Alger'], 'Bordeaux']
//console.log(array[2][4])


for (i = 0; i < array.length; i++) {
    console.log(array[i]) // parcours d'un tableau par la boucle for
    console.log(typeof array[i]) // pour récupérer le type d'un tab
}


// tri d'un tableau
const numbers = [25, 14, 64, 1, 8]
console.log(numbers.sort())

/*************************************************** */



const input = document.getElementById('input') //on récupere la valeur des l'input 
const video = document.getElementById('video')
let link = "" // une variable link qui est vide au départ

input.addEventListener("input", (e) => { // on ajoute un écouteur d'évenement 
    transformLink(e.target.value) // on transforme lacible en remplacant  le watch en embed

    if (link) {  // petite condition de merde ne pas oublier les template string touche 7
        video.innerHTML = `<iframe width="560" height="315" src=${link} title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe >`
    } else {
        video.innerHTML = "<h1> ceci n'est pas une vidéo </h1>"
    }
})

const transformLink = (linkToChange) => {
    let embed = linkToChange.replace('watch?v=', "embed/") // equivalent d'un string replace en php
    link = embed.split('&')[0] // on split la chaine après le & dans le lien
}

console.log(link)

// src="https://www.youtube.com/embed/QB1DTl7HFnc"