import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../components/Link';

function RenderNames(props: any) {
  const { persons } = props;

  if (persons.length > 0) {
    return (
      persons.map((person: { name: string | null ; age: string | null ; }, index: React.Key) => {
          return (
            <Typography key={index} variant="h5" gutterBottom>
              {person.name} - {person.age}
            </Typography>
      )})
    )
  }
}

const About: NextPage = () => {
  const [responseText, setResponseText] = React.useState([{name: "", age: ""}])  
  
  const getAboutInfo = async(url: string): Promise<void> => {
    const response = await fetch(url)
    const data = await response.json()
    
    if (data.length > 0) {
      setResponseText(data);
    }
  }

  return (
    <Container maxWidth="lg">
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
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <RenderNames persons={responseText} />
        <Box maxWidth="sm">
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} noLinkStyle href="/">
            Go to the about page
          </Box>
          <Button variant="contained" color="secondary" onClick={() => getAboutInfo('/api/people/about')} style={{ marginLeft: '4px' }}>
            Hi Team Button
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
