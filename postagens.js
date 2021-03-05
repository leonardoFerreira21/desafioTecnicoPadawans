var table = document.getElementById("result");
        var con = 0;
        var div = document.getElementById("btn").addEventListener("click",getPost);

        function getPost(){

            

            
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                return res.json()
            })
            .then((post)=>{
                for(let index = 0; index < 100; index++){
                    table.innerHTML+= `
                    <tr>
                    <td>${post[con].userId}</td>
                    <td>${post[con].id}</td>
                    <td>${post[con].title}</td>
                    <td>${post[con].body}</td>
                    </tr>   
                    `
                    con=con+1;
                }   
            })
            .catch((error)=>{
                console.log(error);
            });
            
        }