import { championsList} from "./data/champions.js";
import { agentsList } from './data/agents.js';


const configs = {
    typeSelected: undefined,
    //seleciona qul jogo será usado para fazer os sorteios
    type() {
        //seleciona lol
        const selectLol = document.querySelector('.choose-lol').addEventListener('click', () => {
            //puxa os dados do game
            configs.typeSelected = championsList
            // seleciona o nome do jogo
        })
        //seleciona valorant
        const selectValorant = document.querySelector('.choose-valorant').addEventListener('click', () => {
            configs.typeSelected = agentsList
        })
    },
    //sorteia um campeao aleatorio
    sortChamp() {
        const result = configs.typeSelected[Math.round(Math.random() * configs.typeSelected.length)]

        while(result == configs.typeSelected.length) {
            result = configs.typeSelected[Math.round(Math.random() * configs.typeSelected.length)]
        }

        return result
    },

    printResults() {
        const champion = configs.sortChamp()
        const onScreen =  document.querySelector('.champions-data');

        if( configs.typeSelected == championsList) {
            onScreen.innerHTML = `
            <h1 class="champion-name ">${champion.name}</h1>
            <img src="${champion.image}" alt="champion image" class="champion-image lol-design">
            `
       } else {
           // esse local deve ficar o HTML novo onde aparece a nova interface
           //feita para o valorant
           onScreen.innerHTML = `
           <img src="${champion.image}" alt="champion image" class="champion-image valorant-design">
           <h1 class="champion-name">${champion.name}</h1>
           `
       }

       
    },

    printWithAnimation() {
        // faz a animação de mudar o nome e o campeao 10x ao clicar em gerar campeao
        for(let transition = 100; transition <= 1000; transition += 100) {
            setTimeout(configs.printResults, transition)
        }       
    },

    buttonCooldown() {       
         // define o tempo em segundos
        let time = 120;
        // diminui 1 do variavel time a cada 1 segundo
        const timeCount = setInterval(() => time-- , 1000)
        //verifica a cada 20 segundos se o tempo acabou
        setInterval(() => {
            if (time <= 0) { 
                clearInterval(timeCount)
            } 
        }, 120 * 1000)
        //exibe na tela o tempo restante em segundos
        const printResults = setInterval(() => { 
            //seleciona o <p> e exibe os segundos
            let timeLeft = document.querySelector('#timer')
            timeLeft.innerText = `${time}` 
            //quando o tempo acaba, para o timer e para de exibir os segundos
            if(time == 0) {
                clearInterval(printResults)
                timeLeft.innerText = ""
            } 
    }, 1000)

        
        
    }
}

const mainMenu = {
    //seleciona o modal do menu principal no HTML
    menu: document.querySelector('.main-menu'),
    //esconde o menu principal
    toggle() {
        document.querySelector('.choose-lol').addEventListener('click', () => {
            mainMenu.menu.style.opacity = 0;
            mainMenu.menu.style.visibility = "hidden"
        })

        document.querySelector('.choose-valorant').addEventListener('click', () => {
            mainMenu.menu.style.opacity = 0;
            mainMenu.menu.style.visibility = "hidden"
        }) 

        document.querySelector('#accesMenu').addEventListener('click', () => {
            mainMenu.menu.style.opacity = 1;
            mainMenu.menu.style.visibility = "visible"
        }) 
    },
}

export { configs, mainMenu }

//console.log(sortChamp())