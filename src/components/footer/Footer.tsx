import React from 'react';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {
  Avatar,
  Box,
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const Footer = () => {
  return (
    <Box
      className="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
      }}
    >
      <Stack
        gap={5}
        direction="row"
        justifyContent="space-between"
        alignItems={'flex-start'}
      >
        <Stack
          justifyContent="space-between"
          alignItems={'flex-start'}
          sx={{
            width: '50%',
            display: 'inline-block',
            textAlign: 'jestify',
          }}
        >
          <Typography variant="h6" gutterBottom>
            <b>About</b>
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            temporibus laudantium,Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Fugiat temporibus laudantium,
          </Typography>
          <Typography variant="body1">
            <b>Email : </b> aher.manoj@outlook.com
          </Typography>
          <Typography variant="body1">
            <b>Phone : </b> +91 8806296026
          </Typography>
        </Stack>
        <Stack
          justifyContent={'space-evenly'}
          alignItems={'center'}
          sx={{
            width: '50%',
            textAlign: 'jestify',
          }}
        >
          <Typography variant="h5">Weekly Newsletter</Typography>
          <Typography variant="h6">
            Get blog articles and offers via email!
          </Typography>
          <ul>
            <li>No spam (unless it&apos;s the tasty canned kind).</li>
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
        </Stack>
      </Stack>
      <Divider />
      <Stack
        direction="row"
        className="footer-bottom"
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
      >
        <Stack direction="row" justifyContent="space-between">
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
        </Stack>
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
