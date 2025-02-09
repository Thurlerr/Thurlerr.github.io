// Função que preenche a ficha de apresentação de um filme
function criarFichaFilme(filme) {
  // Criar um contêiner para o filme
  const filmeDiv = document.createElement('div');
  filmeDiv.classList.add('ficha-filme');
  
  // Criar a estrutura de conteúdo para o filme
  const titulo = document.createElement('h2');
  titulo.innerText = filme.titulo;
  
  const imagem = document.createElement('img');
  imagem.src = filme.figura;
  imagem.alt = `Imagem de ${filme.titulo}`;
  
  const resumo = document.createElement('p');
  resumo.innerText = filme.resumo;

  const classificacao = document.createElement('p');
  classificacao.innerText = `Classificação: ${filme.classificacao}`;
  // Definir cor para a classificação
  if (filme.classificacao <= 14) {
    classificacao.style.backgroundColor = 'green';
  } else if (filme.classificacao <= 17) {
    classificacao.style.backgroundColor = 'yellow';
  } else {
    classificacao.style.backgroundColor = 'red';
  }

  const generos = document.createElement('ul');
  filme.generos.forEach(genero => {
    const li = document.createElement('li');
    li.innerText = genero;
    generos.appendChild(li);
  });

  const elenco = document.createElement('p');
  elenco.innerText = `Elenco: ${filme.elenco.join(', ')}`;

  const opinioes = document.createElement('ul');
  filme.opinioes.forEach(opiniao => {
    const li = document.createElement('li');
    li.innerText = `${opiniao.rating} estrelas - ${opiniao.descricao}`;
    opinioes.appendChild(li);
  });

  // Adicionar todos os elementos à div do filme
  filmeDiv.appendChild(titulo);
  filmeDiv.appendChild(imagem);
  filmeDiv.appendChild(resumo);
  filmeDiv.appendChild(classificacao);
  filmeDiv.appendChild(generos);
  filmeDiv.appendChild(elenco);
  filmeDiv.appendChild(opinioes);
  
  // Retornar o contêiner do filme
  return filmeDiv;
}

// Função que carrega os dados da API e exibe todos os filmes
function carregarDados() {
  fetch('https://rafaelescalfoni.github.io/desenv_web/filmes.json')
    .then(response => response.json())
    .then(data => {
      const catalogo = document.getElementById('catalogo');
      // Limpar o catálogo antes de adicionar os filmes
      catalogo.innerHTML = '';

      // Para cada filme, criar a ficha e adicionar ao catálogo
      data.forEach(filme => {
        const fichaFilme = criarFichaFilme(filme);
        catalogo.appendChild(fichaFilme);
      });
    })
    .catch(error => console.error('Erro ao carregar dados:', error));
}

// Chama a função para carregar os dados assim que a página for carregada
window.onload = carregarDados;
