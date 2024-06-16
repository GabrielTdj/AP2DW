if (localStorage.getItem('autorizacao')) {
    document.body.innerHTML = `
        <div id="atleta-details"></div>
    `;

    document.addEventListener('DOMContentLoaded', async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const atletaId = parseInt(urlParams.get('id'), 10);
        const atletaDetails = document.getElementById('atleta-details');

        if (isNaN(atletaId) || atletaId <= 0 || atletaId > 60) {
            atletaDetails.innerHTML = '<p>ID do atleta inválido.</p>';
            return;
        }

        try {
            const response = await fetch(`https://botafogo-atletas.mange.li/2024-1/${atletaId}`);
            if (!response.ok) {
                throw new Error('Falha de Internet');
            }
            const data = await response.json();
            atletaDetails.innerHTML = `
                <div class="atleta-card">
                    <img src="${data.imagem}" alt="${data.nome}" class="atleta-img">
                    <div class="atleta-info">
                        <h2>${data.nome}</h2>
                        <p>Detalhes: ${data.detalhes}</p>
                        <p>Posição: ${data.posicao}</p>
                        <p>Jogos: ${data.n_jogos}</p>
                        <p>Altura: ${data.altura}</p>
                        <p>Nascimento: ${data.nascimento}</p>
                        <p>Naturalidade: ${data.naturalidade}</p>
                        <p>No Botafogo desde: ${data.no_botafogo_desde}</p>
                        
                        <p>Elenco: ${data.elenco}</p>

                    </div>
                </div>
                <button id="back-button" class="back-button">Voltar</button>
            `;

            const style = document.createElement('style');
            style.innerHTML = `
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #f0f0f0;
                }

                #atleta-details {
                    width: 100%;
                    max-width: 1000px; 
                    padding: 20px;
                }

                .atleta-card {
                    display: flex;
                    flex-direction: row; /* Default horizontal layout */
                    align-items: center;
                    background-color: #000; 
                    color: #fff; 
                    padding: 40px; 
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    margin-bottom: 20px; 
                }

                .atleta-img {
                    flex: 0 0 auto;
                    width: 35%; 
                    height: 35%; 
                    margin-right: 30px; 
                    object-fit: contain; 
                }

                .atleta-info {
                    flex: 1 1 auto;
                }

                .atleta-info h2 {
                    margin-top: 0;
                    font-size: 2em; 
                }

                .atleta-info p {
                    margin: 10px 0; 
                    font-size: 1.2em; 
                }

                .back-button {
                    background-color: #fff; 
                    color: #000; 
                    border: 1px solid #000;
                    padding: 10px 20px; 
                    font-size: 1em; 
                    cursor: pointer; 
                    border-radius: 5px; 
                }

                .back-button:hover {
                    background-color: #f0f0f0; 
                }

                @media (max-width: 768px) {
                    .atleta-card {
                        flex-direction: column; /* Vertical layout for smaller screens */
                        align-items: center;
                    }

                    .atleta-img {
                        width: 100%; 
                        height: auto; 
                        margin-bottom: 20px; 
                    }

                    .atleta-info {
                        text-align: center;
                    }
                }
            `;
            document.head.appendChild(style);

            const backButton = document.getElementById('back-button');
            backButton.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        } catch (error) {
            atletaDetails.innerHTML = '<p>Erro ao carregar os detalhes do atleta.</p>';
        }
    });
} else {
    window.location.href = 'index.html';
}
