import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Card,
  Box,
  Stack,
} from "@mui/material";

const PortraitCard = () => {
  return (
    <Card className="portraitCard">
      <Stack spacing={0.5} className="cardBtn">
        <CardMedia
          className="img"
          component="img"
          image="/assets/images/cardImg.png"
          alt="green iguana"
        />
        <CardContent className="cardContent">
          <Typography className="cardTitle" gutterBottom component="span">
            <b>SwiftUI Task Modifier Lifecycle Handling</b>
          </Typography>
          <Typography className="description">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lizards are
            a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>
          <Stack className="cardFooter">
            <Typography className="date">Auguest 20, 2022</Typography>
            <Typography className="tag">Technology</Typography>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default PortraitCard;
