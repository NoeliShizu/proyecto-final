const namePokemon= document.getElementById("namepokemon");

const imgPokemon= document.getElementById("pokeimage");

const peticionApi =async ()=> {

    const peticionGet = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");

    const datosPoke = await peticionGet.json();

    const imgCharmander= datosPoke.sprites.front_shiny;

    const nombreCharm= datosPoke.species.name;

    namePokemon.textContent= nombreCharm;
    imgPokemon.src =imgCharmander;
}

peticionApi();

