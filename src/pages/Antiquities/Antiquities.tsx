import React from 'react';
import { Accordion, Avatar, Container, Group, Text, Title } from '@mantine/core';
import locationsJson from '@sources/locations.json';
import antiquitiesJson from '@sources/antiquities.json';
import classes from './Antiquities.css';
import { AntiquityCard } from '@/components/AntiquityCard/AntiquityCard';
import { Antiquity, Location } from '@/@typings/database-types';

export function Antiquities() {
  const locations: Location[] = locationsJson;
  const antiquities: Antiquity[] = antiquitiesJson;

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
              <Accordion>
                {location.areas.map((area) => (
                  <Accordion.Item key={area.name} value={area.name}>
                    <Accordion.Control>
                      <AccordionLabel label={area.name} avatar={area.avatar} />
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Accordion>
                        {location.areas.map((antiquityArea) => {
                          const filteredAntiquities = antiquities.filter(
                            (antiquity) => antiquity.drop_area === antiquityArea.name
                          );

                          return (
                            <Accordion.Item key={antiquityArea.name} value={antiquityArea.name}>
                              <Accordion.Control>
                                {filteredAntiquities.length > 0 ? (
                                  filteredAntiquities.map((antiquity) => (
                                    <AntiquityCard key={antiquity.item} antiquity={antiquity} />
                                  ))
                                ) : (
                                  <Text>No antiquities found for this area.</Text>
                                )}
                              </Accordion.Control>
                            </Accordion.Item>
                          );
                        })}
                      </Accordion>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
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
