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
  searchForm: document.querySelector('.form-data'),
};// рефаем место в HTML где потом будет карточка


refs.searchForm.addEventListener('submit', onSearch);

function onSearch (e)  {
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;// при сабмите получаем ссылку на value инпута

    fetchPokemon(searchQuery)// вводим то что ввели в инпут
    .then(renderPocemonCard)// т.к. из функции возвращается Promise (поэтому then и catch)
    .catch(err => console.log(Error))
    .finally(() => form.reset()); // очищаем данные из формы при любых обстоятельствах
}

function fetchPokemon(pokemonId) {
  return fetch(`htpp:/google/&vbvbv/cbcbcb/${pokemonId}`).then((response) => {
    return response.json();
  });//получает данные с бэка в виде промиса, джейсоним и возвращаем
}

function renderPocemonCard (pokemon) {
    const markup = pokemonCatdTpl(pokemon);
    refs.cardConteiner.innerHTML = markup;

}  //вносим полученные данные в разметку и вставляем в HTML 