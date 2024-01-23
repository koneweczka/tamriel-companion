import React, { useState } from 'react';
import '@mantine/core/styles.css';
import { Button } from '@mantine/core';
import { Antiquities } from './pages/Antiquities';
import antiquitiesJson from './sources/antiquities.json';
import './App.css';

function App() {
  // const [antiquities, setAntiquities] = useState([]);

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
      {showAntiquities && <Antiquities antiquities={antiquitiesJson} />}
      <h3>There will be more content from my app.</h3>
    </>
  );
}

export default App;
