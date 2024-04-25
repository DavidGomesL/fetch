// fetch("https://rickandmortyapi.com/api/character")
// .then(Response => Response.json())
// .then(data => {
//     let tbody = document.querySelector("tbody")
//     for (let index = 0; index < data.results.length; index++) {
//         let row = document.createElement("tr")
//         row.innerHTML = `
//                             <tr>
//                                 <th scope="row">${data.results[index].id}</th>
//                                 <td><img src="${data.results[index].image}"/></td>
//                                 <td>${data.results[index].name}</td>
//                                 <td>${data.results[index].status}</td>
//                                 <td>${data.results[index].species}</td>
//                                 <td>${data.results[index].gender}</td>
//                                 <td>${data.results[index].origin.name}</td>
//                                 <td>${data.results[index].location.name}</td>
//                             </tr>                  
//         `
        
//         tbody.appendChild(row)
        
//     }
// })
// .catch(error => console.log(error))

async function getData() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let data = await response.json()

        let tbody = document.querySelector("tbody")
        for (let index = 0; index < data.results.length; index++) {
        let row = document.createElement("tr")
        row.innerHTML = `
                            <tr>
                                <th scope="row">${data.results[index].id}</th>
                                <td><img src="${data.results[index].image}"/></td>
                                <td>${data.results[index].name}</td>
                                <td>${data.results[index].status}</td>
                                <td>${data.results[index].species}</td>
                                <td>${data.results[index].gender}</td>
                                <td>${data.results[index].origin.name}</td>
                                <td>${data.results[index].location.name}</td>
                            </tr>                  
        `
        
        tbody.appendChild(row)
        
    }
    } catch {
        console.log("Error")
    } 
}
getData()