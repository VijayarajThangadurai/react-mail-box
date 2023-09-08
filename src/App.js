import React from 'react';
import { Routes , Route} from 'react-router-dom';
import './App.css';
import Authentication from './Components/Authentication/Authentication';
import RootLayout from './Components/Layout/Root';
import Compose from './Components/Profile/Compose';
import Root2Layout from './Components/Layout/Root2';
import Inbox from './Components/Profile/Inbox';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<RootLayout />}/>
          <Route index element={<Authentication />} />
          <Route path="/profile" element={<Root2Layout />} exact>
            <Route path="/profile/compose" element={<Compose />} />
            <Route path="/profile/inbox" element={<Inbox />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
