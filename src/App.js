import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      
      <Contact name="Nora Anderson" avatar="https://randomuser.me/api/portraits/women/65.jpg" online/>
      <Contact name="Wade Johnson" avatar="https://randomuser.me/api/portraits/men/28.jpg" />
      <Contact name="Ashley Moore" avatar="https://randomuser.me/api/portraits/women/68.jpg" online/>
    </div>
  );
}

export default App;
