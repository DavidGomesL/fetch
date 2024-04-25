//primeira forma de trabalhar com fetch
fetch("https://rickandmortyapi.com/api/character") //Pega a API
.then(Response => Response.json())//Converte em JSON
.then(data => {//Cria os dados para pecorrer os dados da API
    let rowCard = document.querySelector(".rowCard") //Seleciona a div containerCard, fixa no HTML
    //For: pecorre os dados dos arrays em loop
    for (let index = 0; index < data.results.length; index++) {
        if(index % 4 === 0) { //Condiciona 4 cards por linha
            let newRow = document.createElement("div"); //Cria nova div dentro da div containerCard, fixa do html
                        newRow.classList.add("row", "row-cols-1", "row-cols-md-4", "g-4"); //Cria classes que pertencem ao bootstrap grid
                        rowCard.appendChild(newRow); //Aplica a estrutura no containerCard
        }

        let cardCol = document.createElement("div") //Cria uma nova div
        cardCol.classList.add("col"); // Cria classe do bootstrap column
        //cardCol.innerHTML: Vai ser criado o card na div
        cardCol.innerHTML = `
        <div class="card" style="width: 18vw;">
                            <img id="cardImg" class="card-img-top" src="${data.results[index].image}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${data.results[index].name}</h5>
                                <p class="card-text"></p>  
                            </div> 
        </div>                    
        `
        
        rowCard.lastChild.appendChild(cardCol) //adiciona um novo card como um filho na ultima div de coluna na linha cards, para que os cards sejam adicionados sequencialmente a linha conforme eles são gerados.
        
    }
})
.catch(error => console.log(error)) //Interrompe o codigo caso o mesmo apresente erro e mostra a mensagem presente no console.
