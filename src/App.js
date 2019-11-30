import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                    render={() => <DialogsContainer />}
                />
                <Route path='/profile/:userID?'
                    render={() => <ProfileContainer />}
                />
                <Route path='/users'
                    render={() => <UsersContainer />}
                />
                <Route path='/news'
                    render={() => <News />}
                />
            </div>
        </div>
    )
}

export default App;