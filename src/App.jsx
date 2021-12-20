import React, { useState } from 'react';
import init, { greet } from '../pkg';

import './App.scss';

function App() {
  const [name, setName] = useState('');

  const changeName = ({ target: { value } }) => setName(value);
  const sayHello = async (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;

    await init();
    greet(name);
  };

  return (
    <div className="app">
      <h1>React Rust App</h1>
      <form onSubmit={sayHello}>
        <fieldset>
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={changeName}
            autoFocus
          />
        </fieldset>
        <button>Say hello</button>
      </form>
    </div>
  );
}

export default App;
