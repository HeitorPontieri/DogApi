'use strict'

import { pesquisaCachorro } from "./dogapi.js"

const pesquisar = async ()=>{
    const raca = document.getElementById('raca').value
    console.log(await pesquisaCachorro(raca))
}
const handleKeypress = (event) =>{
    if(event.key == 'Enter'){
        pesquisar()
    }

}
document.getElementById('raca').addEventListener('keypress', handleKeypress )