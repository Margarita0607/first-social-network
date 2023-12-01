import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
//import { connect } from 'react-redux'
// import News from './components/News/News';
// import Settings from './components/Settings/Settings';
// import Music from './components/Music/Music';
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*'
                            element={<Profile 
                            profilePage={props.state.profilePage} 
                            dispatch={props.dispatch}  />} />

                        <Route path='/dialogs/*'
                            element={<Dialogs store={props.store} />} />
                        {/* <Route path='/news/*' element={<News />} />
                        <Route path='/settings/*' element={<Settings />} />
                        <Route path='/music/*' element={<Music />} /> */}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
