import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

export const Pokemon = ({ id, name, image }) => {

  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={onClick}>
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
}
