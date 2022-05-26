const pokeName = document.querySelector('[pokeName]')
const pokeImg = document.querySelector('[pokeImg]')
const pokeSearch = document.querySelector('[inputTxtSearch]');

const pokeTypes = document.querySelector('[pokeTypes]');
const pokeStats = document.querySelector('[pokeStats]');
const pokeId = document.querySelector('[pokeId]');
const pokeDex = document.querySelector('[pokeDex]');

const btnAdd = document.querySelector('[buttonAdd]');
const btnRemove = document.querySelector('[buttonRemove]');
const loadingFlash = document.querySelector('[loadingFlash]')

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

// Verificar conexion con la api, si no tirrar error
document.addEventListener('DOMContentLoaded', async () => {
    if (await apiOk()) {
        // Buscar pokemon
        pokeSearch.addEventListener('keypress', (event) => {
            if (event.key === "Enter") {
                searchPokemon(pokeSearch)
            }
        })
    } else {
        // Error en la api
    }
})

async function apiOk() {
    return new Promise((resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(r => {
                r.ok ? resolve(r.ok) : reject(r.ok)
            })
            .catch(e => {
                reject(false)
            })
    })
}

const searchPokemon = async (inputNamePoke) => {

    const { value } = inputNamePoke

    loadingPage(true)
    await fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => { renderNotFound() })


    loadingPage(false)

}

const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const { stats, types } = data;
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);
}
const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    let pokeRadio = document.querySelector('[imgFlash]')
    pokeRadio.style.background = `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeRadio.style.boxShadow = `0px 0px 50px 30px ${colorOne}`
    pokeRadio.style.backgroundSize = ' 5px 5px';
}
const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        let nameStat = stat.stat.name
        if (nameStat.indexOf('special') === 0) {
            nameStat = nameStat.replace('special', 's')
        }
        console.log(nameStat.indexOf('special'))
        statElementName.textContent = nameStat;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}
const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        typeTextElement.style.webkitTextStroke = '0.5px black'
        pokeTypes.appendChild(typeTextElement);
    });
}
const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', './assets/poke-shadow.png');
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}

const loadingPage = (data) => {
    data ? loadingFlash.classList.add('loadingFlash') : loadingFlash.classList.remove('loadingFlash')
}
