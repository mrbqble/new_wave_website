import { useState, useEffect } from 'react';
import {Event} from "./components/event";
import {DefaultContext} from "./Context";
import {Signin} from './components/signin';
import {Profile} from './components/profile';
import {Home} from './components/home/index';
import {Fullform} from './components/fullform';
import {Navbar} from './components/navbar/index';
import {Footer} from './components/footer/index';
import {Registration} from './components/registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Verificator } from './components/verification';
import { getEvents } from './actions/user';

// Functions:
//  1) Sign up                            Done
//  2) Sign in                            Done
//  3) Profile                            Done
//  4) Certification                      Done
//  5) Event declaration                  Done
//  6) Registering to events              Done
//  7) Reporting system for coordinators  
//  8) 

function App() {

  const [user, setUser] = useState([]);
  const [email, setEmail] = useState('');
  const [event, setEvent] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [events, setEvents] = useState();
  const [current, setCurrent] = useState(0);

  const handleSetIsAuth = () => {
    setIsAuth(!isAuth);
  };
  
  useEffect(() => {
    getEvents().then(response => setEvents(response));
  }, []);

  return (
    <div className="App">
      <DefaultContext.Provider value={{
        user,
        event,
        email,
        isAuth,
        password,
        events,
        current, 
        setCurrent,
        setEvents,
        setUser,
        setEmail,
        setEvent,
        setPassword,
        handleSetIsAuth
      }}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/reg' element={<Registration/>}/>
            <Route path='/fullform' element={<Fullform/>}/>
            <Route path='/verify' element={<Verificator/>}/>
            <Route path='/event' element={<Event/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </DefaultContext.Provider>
    </div>
  );
}

export default App;
