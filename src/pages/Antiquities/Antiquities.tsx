import React from 'react';
import { Accordion, Avatar, Container, Group, Text, Title } from '@mantine/core';
import { locations } from '../../utils/recordMaps';
import classes from './Antiquities.css';

export function Antiquities() {
  return (
    <Container size="sm" className={classes.container}>
      <Title order={1} className={classes.title}>
        Antiquities
      </Title>
      <Accordion>
        {locations.map((location) => (
          <Accordion.Item key={location.name} value={location.name}>
            <Accordion.Control>
              <AccordionLabel label={location.name} avatar={location.avatar} />
            </Accordion.Control>
            <Accordion.Panel>
              {location.areas.map((area) => (
                <Accordion.Item key={area.name} value={area.name}>
                  <Accordion.Control>
                    <AccordionLabel label={area.name} avatar={area.avatar} />
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text>Content</Text>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
function AccordionLabel({ label, avatar }: { label: string; avatar?: string }) {
  return (
    <Group wrap="nowrap">
      {avatar && <Avatar src={avatar} radius="xl" size="lg" />}
      <div>
        <Text>{label}</Text>
      </div>
    </Group>
  );
}
