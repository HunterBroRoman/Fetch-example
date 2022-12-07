// import pokemonCatdTpl from '...templetes/fgfgf/'; // получаем разметку одной карточки


// const refs = {
//   cardConteiner: document.querySelector(".js-card-container"),
// };// рефаем место в HTML где потом будет карточка

// fetchPokemon()
// .then(renderPocemonCard)// т.к. из функции возвращается Promise (поэтому then и catch)
// .catch(err => console.log(Error));

// function fetchPokemon() {
//   return fetch("htpp:/google/&vbvbv/cbcbcb").then((response) => {
//     return response.json();
//   });//получает данные с бэка в виде промиса, джейсоним и возвращаем
// }

// function renderPocemonCard (pokemon) {
//     const markup = pokemonCatdTpl(pokemon);
//     refs.cardConteiner.innerHTML = markup;

// }  //вносим полученные данные в разметку и вставляем в HTML 

//-------------------------------------ДИНИМАЧЕСКОЕ НАПОЛНЕНИЕ ФУНКЦИИ---------------------

import pokemonCatdTpl from '...templetes/fgfgf/'; // получаем разметку одной карточки


const refs = {
  cardConteiner: document.querySelector(".js-card-container"),
};// рефаем место в HTML где потом будет карточка

fetchPokemon(1)
.then(renderPocemonCard)// т.к. из функции возвращается Promise (поэтому then и catch)
.catch(err => console.log(Error));

function fetchPokemon(pokemonId) {
  return fetch(`htpp:/google/&vbvbv/cbcbcb/${pokemonId}`).then((response) => {
    return response.json();
  });//получает данные с бэка в виде промиса, джейсоним и возвращаем
}

function renderPocemonCard (pokemon) {
    const markup = pokemonCatdTpl(pokemon);
    refs.cardConteiner.innerHTML = markup;

}  //вносим полученные данные в разметку и вставляем в HTML 