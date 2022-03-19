const toggleFavorite = (id) => {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = (id) => {

  if (typeof window === 'undefined') return false;

  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
}


const pokemons = () => {
  console.log(JSON.parse(localStorage.getItem('favorites') || '[]'));
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}



export default {
  existInFavorites,
  toggleFavorite,
  pokemons,
}