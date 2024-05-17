import React from 'react';
import { Button, Container, Flex, Title } from '@mantine/core';
import classes from './Antiquities.css';

export function Antiquities() {
  return (
    <Container size="sm" className={classes.container}>
      <Title order={1} className={classes.title}>
        Antiquities
      </Title>
      <Flex direction="column" gap={{ base: 'sm', sm: 'lg' }} className={classes.buttonFlex}>
        <Button color="cyan.9">Aldmeri Dominion</Button>
        <Button color="cyan.9">Daggerfall Covenant</Button>
        <Button color="cyan.9">Ebonheart Pact</Button>
        <Button color="cyan.9">Coldharbour</Button>
        <Button color="cyan.9">Craglorn</Button>
        <Button color="cyan.9">Eyevea</Button>
        <Button color="cyan.9">DLC Areas</Button>
      </Flex>
    </Container>
  );
}
