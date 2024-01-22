import { useState } from 'react';
import '@mantine/core/styles.css';
import { Button } from '@mantine/core';
import { Antiquities } from './pages/Antiquities';
import './App.css';

function App() {
  const [showAntiquities, setShowAntiquities] = useState(false);

  function handleClick() {
    setShowAntiquities(!showAntiquities);
  }

  return (
    <>
      <h1>Tamriel Companion App</h1>
      <Button variant='filled' color='cyan' size='md' radius='md' onClick={handleClick}>
        Antiquities
      </Button>
      {showAntiquities && <Antiquities />}
      <p>There will be more content from my app.</p>
    </>
  );
}

export default App;
