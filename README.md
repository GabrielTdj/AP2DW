# p2-desenvolvimento-web-2024-1

# Objetivo
Reproduzir o comportamento da [página de exemplo](#página-de-exemplo).

# Restrições
✅1. CSS e Javascript devem ser em arquivos separados 
✅2. É preciso usar armazenamento local para viabilizar a solução de autorização 
✅3. A listagem de atletas e a página de detalhes só devem ser acessíveis a usuários autorizados 
✅4. A senha deve estar disponível na página de entrada (é só uma demonstração) :relieved:
✅5. A comparação entre as senhas deve usar um HASH sha256 calculado pela biblioteca da página do [Paj](https:///www.pajhome.org.uk/crypt/md5/scripts.html)
✅6. A página principal deve obter os elencos com chamadas, *obrigatoriamente* 👮, aos end-points: 
   ✅1. `https://botafogo-atletas.mange.li/2024-1/all`
   ✅2. `https://botafogo-atletas.mange.li/2024-1/masculino`
   ✅3. `https://botafogo-atletas.mange.li/2024-1/feminino`
✅7. Sua página deve permitir filtrar a lista de atletas :raised_eyebrow:
✅8. Os dados da página de detalhes devem ser obtidos do end-point `https://botafogo-atletas.mange.li/2024-1/{atleta-id}`
✅9. A página de detalhes deve ser construída com a informação do *id* contida na URL :exclamation::exclamation::exclamation:
✅10. Não deve ser possível acessar a página de detalhes sem autorização 
✅11. Erros na obtenção dos dados para a construção da página de detalhes devem gerar uma mensagem na tela 
✅12. O estilo das páginas e cartões é de livre escolha, use a criatividade e garanta que não é uma cópia 😜
✅13. Sua página deve usar fontes personalizadas  :unicorn:
14. O trabalho deve ser publicado no githubPages com acesso público
   - não é obrigatório usar URL personalizada, mas se quiser pode 😎
15. Responsividade:
   - **Página de Login**:
      - vertical até 768px;   
   - **Página Detalhes**:
      - vertical até 768px;
   - Container de atletas da **Página Principal**:
      - uma colunas até 768px;
      - duas colunas até 1024px;
      - quatro colunas depois de 1024px;
      - largura máxima da lista de 1200px;
   - Seleção de elenco da **Página Principal**:
      - select até 768px;
      - botões para _viewports_ maiores que 768px;
## Página de exemplo:
  Sua solução deve estar **publicada no githubPages** e emular o compartamento da página: https://p2-2024-1-desweb.mange.li/
