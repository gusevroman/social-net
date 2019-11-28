import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import Users from './components/Users/Users';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                    render={() => <DialogsContainer />}
                />
                <Route path='/profile'
                    render={() => <Profile />}
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