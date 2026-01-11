import { Link, useParams } from "react-router-dom";
import {
  AppShell,
  Box,
  Button,
  Burger,
  Group,
  rem,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export function Home() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const { category, areaSlug } = useParams();

  return (
    <AppShell
      header={{ height: 75 }}
      navbar={{
        width: 350,
        breakpoint: "md",
        collapsed: { mobile: !mobileOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="center" align="center">
          <Group gap="sm" align="center">
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="md"
              size="sm"
            />
            <Title order={2} style={{ letterSpacing: rem(0.6) }}>
              Tamriel Companion
            </Title>
          </Group>

          {import.meta.env.DEV && (
            <Button component={Link} to="/__old/home" variant="light" size="xs">
              OLD Home
            </Button>
          )}
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Sidebar onNavigateMobileClose={() => mobileOpened && toggleMobile()} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Box p="md">
          {!areaSlug ? (
            <div>Wybierz area z sidebara 👈</div>
          ) : (
            <div>
              Wybrano: <b>{areaSlug}</b> ({category})
              <div style={{ marginTop: 12 }}>Tu będzie lista antiquities…</div>
            </div>
          )}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
