'use strict'

import { pesquisaCachorro } from "./dogapi.js"

const criarImg = (endImg) => {
    const img = document.createElement('img')
    img.src = endImg
    return img
}
const pesquisar = async () => {
    const raca = document.getElementById('raca').value
    const imagens = await pesquisaCachorro(raca)
    const galeria = document.getElementById('galeria')
    const tagImg = imagens.map(criarImg)
    galeria.replaceChildren(...tagImg)
}
const handleKeypress = (event) => {
    if (event.key == 'Enter') {
        pesquisar()
    }

}

document.getElementById('raca').addEventListener('keypress', handleKeypress)