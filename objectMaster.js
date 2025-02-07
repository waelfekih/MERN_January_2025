const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// Arrays with ids divided by 3
const array3 = pokemon.filter(p => p.id % 3 === 0);
console.log("ARRAYS WITH ID DIVIDED BY 3")
console.log(array3)

// Arrays with "fire" type
const fire = pokemon.filter(p =>p.types.includes("fire"))
console.log("ARRAYS WITH FIRE TYPE")
console.log(fire)

// Arrays with more than 1 type
const moreThanOne = pokemon.filter(p => p.types.length > 1)
console.log("ARRAYS WITH MORE THAN 1 TYPE")
console.log(moreThanOne)

// Arrays with just the names
const pokemonName = pokemon.map(p => p.name)
console.log("ARRAYS WITH NAMES")
console.log(pokemonName)

//Arrays with names and id > 99
const nameAndGreat = pokemon.filter(p =>p.id > 99).map(p => p.name)
console.log("ARRAYS WITH NAMES WITH IDS > 99")
console.log(nameAndGreat)

//Arrays with just names with types poison ONLY 
const typePoison = pokemon.filter(p => p.types[0] ==="poison").filter(p => p.types.length < 2).map(p => p.name)
console.log("ARRAYS WITH JUST POISON TYPE")
console.log(typePoison)

//an array containing just the first type of all the pokémon whose second type is "flying"
const flyingType = pokemon.filter(p => p.types[1] === "flying").map(p => p.types[0])
console.log("SECOND TYPE IS FLYING")
console.log(flyingType)

// acount of the number of pokémon that are "normal" type
const normalType = pokemon.filter(p =>p.types.includes("normal")).length;
console.log("NUMBER OF TYPE NORMAL")
console.log(normalType)

//An array with all pokemon except the pokemon with the id of 148
const allArraysExcept = pokemon.filter(p => p.id !== 148);
console.log("ALL ARRAYS EXCEPT ARRAY OF ID 148")
console.log(allArraysExcept)

//an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"
const modifiedArray = pokemon.map( p => p.id === 35 ? {...p , types :["fairy"]} : p ) ;
console.log("MODIFIED ARRAY")
console.log(modifiedArray)