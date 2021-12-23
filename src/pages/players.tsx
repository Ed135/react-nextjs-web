import * as React from 'react';
import useSWR from 'swr'
import type { NextPage } from 'next';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Divider } from '@mui/material';
import Link from '../components/Link';

const useStyles = makeStyles({
  inputBox: {
    margin: '0 8px'
  },
});

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function ActionAreaCard(props: {people: any}) {
  const { name, age } = props.people;

  return (
    <Card sx={{ maxWidth: 300, mt: 1, mb: 1 }}>
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

const Players: NextPage = (props) => {
  const [inputDetails, setInputDetails] = React.useState({name: "", age: ""})

  const classes = useStyles(props);

  const { data, error } = useSWR('/api/players', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const postNewRecord = async(newPlayer: any): Promise<void> => {
    const response = await fetch('/api/players', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlayer)
    })
    return response.json()
  }

  const handleChange = (event: any) => {
    if (event.target.name == 'name') {
      setInputDetails({
        ...inputDetails,
        name: event.target.value
      })
      return;
    }

    setInputDetails({
      ...inputDetails,
      age: event.target.value
    })
    return;
  }

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
          Players
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <TextField
            className={classes.inputBox}
            helperText="Enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            value={inputDetails.name}
            name="name"
            onChange={handleChange}
          />
          <TextField
            className={classes.inputBox}
            helperText="Enter your age"
            id="demo-helper-text-aligned"
            label="Age"
            value={inputDetails.age}
            name="age"
            onChange={handleChange}
          />
        </Box>
        <Button sx={{ m: 1 }} variant="contained" onClick={ () => postNewRecord(inputDetails) }>Add Player!</Button>
        <Divider />
        {
          data.data.length > 0 ?
            data.data.map((people: any, index: any) => {
              return (
                <ActionAreaCard key={index} people={people} />
              )
            })
            : 
            <>
              <Typography>
                There are no people!
              </Typography>
            </>
        }
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} noLinkStyle href="/about">
          Go to the about page
        </Box>
      </Box>
    </Container>
  );
};

export default Players;
