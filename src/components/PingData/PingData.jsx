import React from 'react';
import P from '../P/P';

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

export default PingData;
