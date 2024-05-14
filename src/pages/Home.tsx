import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mantine/core';

export function Home() {
  const navigate = useNavigate();

  function handleNavigate(path: string) {
    navigate(path);
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Tamriel Companion App!</p>
      <div>
        <img src="/antiquities.png" alt="antiquities" />
        <Button
          variant="filled"
          color="cyan"
          size="md"
          radius="md"
          style={{ marginBottom: '10px' }}
          leftSection={<Avatar src="/antiquities.png" alt="Antiquities" />}
          onClick={() => handleNavigate('/antiquities')}
        >
          Antiquities
        </Button>
      </div>
      <div>
        <Button
          variant="filled"
          color="cyan"
          size="md"
          radius="md"
          onClick={() => handleNavigate('/achievements')}
        >
          Achievements
        </Button>
      </div>
      <h3>There will be more content from my app.</h3>
    </div>
  );
}
