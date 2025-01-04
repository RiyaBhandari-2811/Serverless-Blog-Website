import React from 'react';
import { Grid2, Stack, Typography } from '@mui/material';
import PortraitCard from '../card/PortraitCard';

const ContentRail = () => {
  return (
    <Stack className="contentRail" spacing={4}>
      <Typography className="railHeader">Latest Post</Typography>
      <Grid2 container spacing={5} wrap="wrap">
        {/* {new Array(7).fill(null).map((_, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}> */}
        <PortraitCard />
        {/* </Grid2>
        ))} */}
      </Grid2>
    </Stack>
  );
};

export default ContentRail;
