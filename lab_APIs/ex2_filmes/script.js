// Filtrar e Mapear Dados de Filmes
// API: OMDb API (https://www.omdbapi.com)
//   Crie uma função que faça uma requisição para buscar um filme pelo título.
//  Armazene o resultado em um array de filmes e use .map() para criar uma lista com apenas título, ano e diretor.

// Use .filter() para exibir apenas os filmes lançados depois do ano 2000.

// Envie a URL para o site funcionando com a resposta
// (2 Pontos)
let btn = document.querySelector('#search')
btn.addEventListener('click', () => {
    // Captura o valor do input sempre que o botão for clicado
    let entrada = document.querySelector('#userInput').value;
    entrada = entrada.replaceAll(" ", "+");
    pesquisarTitulo(entrada);
});

let arrayFilmes = []

function pesquisarTitulo(titulo) {
    let xhr = new XMLHttpRequest()
    
    xhr.open("GET", `https://www.omdbapi.com/?apikey=4f4a6651&t=${titulo}`) //tratar a futura variável para adicionar + nos espaços brancos
    xhr.send()
    
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200 ){
            arrayFilmes = this.responseText // arrayFilmes segura os dados de retorno
            console.log(arrayFilmes) //mostra os dados da api pra ver se deu merda
            arrayFilmes = JSON.parse(arrayFilmes) //passa o json pra objeto js

            let listaTratada2 = []
            Object.keys(arrayFilmes).forEach((key) => { 
                if (key === "Title" || key === "Year" || key === "Director"){
                    listaTratada2.push(arrayFilmes[key]) //gambiarra
                } 
                
            })
            let enfiarNaDom = `Titulo: ${listaTratada2[0]} 
            Ano: ${listaTratada2[1]}
            Diretor: ${listaTratada2[2]}` //ok!
            
            let p = document.createElement('p')
            let corpo = document.querySelector('body')
            p.textContent = enfiarNaDom
            corpo.appendChild(p)
        }
    }
}



//http://www.omdbapi.com/?apikey=4f4a6651& colocar colchetes entre a api se n funfar

//http:www.omdbapi.com/?apikey=4f4a6651&t=breaking+bad pronto */