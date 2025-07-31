
import React from 'react';
import {
  OddPlayers,
  EvenPlayers,
  MergedIndianPlayers,
  IndianTeam
} from './IndianPlayers';

import ListofPlayers from './ListofPlayers';

function App() {
  const flag = true; // we can change this to false to view odd even and merged players

  return (
    <div>
      {flag === true ? (
        <ListofPlayers />
      ) : (
        <>
          <OddPlayers players={IndianTeam} />
          <hr />
          <EvenPlayers players={IndianTeam} />
          <hr />
          <MergedIndianPlayers />
        </>
      )}
    </div>
  );
}

export default App;

