// let pokemonList = [
//   {
//     name: " Pikachu ",
//     height: 0.4,
//     type: "electric"
//   },
//   {
//     name: " Snorlax ",
//     height: 2.1,
//     type: "normal"
//   },
//   {
//     name: " Jigglypuff ",
//     height: 0.7,
//     type: ["fairy", "normal"]
//   }
// ];


let pokemonRepository = (function () {
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
  function add(item) {
    pokemonList.push(item);
  }

  return {
    getAll: getAll,
    add: add
  }
})()



console.log(pokemonRepository.getAll());
console.log(pokemonRepository.add)




// pokemonList.forEach(function(add) {
//   document.write(pokemon.name + ' is ' + pokemon.height + ' m tall!');
// });


pokemonRepository.getAll().forEach(function(pokemon){
  document.write(pokemon.name + ' is ' + pokemon.height + ' m tall!');
});