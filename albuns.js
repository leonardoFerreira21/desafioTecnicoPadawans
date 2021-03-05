var div2 = document.getElementById("idAlbum");
        var cont = 0;
        var div3 = document.getElementById("btn2").addEventListener("click",getPost);

        function getPost(){
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res)=>{
                return res.json()
            })
            .then((post)=>{
                for(let index = 0; index < 100; index++){
                    div2.innerHTML+= `
                    <div class="card col-3 m-1 mx-auto">
                    <img class="card-img-top" src="${post[cont].thumbnailUrl}">
                    <div class= "card-body">
                    <h5 class="card-title">ID:${post[cont].id}</h5>
                    <p class="card-text">TITLE:${post[cont].title}</p>
                    </div>
                    </div>
                    `
                    cont=cont+1;
                }   
            })
            .catch((error)=>{
                console.log(error);
            });
        }