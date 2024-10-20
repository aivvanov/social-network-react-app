import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components//Header/Header';
import Profile from './components/Profile/Profile';
import Info from './components/Info/Info';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
// import { Footer } from './components/Footer/Footer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/info' element={<Info />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
