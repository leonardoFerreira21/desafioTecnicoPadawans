async function getResponse(){
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')

    let content = await response.json()
    content = content.splice(0, 10)

    let list = document.querySelector('.idAlbum')

    let key;

    for(key in content){


        
        list.innerHTML+=`
        <div class="card col-3 m-1 mx-auto">
                    <img class="card-img-top" src="${content[key].thumbnailUrl}">
                    <div class= "card-body">
                    <h5 class="card-title">ID:${content[key].id}</h5>
                    <p class="card-text">TITLE:${content[key].title}</p>
                    </div>
                    </div>
        
        
        
        
        
        `
    }
}

getResponse()