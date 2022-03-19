import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

export const PokemonFavorite = ({ id }) => {

  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={id}
            width="100%"
            height={140} />
        </Card.Body>
      </Card>
    </Grid>
  )
}
