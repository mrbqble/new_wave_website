import { useState } from 'react';
import {DefaultContext} from "./Context";
import {Signin} from './components/signin';
import {Profile} from './components/profile';
import {Home} from './components/home/index';
import {Fullform} from './components/fullform';
import {Navbar} from './components/navbar/index';
import {Footer} from './components/footer/index';
import {Registration} from './components/registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Functions:
//  1) Sign up                            Done
//  2) Sign in                            Done
//  3) Profile                            Done
//  4) Certification                      Done
//  5) Event declaration                  
//  6) Registering to events
//  7) Reporting system for coordinators
//  8) 

function App() {

  const [email, setEmail] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');

  const handleSetIsAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <div className="App">
      <DefaultContext.Provider value={{
        email,
        isAuth,
        password,
        setEmail,
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
            <Route path='/fullform' index element={<Fullform/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </DefaultContext.Provider>
    </div>
  );
}

export default App;
