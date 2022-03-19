import { useState } from 'react';

import { Button, Card, Container, Grid, Image, Row, Text } from '@nextui-org/react'
import { Layout } from '../../components/layouts'
import pokeApi from '../../endpoints/pokeApi'

const PokemonDetail = ({ pokemon }) => {



  return (
    <Layout title={pokemon.name}>

      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4} >
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>

              <Button
                color="gradient"
              >
                Save in Favorite
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction='row' display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

              </Container>


            </Card.Body>


          </Card>
        </Grid>

      </Grid.Container>



    </Layout>
  )
}

export const getStaticPaths = async (ctx) => {

  const pokemonsId = [...Array(151)].map((value, i) => `${i + 1}`)

  return {
    paths: pokemonsId.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export async function getStaticProps(context) {

  const { id } = context.params
  const { data: pokemon } = await pokeApi.get(`/pokemon/${id}`)

  return {
    props: { pokemon }
  }
}

export default PokemonDetail