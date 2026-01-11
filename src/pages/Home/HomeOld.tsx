import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Container, Title } from "@mantine/core";
import { IconHeartFilled } from "@tabler/icons-react";
import { ROUTES } from "@/pages/paths";
import classes from "./Home.module.css";

export function HomeOld() {
  const navigate = useNavigate();

  function handleNavigate(path: string) {
    navigate(path);
  }

  return (
    <Container size="sm" className={classes.container}>
      <Title ta="center" mb="10">
        Welcome to Tamriel Companion!
      </Title>
      <Box className={classes.box}>
        <Button
          variant="filled"
          color="cyan"
          size="md"
          radius="md"
          className={classes.buttons}
          leftSection={
            <Avatar
              src="/assets/eso/antiquities.png"
              alt="Antiquities"
              radius="sm"
            />
          }
          onClick={() => handleNavigate(ROUTES.antiquities)}
        >
          Antiquities
        </Button>
        <Button
          variant="filled"
          color="cyan"
          size="md"
          radius="md"
          className={classes.buttons}
          onClick={() => handleNavigate(ROUTES.achievements)}
        >
          Achievements
        </Button>
      </Box>
      <h3>There will be more content from my app.</h3>
      <p className={classes.icon}>
        Made by Koneweczka with <IconHeartFilled />
      </p>
    </Container>
  );
}
