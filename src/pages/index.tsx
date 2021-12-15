import * as React from 'react';
import useSWR from 'swr'
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/Link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import IganaImage from '../image/igana_image.jpeg';


const fetcher = (url: string) => fetch(url).then((res) => res.json())

function ActionAreaCard(props: {people: any}) {
  const { name, age } = props.people;

  return (
    <Card sx={{ maxWidth: 300, m: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/igana_image.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {name} are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica, with an age
            of: {age}.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


const Home: NextPage = () => {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Container>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          People
        </Typography>
        {
          data.map((people: any, index: any) => {
            return (
              <ActionAreaCard key={index} people={people} />
            )
          })
        }
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} noLinkStyle href="/about">
          Go to the about page
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
