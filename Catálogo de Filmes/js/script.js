const apiKey = 'd8a20ebd';
const form = document.querySelector('form');
const lista = document.querySelector('.lista');

// Função principal de pesquisa
form.onsubmit = async (e) => {
  e.preventDefault();
  const termo = e.target.pesquisa.value.trim();
  
  if (!termo) {
    alert('Digite um filme para pesquisar');
    return;
  }

  try {
    // Busca os filmes
    const resposta = await fetch(`https://www.omdbapi.com/?s=${termo}&apikey=${apiKey}`);
    const dados = await resposta.json();
    
    if (dados.Response === 'False') {
      alert(dados.Error || 'Nenhum filme encontrado');
      return;
    }
    
    mostrarFilmes(dados.Search);
  } catch (erro) {
    console.error('Erro:', erro);
    alert('Erro ao buscar filmes');
  }
};

// Mostra a lista de filmes
function mostrarFilmes(filmes) {
  lista.innerHTML = '';
  
  filmes.forEach(filme => {
    const item = document.createElement('div');
    item.className = 'item';
    
    item.innerHTML = `
      <img src="${filme.Poster !== 'N/A' ? filme.Poster : 'https://via.placeholder.com/200x300/6a0dad/ffffff?text=Sem+Poster'}" 
           alt="${filme.Title}">
      <h2>${filme.Title} (${filme.Year})</h2>
      <p>${filme.Type === 'movie' ? 'Filme' : 'Série'}</p>
    `;
    
    item.onclick = () => mostrarDetalhes(filme.imdbID);
    lista.appendChild(item);
  });
}

// Mostra detalhes do filme
async function mostrarDetalhes(id) {
  try {
    const resposta = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
    const filme = await resposta.json();
    
    const modal = `
      <div class="modal">
        <div class="modal-conteudo">
          <h2>${filme.Title} (${filme.Year})</h2>
          <img src="${filme.Poster !== 'N/A' ? filme.Poster : 'https://via.placeholder.com/300x450/6a0dad/ffffff?text=Sem+Poster'}" 
               alt="${filme.Title}">
          <p><strong>Sinopse:</strong> ${filme.Plot !== 'N/A' ? filme.Plot : 'Não disponível'}</p>
          <p><strong>Diretor:</strong> ${filme.Director !== 'N/A' ? filme.Director : 'Não disponível'}</p>
          <button onclick="this.parentElement.parentElement.remove()">Fechar</button>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modal);
  } catch (erro) {
    console.error('Erro:', erro);
    alert('Erro ao carregar detalhes');
  }
}