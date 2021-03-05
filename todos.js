var table = document.getElementById("resultTodos");
        var contador = 0;
        var div = document.getElementById("btn3").addEventListener("click",getPost);

        function getPost(){
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res)=>{
                return res.json()
            })
            .then((post)=>{
                for(let index = 0; index < 200; index++){
                    table.innerHTML+= `
                    <tr>
                    <td>${post[contador].userId}</td>
                    <td>${post[contador].id}</td>
                    <td>${post[contador].title}</td>
                    <td>${post[contador].completed}</td>
                    </tr>   
                    `
                    contador=contador+1;
                }   
            })
            .catch((error)=>{
                console.log(error);
            });
            
        }