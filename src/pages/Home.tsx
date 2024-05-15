import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Container, Title } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import antiquities from '../public/antiquities.png';
import classes from './Home.css';

export function Home() {
  const navigate = useNavigate();

  function handleNavigate(path: string) {
    navigate(path);
  }

  return (
    <Container size="sm" className={classes.container}>
      <Title ta="center" mb="10">
        Welcome to Tamriel Companion App!
      </Title>
      <Box className={classes.box}>
        <Button
          variant="filled"
          color="cyan"
          size="md"
          radius="md"
          className={classes.buttons}
          leftSection={<Avatar src={antiquities} alt="Antiquities" radius="sm" />}
          onClick={() => handleNavigate('/antiquities')}
        >
          Antiquities
        </Button>
        <Button
          variant="filled"
          color="cyan"
          size="md"
          radius="md"
          className={classes.buttons}
          onClick={() => handleNavigate('/achievements')}
        >
          Achievements
        </Button>
      </Box>
      <h3>There will be more content from my app.</h3>
      <p className={classes.icon}>
        Made with <IconHeartFilled /> by Konewka
      </p>
    </Container>
  );
}
