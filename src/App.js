import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routing } from './router';
import { ContextData } from './context/ContextData';
function App() {
  return (
    <ContextData>
      <div className="App">
        <Router>
          <div>
            <Routing />
          </div>
        </Router>
      </div>
    </ContextData>
  );
}

export default App;
