import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  Avatar,
  Box,
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="footer">
      <Stack>
        <Box>
          <Typography variant="h6">About</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            temporibus laudantium, optio quibusdam adipisci veritatis
            perspiciatis ab et explicabo rerum harum inventore accusantium animi
            cumque. Quis ad sunt molestias tempora aliquam accusantium atque
            tempore, tenetur repudiandae itaque reiciendis illo facere?
            Similique quas quia est cupiditate enim odit odio provident modi!
          </Typography>
          <Typography variant="body1">
            <b>Email : </b> aher.manoj@outlook.com
          </Typography>
          <Typography variant="body1">
            <b>Phone : </b> +91 8806296026
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">Weekly Newsletter</Typography>
          <Typography variant="h6">
            Get blog articles and offers via email!
          </Typography>
          <ul>
            <li>No spam (unless it's the tasty canned kind).</li>
            <li>Cancel anytime -- no awkward breakup talk required.</li>
            <li>
              We swear, your email will remain more private than your search
              history.
            </li>
          </ul>
          <Box>
            <TextField
              required
              id="input-with-icon-textfield"
              label="Your Email"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                },
              }}
              variant="outlined"
            />
            <Button variant="contained">Subscribe</Button>
          </Box>
        </Box>
      </Stack>
      <Divider />
      <Stack className="footer-bottom">
        <Box>
          <Box>
            <Avatar src="https://avatars.githubusercontent.com/u/72213815?v=4" />
          </Box>
          <Box>
            <Typography variant="body1">
              Aher <b>Manoj</b>
            </Typography>
            <Typography variant="body1">
              &copy; {new Date().getFullYear()}, Manoj Aher, All Rights
              Reserved. Pune,India
            </Typography>
          </Box>
        </Box>
        <Box>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Cookie Policy</Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
