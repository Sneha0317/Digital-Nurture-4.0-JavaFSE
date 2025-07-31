import React from 'react';

export function OddPlayers({ players }) {
  const [first, , third, , fifth] = players;
  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}


export function EvenPlayers({ players }) {
  const [, second, , fourth, , sixth] = players;
  return (
    <div>
      <h2>Even Players</h2>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}


export const IndianTeam = [
  'Sachin1', 'Dhoni2', 'Virat3',
  'Rohit4', 'Yuvaraj5', 'Raina6'
];


const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];


export function MergedIndianPlayers() {
  return (
    <div>
      <h2>List of Indian Players Merged:</h2>
      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}
