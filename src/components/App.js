import React from 'react';
import './App.scss';
import Dropdown from './Dropdown';
import rusFlag from '../images/flags/rus.svg';
import engFlag from '../images/flags/eng.svg';
import spainFlag from '../images/flags/spain.svg';
import germanyFlag from '../images/flags/germany.svg';
import italyFlag from '../images/flags/italy.svg';
import polandFlag from '../images/flags/poland.svg';

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
