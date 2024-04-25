fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    let rowCard = document.querySelector(".rowCard")
    for (let index = 0; index < data.results.length; index++) {
        if(index % 4 === 0) {
            let newRow = document.createElement("div");
                        newRow.classList.add("row", "row-cols-1", "row-cols-md-4", "g-4"); // Bootstrap grid classes
                        rowCard.appendChild(newRow);
        }

        let cardCol = document.createElement("div")
        cardCol.classList.add("col"); // Bootstrap column class
        cardCol.innerHTML = `
        <div class="card" style="width: 18vw;">
                            <img id="cardImg" class="card-img-top" src="${data.results[index].image}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${data.results[index].name}</h5>
                                <p class="card-text"></p>  
                            </div> 
        </div>                    
        `
        
        rowCard.lastChild.appendChild(cardCol)
        
    }
})
.catch(error => console.log(error))

/* <tr>
                                <th scope="row">${data.results[index].id}</th>
                                <td>${data.results[index].name}</td>
                                <td>${data.results[index].status}</td>
                                <td>${data.results[index].species}</td>
                                <td>${data.results[index].gender}</td>
                                <td>${data.results[index].origin.name}</td>
                                <td>${data.results[index].location.name}</td>
                            </tr> */