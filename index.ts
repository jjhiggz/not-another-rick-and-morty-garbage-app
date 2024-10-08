type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

const getCharacters = (): Promise<Character[]> =>
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => data.results);

const $charactersList = document.querySelector("#characters-list")!;

const rick: Character = {
  id: 1,
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  name: "Cheesey Puff",
  species: "Human",
  status: "Alive",
};

function createCharacterCard(character: Character) {
  const newCard = document.createElement("div");

  newCard.classList.add("card");
  newCard.innerHTML = `
     <h4>${character.name}</h4>
     <b>Status: ${character.status}</b>
     <img src="${character.image}" alt="">
`;

  return newCard;
}

getCharacters()
  .then((characters) => characters.map(createCharacterCard))
  .then((characterCards) => $charactersList.append(...characterCards));
