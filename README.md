# Ciclo de Testes 

<img src="https://miro.medium.com/max/1200/1*HuEr6-Y7nXOTGJoyZf0Yew.png" weight="150" height="150" align="center"></img>

**Obs:** É importante que siga o passo a passo abaixo, se somente clonar o projeto, não conseguirá rodar os testes.

## O que é necessário para executar?
##### <img src="https://cdn-icons-png.flaticon.com/512/3840/3840653.png" weight="20px" height="20px"></img> Antes de tudo, instale:
- <a href="https://nodejs.org/en/download/">`Node.js`</a>
- <a href="https://code.visualstudio.com/download">`VS Code`</a>

##### <img src="https://cdn-icons-png.flaticon.com/512/3840/3840738.png" weight="20px" height="20px"></img> Crie uma pasta no seu computador, com o nome desejado

##### <img src="https://cdn-icons-png.flaticon.com/512/3840/3840739.png" weight="20px" height="20px"></img>Agora abra o CMD (prompt de comando) e navegue até a pasta que você criou

##### <img src="https://cdn-icons-png.flaticon.com/512/3840/3840753.png" weight="20px" height="20px"></img> Estando dentro da pasta através do CMD, digite o comando a seguir: 
_`npm init -y`_  


#####  <img src="https://cdn-icons-png.flaticon.com/512/3840/3840754.png" weight="20px" height="20px"></img> Ainda dentro da pasta do projeto, digite o comando a seguir:
_`npm install cypress@9.5.1 --save-dev`_  (lembrando que esse é o comando referente a instalaçao de uma versão especifica do cypress). Aguarde terminar a instalação e siga o próximo passo

#####  <img src="https://cdn-icons-png.flaticon.com/512/3840/3840755.png" weight="20px" height="20px"></img> Agora que o cypress já está instalado, ainda no CMD, abra o test runner digitando o comando a seguir: 
_`npx cypress open`_   (aguarde alguns instantes até abrir)

#####  <img src="https://cdn-icons-png.flaticon.com/512/3840/3840771.png" weight="20px" height="20px"></img> Agora acesse o VS Code e abra a pasta do seu projeto aquela que você criou no inicio) e:
>- Acesse o arquivo _`package.json`_ e adicione o seguinte código na sessão de "scripts" (basta apagar o conteúdo do trecho "scripts" já existente no código) :
>```json
> "scripts": {
>    "cypress:open": "cypress open",
>    "test": "cypress run"
>  },
>```

##### <img src="https://cdn-icons-png.flaticon.com/512/3840/3840772.png" weight="20px" height="20px"></img> Ainda no VS Code:
> - Acesse o arquivo _`cypress.json`_ e adicione o seguinte código:
 >```json
>  {
>  "pluginsFile": false,
 > "viewportHeight": 880,
 > "viewportWidth": 1280
>}
>```

##### <img src="https://cdn-icons-png.flaticon.com/512/3840/3840773.png" weight="20px" height="20px"></img> Agora bora criar os ´specs´ (são os arquivos dos testes em si, para conseguir rodar os ciclos da calculadora que criei):
- Com o projeto aberto no VS Code:

>**1 -** Clique na pasta `cypress > integration`
>
>**2 -** Dentro da pasta integration selecionada, crie um arquivo chamado "`operacoesMatematicas.spec.js`" 
>
>**3 -** Ainda com a pasta integration selecionada, crie outro arquivo chamado "`funcionalidadesGerais.spec.js`" 
>
>**4 -** <a href="https://github.com/FrancoRoldao/Calculadora/blob/main/cypress/integration/operacoesMatematicas.spec.js">Acesse aqui</a> copie todo o código, e cole no arquivo "`operacoesMatematicas.spec.js`" que você criou no VS Code (não esqueça de salvar as alterações)
>
>**5 -** <a href="https://github.com/FrancoRoldao/Calculadora/blob/main/cypress/integration/operacoesMatematicas.spec.js">Acesse aqui</a> copie todo o código, e cole no arquivo "`funcionalidadesGerais.spec.js`" que você criou no VS Code (não esqueça de salvar as alterações)
>
>**6 -**  Agora basta certificar de que está tudo salvo no VS Code > abrir o CMD e digitar o comando a seguir (não esqueça de esperar a aplicação do cypress abrir): ` npm run cypress:open`
>
>**7 -**  Com o Cypress Test Runner aberto, clique em: `Run 2 integration specs` ou clique em cada spec criada separadamente. 









<img src="https://imagensemoldes.com.br/wp-content/uploads/2020/07/Parab%C3%A9ns-PNG-1280x720.png" weight="200px" height="200px"></img> _***Agora você pode rodar os testes automatizados da minha calculadora direto do seu PC, e conferir tudo o que preparei!***_





