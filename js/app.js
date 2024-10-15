// alert("Buenas")

const listaImoveis = [
    {
        id: 1,
        titulo: 'Apart. 3 dorm. Papicu',
        descricao: 'Lindo apartamento de 3 dormitórios localizado num dos melhores bairros de Fortaleza.',
        valor: 500.000,
        area: 90,
        quartos: 3,
        tipo: 'apartamento', // casa, terreno
        localizacao: 'Santos Dummont, Papicu',
        mapa: 'link do maps',
        venda_aluguel: 'venda', // aluguel
        finalidade: 'residencial', // comercial
        fotos: [
            'https://id725a57.s3.amazonaws.com/fotos/i00035801.jpeg', // padrão [0]
            'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://img.freepik.com/fotos-premium/uma-casa-branca-encantadora-com-um-telhado-vermelho-brilhante-e-uma-janela-azul_1258321-339.jpg?w=360',
            'link4',
            'link5',
        ],
        status: true,
    }
]


listaImoveis.forEach(imovel =>{
    const cardImovel =  document.createElement('article');
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
    quartos.textContent = `Quartos: ${imovel.quartos}`;
    divDados.appendChild(quartos)


    const localizacao = document.createElement('span')
    localizacao.textContent = `Localização: ${imovel.localizacao}`;
    divDados.appendChild(localizacao)



    const area = document.createElement('span')
    area.textContent = `Área: ${imovel.area} m²`;
    divDados.appendChild(area)


    const divValor = document.createElement('div');
    divValor.textContent = `R$ ${imovel.valor.toFixed(2)}`;
    divInfo.appendChild(divValor)
    





})