const obrasEscolhidas = [];
const data = "https://thingproxy.freeboard.io/fetch/";
const urls = [
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=tarsila-do-amaral-Abaporu",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=tarsila-do-amaral-Morro-da-favela",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=o-grito-do-ipiranga",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=candido-portinari-Futebol",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=tarsila-do-amaral-a-cuca",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=aldemir-martins-Bumba-meu-Boi",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=morro-vermelho-lasar-segall",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=girl-with-the-gas-mask",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=volpi-grande-fachada-festiva"
]

let obrasPaginated = "";
const listaDeObras = document.getElementById("lista-obras");

const promises = urls.map(url => fetch(data+url).then(response => response.json()));
Promise.all(promises).then(allData => allData.map(obra => {
    obrasEscolhidas.push(obra.data[0]);

    let dadosDaObra = obra.data[0];

    obrasPaginated += `
        <li>
            <img src="${dadosDaObra.image}" alt="${dadosDaObra.artistUrl}-${dadosDaObra.title}" class="obra-img" />
            <p>${dadosDaObra.title} (${dadosDaObra.completitionYear})</p>
            <p>${dadosDaObra.artistName}</p>
        </li>
    `

    listaDeObras.innerHTML = obrasPaginated;
}));