import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';

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
        <Button
          variant="filled"
          color="cyan"
          size="md"
          radius="md"
          style={{ marginBottom: '10px' }}
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
