import { Card, Grid, Row, Text } from '@nextui-org/react';
import Image from 'next/image';
import { Layout } from '../components/layouts'
import pokeApi from '../endpoints/pokeApi'

export default function Home({ pokemons }) {

  return (
    <Layout>

      <main >
        <Grid.Container gap={2} justify="flex-start">
          {
            pokemons.map(({ id, name, image }) => {
              return (

                <Grid key={id} xs={6} sm={3} md={2} xl={1}>
                  <Card hoverable clickable>
                    <Card.Body css={{ p: 1 }}>
                      <Card.Image
                        src={image}
                        alt={name}
                        width="100%"
                        height={140} />

                      <Card.Footer>
                        <Row justify="space-between">
                          <Text> #{id}  </Text>
                          <Text transform='capitalize'> {name}  </Text>
                        </Row>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Grid>

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