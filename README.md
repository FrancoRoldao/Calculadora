# Ciclo de Testes 

<img src="https://gifs.eco.br/wp-content/uploads/2022/08/gifs-de-construcao-3.gif"></img>

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
_`NPX CYPRESS OPEN`_   (aguarde alguns instantes até abrir)

#####  <img src="https://cdn-icons-png.flaticon.com/512/3840/3840771.png" weight="20px" height="20px"></img> Agora acesse o VS Code e abra a pasta do seu projeto aquela que você criou no inicio) e:
>- Acesse o arquivo _`package.json`_ e adicione o seguinte código na sessão de "scripts":
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
1 - Acesse a pasta 








<img src="https://imagensemoldes.com.br/wp-content/uploads/2020/07/Parab%C3%A9ns-PNG-1280x720.png" weight="200px" height="200px"></img>





