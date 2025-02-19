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
];

pokemonList.forEach(function(pokemon){
  document.write(pokemon.name + ' is ' + pokemon.height + ' m tall!');
});

// let pokemonRepository = (function () {
//     let pokemonList = []; // empty array
  
//     return {
//       add: function(pokemon) {
//         pokemonList.push(pokemon);
//       },
//       getAll: function() {
//         return pokemonList;
//       }
//     };
//   })();
  
//   console.log(pokemonRepository.getAll()); // []
//   pokemonRepository.add({ name: 'Pikachu' });
//   console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]


// for (let i = 0; i < pokemonList.length; i++) {

//     if (pokemonList[i].height > 1) {
//         document.write (pokemonList[i].name + " (Height: " + pokemonList[i].height + " -Wow, that is a big Pokemon!" + ")" )
//         } else (
//         document.write(pokemonList[i].name +
//             " (Height: " + pokemonList[i].height + ")"
        
//         )


