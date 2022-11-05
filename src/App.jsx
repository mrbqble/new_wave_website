import { profile } from './actions/user';
import { DefaultContext } from "./Context";
import { useState, useEffect } from 'react';
import { Map } from './components/functions/map';
import { Signin } from './components/auth/signin';
import { Event } from "./components/mainpage/event";
import { Profile } from './components/auth/profile';
import { getEducation, getEvents, getUsers } from './actions/add';
import { Fullform } from './components/auth/fullform';
import { Rating } from './components/functions/rating';
import { Home } from './components/mainpage/home/index';
import { AdminPage } from './components/functions/admin';
import { Navbar } from './components/mainpage/navbar/index';
import { Footer } from './components/mainpage/footer/index';
import { Document } from './components/functions/documents';
import { Report } from "./components/functions/report/index";
import { Registration } from './components/auth/registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Verificator } from './components/functions/verification';
import validator from "validator";

// Functions:
//  1)  Sign up                             Done
//  2)  Sign in                             Done
//  3)  Profile                             Done
//  4)  Documents                           Done half
//  5)  Edit profile                        Done
//  6)  Event declaration                   Done
//  7)  Event uploader app                  Done
//  8)  Creating of certificates            Done
//  9)  Map with recycling points           Done
//  10) Animations carousel/header          Done
//  11) Verification of certificates        Done
//  12) Registering to/leaving events       Done
//  13) Rating of volunteers by hours       Done
//  14) Reporting system for coordinators   Done
//  15) Donating                            
//  16) Adaptives                           
//  17) Pagination                          
//  18) Email sending                       
//  19) Password recovery                   
//  20) Recycling information               
//  21) Attaching tasks to coordinators     
//  22) Profile photo                       Done

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function App() {

  let width = window.innerWidth;
  const [users, setUsers] = useState();
  const [events, setEvents] = useState();
  const [email, setEmail] = useState('');
  const [edit, setEdit] = useState(false);
  const [current, setCurrent] = useState(0);
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuth, setIsAuth] = useState(token ? true : false);
  const [alert, setAlert] = useState(false);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [button, setButton] = useState('');
  const [edu, setEdu] = useState([]);

  const handleSetIsAuth = () => {
    setIsAuth(!isAuth);
  };

  const reboot = () => {
    setEmail("");
    setPassword("");
  }

  const isValidEmail = () => {
    return validator.isEmail(email);
};
  
  useEffect(() => {
    profile(email, token).then(response => setUser(response));
    getEvents().then(response => setEvents(response));
    getUsers().then(response => setUsers(response.sort((a, b) => a.firstName.localeCompare(b.firstName))));
    getEducation().then(response => setEdu(response));
  }, []);

    useEffect(() => {
        width = window.innerWidth;
    }, [window])

  return (
    <div className="App">
      <DefaultContext.Provider value={{
        width,
        edu,
        user,
        edit,
        users,
        email,
        token,
        isAuth,
        events,
        months,
        current,
        password,
        reboot,
        setEdu,
        setText,
        setEdit,
        setUser,
        setTitle,
        setAlert,
        setUsers,
        setEmail,
        setToken,
        setButton,
        setEvents,
        setCurrent,
        setPassword,
        isValidEmail,
        handleSetIsAuth
      }}>
        <BrowserRouter>
          <div className={`alert ${alert ? "visible" : "unvisible"}`}>
            <div className='alertBox'>
              <p className='title'>{title}</p>
              <p className='alertText'>{text}</p>
              <a className='cert btn' onClick={() => setAlert(false)}>{button}</a>
            </div>
          </div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/map' element={<Map/>}/>
            <Route path='/event' element={<Event/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/report' element={<Report/>}/>
            <Route path="/rating" element={<Rating/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/reg' element={<Registration/>}/>
            <Route path='/fullform' element={<Fullform/>}/>
            <Route path='/verify' element={<Verificator/>}/>
            <Route path='/documents' element={<Document/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </DefaultContext.Provider>
    </div>
  );
}

export default App;
