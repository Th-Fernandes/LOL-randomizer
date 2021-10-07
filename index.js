import { championsList} from "./data/champions.js";

const configs = {
    //sorteia um campeao aleatorio
    sortChamp() {
        const result = championsList[Math.round(Math.random() * championsList.length)]

        while(result == championsList.length) {
            result = championsList[Math.round(Math.random() * championsList.length)]
        }

        return result
    },

    printResults() {
        const champion = configs.sortChamp()

        document.querySelector('.champions-data').innerHTML = `
        <h1 class="champion-name">${champion.name}</h1>
        <img src="${champion.image}" alt="champion image" class="champion-image">
        `
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
    hide() {
        document.querySelector('.choose-lol').addEventListener('click', () => {
            document.querySelector('.main-menu').style.transition = "1.5s all"
            document.querySelector('.main-menu').style.opacity = 0;
            document.querySelector('.main-menu').style.visibility = "hidden"
        })
    }
}

export { configs, mainMenu }

//console.log(sortChamp())