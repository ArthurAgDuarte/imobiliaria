// alert("Buenas")

// app.js


// Link do "Banco de Dados" online
const urlAPI = 'https://66a29be8967c89168f20a323.mockapi.io/api/users';

// Acessa a API com os dados
fetch(urlAPI)
    // Retorna os dados encontrados e converte para JSON
    .then(resultado => resultado.json())

    // Manipula os dados retornados
    .then(listaImoveis => {
        if (listaImoveis.length == 0) {
            document.querySelector('#imoveis').innerHTML = `Não há imoveis`
        } else {
        criarCardImoveis(listaImoveis);
        }
    })
    .catch(erro => {
        console.error("Erro", erro);
        alert("Não foi possível carregar os dados");
    });

    function criarCardImoveis(listaImoveis){
        listaImoveis.forEach(imovel =>{
            const cardImovel =  document.createElement('article');
            cardImovel.setAttribute('id', imovel.id);
            cardImovel.classList.add('imovel');
            document.querySelector('#imoveis').appendChild(cardImovel);
        //fotos
            const divFoto = document.createElement('div');
            divFoto.classList.add('foto');
            cardImovel.appendChild(divFoto);
        
            const img = document.createElement('img');
            img.setAttribute('src', imovel.fotos[0]);
            divFoto.appendChild(img)
        //conteudo
            const divConteudo = document.createElement('div');
            divConteudo.classList.add('conteudo');
            cardImovel.appendChild(divConteudo);
        
            const titulo = document.createElement('h3');
            titulo.textContent = imovel.titulo;
            divConteudo.appendChild(titulo);
        
            const descricao = document.createElement('p');
            descricao.textContent = imovel.descricao;
            divConteudo.appendChild(descricao);
        
            //info
            const divInfo = document.createElement('div');
            divInfo.classList.add('info');
            cardImovel.appendChild(divInfo);//info no card
        
            const divDados = document.createElement('div');
            divInfo.appendChild(divDados)
        
            const quartos = document.createElement('span')
            quartos.textContent = `Quartos: ${imovel.quartos}\n`;
            divDados.appendChild(quartos)
        
        
            const localizacao = document.createElement('span')
            localizacao.textContent = `Localização: ${imovel.localizacao}\n`;
            divDados.appendChild(localizacao)
        
            const venda_aluguel = document.createElement('span')
            venda_aluguel.textContent = `${imovel.venda_aluguel}\n`;
            divDados.appendChild(venda_aluguel)
        
        
            const area = document.createElement('span')
            area.textContent = `Área: ${imovel.area} m²`;
            divDados.appendChild(area)
        
        
            const divValor = document.createElement('div');
            divValor.classList.add('valor-imovel')
            divValor.textContent = `${imovel.valor.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}`;
            divInfo.appendChild(divValor)
            
        
        
        
        
        
        })
    }

