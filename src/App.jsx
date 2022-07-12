import Navbar from './components/navbar/index';
import Home from './components/home/index';
import Footer from './components/footer/index';
import Registration from './components/registration';
import FullForm from './components/fullform';
import SignIn from './components/signin';
import Profile from './components/profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const handleSetIsAuth = () => {
    setIsAuth(!isAuth);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAuth={isAuth}/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/reg' element={<Registration/>}/>
          <Route path='/fullform' element={<FullForm/>}/>
          <Route path='/signin' element={<SignIn handleSetIsAuth = {handleSetIsAuth}/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
