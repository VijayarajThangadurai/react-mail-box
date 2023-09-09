import React, { useEffect } from 'react';
import { Routes , Route} from 'react-router-dom';
import './App.css';
import Authentication from './Components/Authentication/Authentication';
import RootLayout from './Components/Layout/Root';
import Compose from './Components/Profile/Compose';
import Root2Layout from './Components/Layout/Root2';
import Inbox from './Components/Profile/Inbox';
import { useDispatch } from 'react-redux';
import { inboxItemFill } from './store/inbox-slice';
import EmailMessage from './Components/Profile/EmailMessage';

function App() {
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(inboxItemFill(localStorage.getItem('userEmail')))
  }, [])
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<RootLayout />}/>
          <Route index element={<Authentication />} />
          <Route path="/profile" element={<Root2Layout />} exact>
            <Route path="/profile/compose" element={<Compose />} exact/>
            <Route path="/profile/inbox" element={<Inbox />} exact/>
            <Route path='/profile/inbox/message' element={<EmailMessage/>} exact/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
