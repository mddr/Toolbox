import React, { useMemo, useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import { Home } from './home/Home';
import { Board } from './board/Board';
import { Notes } from './notes/Notes';
import { ToolboxHeader } from './home/ToolboxHeader';
import { AppTheme } from './app.models';

import './App.css';

function App() {
  const [theme, setTheme] = useState<AppTheme>('dark');

  useMemo(() => {
    axios.get('/test').then((res) => {
      console.log({ data: res.data });
    });
  }, []);
  return (
    <div
      data-test-id={'app-container'}
      className={`app ${theme === 'light' ? 'light-theme' : ''}`}
    >
      <BrowserRouter>
        <ToolboxHeader theme={theme} setTheme={setTheme} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/board">
            <Board />
          </Route>

          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
