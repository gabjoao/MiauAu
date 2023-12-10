const URL = "https://api.thedogapi.com/v1/images/search?limit=9&has_breeds=true";
const URLRaça = "https://api.thedogapi.com/v1/images/search?breed_ids=";

//Chave para o theDogApi
const KEY = "live_5tnWtrQrh72W0X3MrkX1HWtM16d48vkzRZXcQVzgXrETSoiRBfIWKTaN2Y1b3I28";

const btn = document.querySelector("#pesquisar");
var dog;

//Pesquisa da raça
btn.addEventListener("click", function(e){
    //Função para não resetar a página no click
    e.preventDefault();

    const raça = document.querySelector("#raça").value;

    console.log(raça)

    fetch(URLRaça+raça,{headers: {
        'x-api-key': KEY
      }})
    .then((response) => {
     return response.json();
    })
    .then((data) => {
        console.log(data);
        pesquisa(data);
        
    })
        .catch(function(error) {
        console.log(error);
    });

})


function pesquisa(data){
    document.querySelector(".raça-container").style.display = "flex";

    //Criando o título do card
    var titulo = document.createElement("h1");
    titulo.textContent = data[0].breeds[0].name;
    document.querySelector(".raça-content").insertBefore(titulo, document.querySelector(".infos"))

    //Adicionando a foto
    var foto = document.createElement("img");
    foto.src = data[0].url;
    foto.width = data[0].width
    foto.height = data[0].height
    document.querySelector(".foto").appendChild(foto);

    //Adicionando as informações
    var div = document.querySelector(".txt");
    var criado = document.createElement("p")
    criado.textContent = "Criado para: " + data[0].breeds[0].bred_for;
    div.appendChild(criado);

    var tamanho = document.createElement("p")
    tamanho.textContent = "Tamanho: " + data[0].breeds[0].height.metric +"cm";
    div.appendChild(tamanho);

    var peso = document.createElement("p")
    peso.textContent = "Peso: " + data[0].breeds[0].weight.metric +"kg";
    div.appendChild(peso);

    var anos = document.createElement("p")
    anos.textContent = "Expectativa de vida: " + data[0].breeds[0].life_span;
    div.appendChild(anos);

    var caracteristicas = document.createElement("p")
    caracteristicas.textContent = "Caracteristicas: " + data[0].breeds[0].temperament;
    div.appendChild(caracteristicas);


    
}

//Botão da Galeria
function galeria(){
    document.querySelector('#mais').style.display = "block";
    var grid = document.querySelector('#grid-container');
    grid.style.display = "flex"
    fetch(URL,{headers: {
        'x-api-key': KEY
      }})
    .then((response) => {
     return response.json();
    })
    .then((data) => {
        console.log(data)
        let fotos = data;
        fotos.map(function(fotos) {
      
        let image = document.createElement('img');
        image.src = `${fotos.url}`;
        image.width = `${fotos.width}`;
        image.height = `${fotos.height}`;
          
        let card = document.createElement('div');
        card.classList.add("card");
        card.appendChild(image)
        
        grid.appendChild(card);
      
      });
    })
        .catch(function(error) {
        console.log(error);
    });
}

function mais(){
    var grid = document.querySelector('#grid-container');
    grid.style.display = "flex"
    grid.style.height = "200%"
    fetch(URL,{headers: {
        'x-api-key': KEY
      }})
    .then((response) => {
     return response.json();
    })
    .then((data) => {
        console.log(data)
        let fotos = data;
        fotos.map(function(fotos) {
      
        let image = document.createElement('img');
       
        image.src = `${fotos.url}`;
        image.width = `${fotos.width}`;
        image.height = `${fotos.height}`;
          
        let card = document.createElement('div');
        card.classList.add("card");
        card.appendChild(image)
        
        grid.appendChild(card);
      
      });
    })
        .catch(function(error) {
        console.log(error);
    });
}