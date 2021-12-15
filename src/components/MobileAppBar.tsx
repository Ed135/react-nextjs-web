import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import Link from '../components/Link';

export default function FixedBottomNavigation(props: { children: any}) {
  const { children } = props;

  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7, display: { xs: 'block', sm: 'none' } }} ref={ref}>
      <CssBaseline />
      {children}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} component={Link} href="/" />
          <BottomNavigationAction label="About" icon={<FavoriteIcon />} component={Link} href="/about" />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
