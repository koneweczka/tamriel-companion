import React from 'react';
import { Avatar, Card, ColorSwatch, Flex, Grid, Switch, Text, Title } from '@mantine/core';
import { IconMapRoute } from '@tabler/icons-react';
import classes from './AntiquityCard.css';

// rarity is the color of the antiquity
// difficulty is how har it is to dig up the antiquity

export function AntiquityCard() {
  const exampleAntiquity = {
    item: 'Ancestral Orc Gloves',
    rarity: 'Green',
    location: 'Treasure Map Chest',
    type: 'Motif',
    difficulty: 'Simple',
    drop_area: "Alik'r Desert",
    image_path: 'https://images.uesp.net/c/c9/ON-icon-quest-Letter_02.png',
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
      {/* TODO: Check if grid is better here? */}
      <Grid grow>
        <Avatar src={exampleAntiquity.image_path} alt={exampleAntiquity.item} />
        <Title order={3} c="#67F149">
          {exampleAntiquity.item}
        </Title>
        <Switch ml="25" />
      </Grid>
      <Flex align="center"></Flex>
      <Flex align="center">
        <Text size="sm" fw={700}>
          Type:
        </Text>
        <Text c="dimmed" size="sm" ml="7">
          {exampleAntiquity.type}
        </Text>
        <Text size="sm" fw={700} ml="50">
          Difficulty:
        </Text>
        <ColorSwatch color="#67F149" size="15" ml="7" />
        <Text c="dimmed" size="sm" ml="5">
          {exampleAntiquity.difficulty}
        </Text>
      </Flex>
      <Flex align="center">
        <Text size="sm" fw={700}>
          Location:
        </Text>
        <Text c="dimmed" size="sm" ml="7" mr="20">
          {exampleAntiquity.location}
        </Text>
        <IconMapRoute />
      </Flex>
    </Card>
  );
}

// TODO: Example item:
// {
//   "item": "Ruby Dragon Skull (Picture)",
//   "rarity": "Purple",
//   "location": "Treasure Chest, Nodes, Thieves Troves, Random Monsters",
//   "type": "Furnishing",
//   "difficulty": "Advanced",
//   "drop_area": "Bleakrock Isle"
// },
