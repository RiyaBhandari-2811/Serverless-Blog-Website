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
    <Stack
      className="footer"
      justifyContent={'space-evenly'}
      alignItems={'flex-start'}
      spacing={2}
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
            width: '30%',
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
          <Typography variant="body1" sx={{ marginTop: '1rem' }}>
            <b>Email : </b> aher.manoj@outlook.com
          </Typography>
          <Typography variant="body1">
            <b>Phone : </b> +91 8806296026
          </Typography>
        </Stack>
        <Stack
          justifyContent={'space-evenly'}
          alignItems={'center'}
          spacing={2}
          sx={{
            width: 'max-content',
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '10px',
          }}
        >
          <b>Weekly Newsletter</b>
          <Typography fontSize={'1rem'}>
            Get blog articles and offers via email!
          </Typography>
          <ul style={{ fontSize: '12px' }}>
            <li>No spam (unless it&apos;s the tasty canned kind).</li>
            <li>Cancel anytime -- no awkward breakup talk required.</li>
            <li>
              We swear, your email will remain more private than your search
              history.
            </li>
          </ul>
          <Stack
            justifyContent={'space-evenly'}
            alignItems={'center'}
            spacing={2}
          >
            <TextField
              required
              id="input-with-icon-textfield"
              placeholder="Your Email"
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
              sx={{
                '& #input-with-icon-textfield': {
                  padding: '4px',
                },
              }}
            />
            <Button
              disableElevation
              sx={{
                padding: '5px 5.6rem',
                backgroundColor: 'var(--text-tertiary)',
                color: 'white',
                fontSize: '12px',
              }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: 'black', width: '100%' }} />
      <Stack
        direction="row"
        className="footer-bottom"
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
      >
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Box>
            <Avatar src="https://avatars.githubusercontent.com/u/72213815?v=4" />
          </Box>
          <Box>
            <Typography variant="body1">
              Aher <b>Manoj</b>
            </Typography>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()}, Manoj Aher, All Rights
              Reserved. Pune,India
            </Typography>
          </Box>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontSize: 'small',
            }}
          >
            Terms of Use
          </Link>
          <Divider
            sx={{ borderColor: 'black' }}
            orientation="vertical"
            variant="middle"
            flexItem
          />
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontSize: 'small',
            }}
          >
            Privacy Policy
          </Link>
          <Divider
            sx={{ borderColor: 'black' }}
            orientation="vertical"
            variant="middle"
            flexItem
          />
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontSize: 'small',
            }}
          >
            Cookie Policy
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
