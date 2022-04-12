import React from 'react';
import './App.css';
import Body from './components/Body-DefaultProps';
import FunctionalProps from './components/FunctionalProps';
import Generics from './components/Generics';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header title='React-Typescript'>
        <h1>Name is Bong! James Bong!</h1>
      </Header>
      <div className="container">
      <Body />
      <FunctionalProps>
        {(state) => <h1>{state}</h1>}
      </FunctionalProps>
      <Generics items={['libe', 23]} render={(item) => <li>{item}</li>} />
      </div>
      
    </div>
  );
}

export default App;
