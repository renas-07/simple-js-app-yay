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


for (let i = 0; i < pokemonList.length; i++) {

    if (pokemonList[i].height > 1) {
        document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + " -Wow, that is a big Pokemon!" + ")")
    } else (
        document.write(pokemonList[i].name +
            " (Height: " + pokemonList[i].height + ")"
        )
    )
}

