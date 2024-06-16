if (localStorage.getItem('autorizacao')) {
    document.body.innerHTML = `
    <header style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background-color: #000000;">
        <div style="display: flex; align-items: center;">
            <img src="botafogo.png" style="height: 60px;" alt="Botafogo Logo">
            <span style="color: white; margin-left: 10px; font-weight: bold; font-size: 1.2em;">BOTAFOGO</span>
        </div>
        <button id="botaologout" style="background-color: white; color: black; border: 2px solid black; border-radius: 8px; padding: 8px 16px; cursor: pointer;">LOGOUT</button>
    </header>
    <div id="conteudo-principal"></div>
`;

    document.getElementById('botaologout').onclick = () => {
        localStorage.removeItem('autorizacao');
        window.location.href = 'index.html';
    };

    let dados = [];

    const att = async (links) => {
        try {
            dados = await pegaDados(links);
            renderAtletas(dados);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    const createButton = (text, onClick) => {
        const button = document.createElement("button");
        button.innerHTML = text;
        button.style.margin = '0 3px';
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.padding = '8px 16px';
        button.style.cursor = 'pointer';
        button.onclick = onClick;
        return button;
    };

    const divPesquisa = document.createElement('div');
    divPesquisa.style.textAlign = 'center';
    divPesquisa.style.padding = '5px';
    divPesquisa.style.position = 'relative';
    divPesquisa.style.display = 'flex';
    divPesquisa.style.justifyContent = 'center';

    const inputPesquisa = document.createElement('input');
    inputPesquisa.type = 'text';
    inputPesquisa.style.width = '300px';
    inputPesquisa.style.padding = '10px 40px 10px 10px';
    inputPesquisa.style.marginTop = '10px';
    inputPesquisa.style.border = '1px solid #ccc';
    inputPesquisa.style.borderRadius = '4px';
    inputPesquisa.style.fontSize = '16px';
    inputPesquisa.placeholder = 'Pesquisar...';
    inputPesquisa.style.color = 'black';
    inputPesquisa.style.backgroundImage = 'url("lupa.png")';
    inputPesquisa.style.backgroundPosition = 'right 10px center';
    inputPesquisa.style.backgroundRepeat = 'no-repeat';
    inputPesquisa.style.backgroundSize = '20px 20px';

    divPesquisa.appendChild(inputPesquisa);
    document.body.appendChild(divPesquisa);

    const divBotoes = document.createElement("div");
    divBotoes.style.display = 'flex';
    divBotoes.style.justifyContent = 'center';
    divBotoes.style.marginTop = '10px';
    divBotoes.style.marginBottom = '10px';
    divBotoes.style.gap = '3px';

    const masculinoButton = createButton("Masculino", () => att(`https://botafogo-atletas.mange.li/2024-1/masculino`));
    const femininoButton = createButton("Feminino", () => att(`https://botafogo-atletas.mange.li/2024-1/feminino`));
    const todosButton = createButton("Todos", () => att(`https://botafogo-atletas.mange.li/2024-1/all`));

    divBotoes.appendChild(masculinoButton);
    divBotoes.appendChild(femininoButton);
    divBotoes.appendChild(todosButton);
    document.body.appendChild(divBotoes);

    const conteudo = document.createElement('div');
    conteudo.style.display = 'flex';
    conteudo.style.flexWrap = 'wrap';
    conteudo.style.justifyContent = 'center';
    conteudo.style.alignItems = 'center';
    conteudo.style.gap = '10px';
    conteudo.innerHTML = 'Carregando...';
    document.body.appendChild(conteudo);

    const montaCard = (entrada) => {
        const card = document.createElement('div');
        card.style.display = 'flex';
        card.style.width = '30rem';
        card.style.height = '20rem';
        card.style.border = 'solid 1px #333';
        card.style.padding = '1rem';
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        card.style.backgroundColor = '#000000';
        card.style.color = '#ffffff';
        card.style.borderRadius = '8px';
        card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';

        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });

        const imgContainer = document.createElement('div');
        imgContainer.style.flex = '1';
        imgContainer.style.display = 'flex';
        imgContainer.style.alignItems = 'center';
        imgContainer.style.justifyContent = 'center';

        const imagem = document.createElement('img');
        imagem.src = entrada.imagem;
        imagem.alt = `Foto de ${entrada.nome}`;
        imagem.style.width = '100%';
        imagem.style.height = '75%';
        imagem.style.objectFit = 'cover';

        const infoContainer = document.createElement('div');
        infoContainer.style.flex = '2';
        infoContainer.style.padding = '0 1rem';
        infoContainer.style.display = 'flex';
        infoContainer.style.flexDirection = 'column';
        infoContainer.style.justifyContent = 'center';

        const nome = document.createElement('h2');
        nome.innerHTML = entrada.nome;
        nome.style.margin = '0';

        const posicao = document.createElement('p');
        posicao.innerHTML = `Posição: ${entrada.posicao}`;
        posicao.style.margin = '0.5rem 0';

        const nascimento = document.createElement('p');
        nascimento.innerHTML = `Nascimento: ${entrada.nascimento}`;
        nascimento.style.margin = '0.5rem 0';

        const detalhes = document.createElement('p');
        detalhes.innerHTML = `Último clube: ${entrada.detalhes}`;
        detalhes.style.margin = '0.5rem 0';

        const detalhesjogador = document.createElement('button');
        detalhesjogador.innerHTML = 'Ver Mais';
        detalhesjogador.onclick = () => {
            const IdJogador = entrada.id;
            window.location.href = `detalhes.html?id=${IdJogador}`;
        };
        detalhesjogador.style.backgroundColor = '#fff';
        detalhesjogador.style.color = '#000';
        detalhesjogador.style.border = 'none';
        detalhesjogador.style.borderRadius = '4px';
        detalhesjogador.style.padding = '5px 10px';
        detalhesjogador.style.cursor = 'pointer';
        detalhesjogador.style.marginTop = '1rem';

        imgContainer.appendChild(imagem);
        infoContainer.appendChild(nome);
        infoContainer.appendChild(posicao);
        infoContainer.appendChild(nascimento);
        infoContainer.appendChild(detalhesjogador);

        card.appendChild(imgContainer);
        card.appendChild(infoContainer);

        return card;
    };

    inputPesquisa.onkeyup = (ev) => {
        const termoPesquisa = ev.target.value.toLowerCase();
        const filtrado = dados.filter((elemento) => {
            const estaNoNome = elemento.nome.toLowerCase().includes(termoPesquisa);
            const estaNaPosicao = elemento.posicao.toLowerCase().includes(termoPesquisa);
            return estaNoNome || estaNaPosicao;
        });

        renderAtletas(filtrado);
    };

    const pegaDados = async (caminho) => {
        try {
            const resposta = await fetch(caminho);
            if (!resposta.ok) {
                throw new Error('Network response was not ok');
            }
            return await resposta.json();
        } catch (error) {
            console.error("Failed to fetch data:", error);
            return [];
        }
    };

    const renderAtletas = (atletas) => {
        conteudo.innerHTML = '';
        atletas.forEach((atleta) => {
            conteudo.appendChild(montaCard(atleta));
        });
    };

    att(`https://botafogo-atletas.mange.li/2024-1/all`);
} else {
    console.log('Você não está autorizado!');

    document.body.innerHTML = `
    <div id="login-container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; height: auto; background-color: #000000; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); text-align: center;">
        <img src="botafogo.png" style="width: 100%; max-width: 100%; height: auto; display: block; margin: 0 auto 20px;" alt="Botafogo Logo">
        <div style="text-align: center; margin-bottom: 20px;">
            <input id="senha" class="form-content" type="password" placeholder="Digite a senha" style="padding: 10px; border-radius: 4px; width: 100%; box-sizing: border-box;">
        </div>
        <div style="text-align: center;">
            <button id="botaologin" style="background-color: white; color: black; border: 2px solid black; border-radius: 8px; padding: 8px 16px; cursor: pointer;">LOGIN</button>
        </div>
        <p style="text-align: center; margin-top: 10px; font-size: 14px; color: #888;">Senha: EduMangeli</p>
    </div>
`;

    const loginContainer = document.getElementById('login-container');

    const adjustForMobile = () => {
        if (window.innerWidth <= 768) {
            loginContainer.style.width = '90%';
            loginContainer.style.padding = '20px 10px';
        } else {
            loginContainer.style.width = '300px';
            loginContainer.style.padding = '20px';
        }
    };

    window.addEventListener('resize', adjustForMobile);
    adjustForMobile(); 

    const hashArmazenado = "5606ec6c144aeb2e8debc981597f31c5b7e37497f095c1b46e4cd59dd8fb0a7a";

    async function hex_sha256(s) {
        const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    document.getElementById('botaologin').onclick = async () => {
        const senha = document.getElementById('senha').value;
        const hashSenha = await hex_sha256(senha);

        if (hashSenha === hashArmazenado) {
            localStorage.setItem('autorizacao', true);
            window.location.href = 'index.html';
        } else {
            alert('Senha incorreta!');
        }
    };
}
