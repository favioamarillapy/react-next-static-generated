import { Grid } from '@nextui-org/react';
import { Layout } from '../components/layouts'
import { Pokemon } from '../components/pokemon';
import pokeApi from '../endpoints/pokeApi'

export default function Home({ pokemons }) {

  return (
    <Layout>

      <main >
        <Grid.Container gap={2} justify="flex-start">
          {
            pokemons.map(pokemon => {
              return (
                <Pokemon key={pokemon.id} {...pokemon} />
              )
            })
          }
        </Grid.Container>
      </main>

    </Layout>
  )
}

export async function getStaticProps(context) {

  const { data } = await pokeApi.get('/pokemon?limit=151');
  const { results } = data

  const pokemons = results.map((res, i) => ({
    ...res,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));

  return {
    props: {
      pokemons
    }
  }
}