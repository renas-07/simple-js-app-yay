var pokemonRepository = (function () {
  let pokemonList = [
    {
      name: " Pikachu ",
      height: 0.4,
      type: "electric"
    },
    {
      name: " Snorlax ",
      height: 2.1,
      type: "normal"
    },
    {
      name: " Jigglypuff ",
      height: 0.7,
      type: ["fairy", "normal"]
    }
  ]; // empty array

  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem (pokemon){
    let pokemonUnorderedList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonUnorderedList.appendChild(listPokemon);
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})()



console.log(pokemonRepository.getAll());
console.log(pokemonRepository.add)




// pokemonList.forEach(function(add) {
//   document.write(pokemon.name + ' is ' + pokemon.height + ' m tall!');
// });


pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
  // let pokemonUnorderedList = document.querySelector(".pokemon-list");
  // let listPokemon = document.createElement("li");
  // let button = document.createElement("button");
  // button.innerText = pokemon.name;
  // button.classList.add("button-class");
  // listPokemon.appendChild(button);
  // pokemonUnorderedList.appendChild(listPokemon);
});

