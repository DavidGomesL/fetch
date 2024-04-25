fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    let body = document.querySelector("body")
    for (let index = 0; index < data.results.length; index++) {
        let row = document.createElement("div")
        row.innerHTML = `
        <div class="card" style="width: 18vw;">
                            <img id="cardImg" class="card-img-top" src="${data.results[index].image}" alt="Card image cap">
                            <div class="card-body">
                            <div class="card-body">
                            <h5 class="card-title">${data.results[index].name}</h5>
                            <p class="card-text"></p>   
  </div>
                            </div>
        </div>                    
        `
        
        body.appendChild(row)
        
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