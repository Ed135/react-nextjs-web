import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Link from '../components/Link';

const Home: NextPage = () => {
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
          <b>Rentz</b>
        </Typography>
        <Typography variant="h5" component="h3" textAlign="center" gutterBottom>
          A sweet as game for some cool people to play on mobile!
        </Typography>
        <Typography style={{ margin: '40% 0 0 0' }}>
          <i>Ioana said she loved it!</i>
        </Typography>
        <Rating name="simple-controlled" value={5} />
        <Typography style={{ margin: '10% 0 0 0' }}>
          <i>Ioanas friend said she loved it!</i>
        </Typography>
        <Rating name="simple-controlled" value={4} />
        <Typography style={{ margin: '10% 0 0 0' }}>
          <i>Ioanas other friend said she loved it!</i>
        </Typography>
        <Rating name="simple-controlled" value={5} />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} noLinkStyle href="/about">
          Go to the about page
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
