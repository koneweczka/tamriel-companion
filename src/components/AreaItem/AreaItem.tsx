import { Avatar, Group, rem, Text, UnstyledButton } from "@mantine/core";
import type { ChapterArea } from "@/@typings/database-types";

export function AreaItem({
  area,
  onClick,
  active,
}: {
  area: ChapterArea;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <UnstyledButton
      onClick={onClick}
      style={{
        width: "100%",
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: rem(12),
        background: active ? "rgba(202, 249, 144, 0.18)" : "transparent",
        transition: "background 120ms ease",
      }}
    >
      <Group gap={rem(12)} wrap="nowrap">
        {area.avatar ? (
          <Avatar src={area.avatar} size={26} radius="xl" />
        ) : null}
        <Text fw={600} fz="md" style={{ fontFamily: "Cinzel" }}>
          {area.name}
        </Text>
      </Group>
    </UnstyledButton>
  );
}
