import React, { useState } from 'react';
import P from '../components/P/P';
import Heading from '../components/Heading/Heading';
import Button from '../components/Button/Button';

const PingData = ({ state }) => {
  switch (state.status) {
    case 'IDLE':
      return null;
    case 'PENDING':
      return <P>Loading...</P>;
    case 'SUCCESS':
      return <P style={{ color: 'green' }}>{state.data.message}</P>;
    case 'ERROR':
      return (
        <P role="alert" style={{ color: 'tomato' }}>
          Oops some error occured: {state.error}
        </P>
      );
    default:
      throw new Error('Unhandled case in <PingData/>');
  }
};

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
