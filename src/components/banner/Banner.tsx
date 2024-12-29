import { Button, Container, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Container className="banner">
      <Container className="header">
        <div className="img"></div>
        <div>
          <b>Manoj Aher</b>
          <Typography className="role">Collaborator & Editor</Typography>
        </div>
      </Container>
      <Container className="content">
        <Typography component='p'>
          Meet Manoj Aher, a passionate writer and blogger with a love for
          technology and travel. Manoj holds a degree in Computer Science and
          has spent a decade working in the tech industry, gaining a deep
          understanding of the impact technology has on our lives.
        </Typography>
      </Container>
      <div className="socialHandles">
        <Button
          className="downloadCV"
          variant="contained"
          size="medium"
          href="/assets/pdf/samplePdf.pdf"
          download="samplePdf.pdf"
        >
          Download CV
        </Button>
      </div>
    </Container>
  );
};

export default Banner;
