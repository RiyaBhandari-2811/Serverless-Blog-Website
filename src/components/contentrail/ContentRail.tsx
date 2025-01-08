import React from 'react';
import { Grid2, Stack, Typography } from '@mui/material';
import PortraitCard from '../card/PortraitCard';

const ContentRail = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Stack className="contentRail" spacing={4}>
      <Typography className="railHeader">Latest Post</Typography>
      <Grid2 container spacing={5} wrap="wrap">
        {numbers.map((_, id) => (
          <div key={id}>
            <PortraitCard />
          </div>
        ))}
      </Grid2>
    </Stack>
  );
};

export default ContentRail;
