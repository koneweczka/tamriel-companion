import React from 'react';
import { Avatar, Card, ColorSwatch, Flex, Grid, Switch, Text, Title } from '@mantine/core';
import { IconMapRoute } from '@tabler/icons-react';
import classes from './AntiquityCard.css';
import { Antiquity } from '@/@typings/database-types';

// rarity is the color of the antiquity
// difficulty is how har it is to dig up the antiquity

interface AntiquityCardProps {
  antiquity: Antiquity;
}

export function AntiquityCard({ antiquity }: AntiquityCardProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
      style={{ maxWidth: 350 }}
    >
      <Grid>
        <Grid.Col span={12}>
          <Flex align="center" justify="space-between">
            <Flex align="center">
              <Avatar src={antiquity.image_path} alt={antiquity.item} radius="xl" size="lg" />
              <Title order={3} c="#67F149" ml="md">
                {antiquity.item}
              </Title>
            </Flex>
            <Switch />
          </Flex>
        </Grid.Col>
        <Grid.Col span={12}>
          <Flex align="center" justify="space-between">
            <Flex align="center">
              <Text size="sm" fw={700}>
                Type:
              </Text>
              <Text c="dimmed" size="sm" ml="xs">
                {antiquity.type}
              </Text>
            </Flex>
            <Flex align="center">
              <Text size="sm" fw={700}>
                Difficulty:
              </Text>
              <ColorSwatch color="#67F149" size={15} ml="xs" />
              <Text c="dimmed" size="sm" ml="xs">
                {antiquity.difficulty}
              </Text>
            </Flex>
          </Flex>
        </Grid.Col>
        <Grid.Col span={12}>
          <Flex align="center" justify="space-between">
            <Flex align="center">
              <Text size="sm" fw={700}>
                Location:
              </Text>
              <Text c="dimmed" size="sm" ml="xs">
                {antiquity.location}
              </Text>
            </Flex>
            <IconMapRoute />
          </Flex>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
