import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function RenderNames(props: any) {
  const { info } = props;

  return (
    <Typography variant="h5" gutterBottom>
      {info.name} - {info.age}
    </Typography>
  )
}

const Info: NextPage = () => {
  const [responseText, setResponseText] = React.useState({name: "", age: ""})  
  
  const getAboutInfo = async(url: string): Promise<void> => {
    const response = await fetch(url)
    const data = await response.json()

    if (data.status == 200) {
      setResponseText(data.data);
    }
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Additional Info
        </Typography>
        <RenderNames info={responseText} />
        <Box maxWidth="sm">
          <Button variant="contained" color="secondary" onClick={() => getAboutInfo('/api/info')} style={{ marginLeft: '4px' }}>
            Hi Team Button
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Info;
