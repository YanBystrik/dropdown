import React from 'react';
import './App.scss';
import Dropdown from './Dropdown';
import rusFlag from './images/flags/rus.png';
import engFlag from './images/flags/eng.png';
import spainFlag from './images/flags/spain.png';
import germanyFlag from './images/flags/germany.png';
import italyFlag from './images/flags/italy.png';
import polandFlag from './images/flags/poland.png';

const items = [
  {
    id: 1,
    value: 'Русский',
    img: rusFlag,
  },
  {
    id: 2,
    value: 'Английский',
    img: engFlag,
  },
  {
    id: 3,
    value: 'Испанский',
    img: spainFlag,
  },
  {
    id: 4,
    value: 'Немецкий',
    img: germanyFlag,
  },
  {
    id: 5,
    value: 'Итальянский',
    img: italyFlag,
  },
  {
    id: 6,
    value: 'Польский',
    img: polandFlag,
  },
];


function App() {
  return (
    <div className="container">
      <Dropdown title='Выбрать язык:' items={items} multiSelect/>
    </div>
  );
}

export default App;
