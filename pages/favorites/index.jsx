import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts'
import localFavorites from '../../utils/localFavorites';
import { Grid } from '@nextui-org/react';
import { PokemonFavorite } from './../../components/PokemonFavorite/index';

export default function Favorites() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(localFavorites.pokemons())

    console.log(favorites);
  }, []);


  return (
    <Layout>

      {
        favorites.length != 0 && (
          <main >
            <Grid.Container gap={2} justify="flex-start">
              {
                favorites.map(id => {
                  return (
                    <PokemonFavorite key={id} id={id} />
                  )
                })
              }
            </Grid.Container>
          </main>
        )
      }


    </Layout>
  )
}