
import { Routes , Route} from 'react-router-dom';
import './App.css';
import Authentication from './Components/Authentication/Authentication';
import RootLayout from './Components/Layout/Root';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<RootLayout />}/>
          <Route index element={<Authentication />} />
          <Route path='/profile' element={<Profile />} />

      </Routes>
    </div>
  );
}

export default App;
