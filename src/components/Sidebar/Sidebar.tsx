import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Accordion,
  Avatar,
  Group,
  rem,
  ScrollArea,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import locations from "@/sources/locations.json";
import { slugify } from "@/utils/slugify";
import type { Location, LocationCategory } from "@/@typings/database-types";
import { AreaItem } from "../AreaItem/AreaItem";

export function Sidebar({
  onNavigateMobileClose,
}: {
  onNavigateMobileClose?: () => void;
}) {
  const navigate = useNavigate();
  const params = useParams();

  const initialTab = (params.category as LocationCategory) ?? "alliances";
  const [tab, setTab] = useState<string | null>(initialTab);

  const activeAreaSlug = params.areaSlug ?? null;

  useEffect(() => {
    if (params.category && params.category !== tab) {
      setTab(params.category);
    }
  }, [params.category]);

  const data = useMemo(() => locations as Location[], []);

  const alliances = useMemo(
    () => data.filter((location) => location.category === "alliances"),
    [data]
  );

  const dlcAreas = useMemo(() => {
    return data
      .filter((location) => location.category === "dlc")
      .flatMap((location) => location.areas);
  }, [data]);

  const neutralAreas = useMemo(() => {
    return data
      .filter((location) => location.category === "neutral")
      .flatMap((location) => location.areas);
  }, [data]);

  const goToArea = (category: LocationCategory, areaName: string) => {
    navigate(`/locations/${category}/${slugify(areaName)}`);
    onNavigateMobileClose?.();
  };

  return (
    <Stack gap="md" h="100%">
      <Tabs
        value={tab}
        onChange={setTab}
        color="darkolivegreen"
        styles={{
          root: { height: "100%", display: "flex", flexDirection: "column" },
          panel: { flex: 1, minHeight: 0 },
        }}
      >
        <Tabs.List style={{ padding: rem(6) }}>
          <Tabs.Tab value="alliances">Alliances</Tabs.Tab>
          <Tabs.Tab value="dlc">DLC</Tabs.Tab>
          <Tabs.Tab value="neutral">Neutral</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="alliances">
          <ScrollArea h="100%" offsetScrollbars type="auto">
            <Accordion
              mt="sm"
              variant="separated"
              radius="md"
              defaultValue={alliances[0]?.name}
              styles={{
                item: {
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(133,153,108,0.18)",
                  overflow: "hidden",
                },
                panel: {
                  padding: rem(8),
                  background: "rgba(0,0,0,0.10)",
                },
                chevron: { opacity: 0.7 },
              }}
            >
              {alliances.map((loc) => (
                <Accordion.Item key={loc.name} value={loc.name}>
                  <Accordion.Control>
                    <Group gap="sm">
                      {loc.avatar ? (
                        <Avatar src={loc.avatar} size={24} radius="xl" />
                      ) : null}
                      <Text fw={700} style={{ fontFamily: "Cinzel" }}>
                        {loc.name}
                      </Text>
                    </Group>
                  </Accordion.Control>

                  <Accordion.Panel>
                    <Stack gap="xs">
                      {loc.areas.map((area) => (
                        <AreaItem
                          key={area.name}
                          area={area}
                          active={slugify(area.name) === activeAreaSlug}
                          onClick={() => goToArea("alliances", area.name)}
                        />
                      ))}
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </ScrollArea>
        </Tabs.Panel>

        <Tabs.Panel value="dlc">
          <ScrollArea h="100%" offsetScrollbars type="auto">
            <Stack gap={4} mt="sm">
              {dlcAreas.map((area) => (
                <AreaItem
                  key={area.name}
                  area={area}
                  active={slugify(area.name) === activeAreaSlug}
                  onClick={() => goToArea("dlc", area.name)}
                />
              ))}
            </Stack>
          </ScrollArea>
        </Tabs.Panel>

        <Tabs.Panel value="neutral">
          <ScrollArea h="100%" offsetScrollbars type="auto">
            <Stack gap={4} mt="sm">
              {neutralAreas.map((area) => (
                <AreaItem
                  key={area.name}
                  area={area}
                  active={slugify(area.name) === activeAreaSlug}
                  onClick={() => goToArea("neutral", area.name)}
                />
              ))}
            </Stack>
          </ScrollArea>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}
