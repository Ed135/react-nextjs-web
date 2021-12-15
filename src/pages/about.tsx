import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../components/Link';

const About: NextPage = () => {
  const [responseText, setResponseText] = React.useState({name: ""})  
  
  const getAboutInfo = async(url: string): Promise<void> => {
    const response = await fetch('/api/people/about')
    const data = await response.json()
    
    setResponseText(data);
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
        <Typography variant="h5" gutterBottom>
          {responseText.name}
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" color="secondary" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
          <Button variant="contained" color="secondary" onClick={() => getAboutInfo('/api/people/about')} style={{ marginLeft: '4px' }}>
            Hi Team Button
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
