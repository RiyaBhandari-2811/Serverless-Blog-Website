import React from 'react';
import { Container } from '@mui/material';
import Banner from '@/components/banner/Banner';
import ContentRail from '@/components/contentrail/ContentRail';

const Home: React.FC = () => {
  return (
    <Container className="home">
      <Banner />
      <ContentRail />
    </Container>
  );
};

export default Home;
