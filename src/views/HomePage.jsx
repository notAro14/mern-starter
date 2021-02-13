import React, { useState } from 'react';
import P from '../components/P/P';
import Heading from '../components/Heading/Heading';
import Button from '../components/Button/Button';
import PingData from '../components/PingData/PingData';

const HomePage = () => {
  const [state, setState] = useState({
    status: 'IDLE',
    data: null,
    error: null,
  });
  const onClick = async () => {
    setState({
      status: 'PENDING',
      data: null,
      error: null,
    });
    const response = await fetch('/api/ping');
    if (response.ok) {
      const data = await response.json();
      setState({
        status: 'SUCCESS',
        data,
        error: null,
      });
    } else {
      setState({
        status: 'ERROR',
        data: null,
        error: response.statusText,
      });
    }
  };
  return (
    <div>
      <Heading>MERN stack starter</Heading>
      <P>Boostrap your SPA React project</P>
      <Button type="button" onClick={onClick}>
        Ping API
      </Button>
      <PingData state={state} />
    </div>
  );
};

export default HomePage;
