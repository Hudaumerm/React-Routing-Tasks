import './App.css';
import NavbarItem from './Components/NavbarItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationForm from './Components/RegistrationForm';
import SignUp from './Components/SignUp';
import WelcomePage from './Components/WelcomePage';
import DetailPage from './Components/DetailPage';

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarItem/>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/registration' element={<RegistrationForm />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/details' element={<DetailPage/>}/>

      </Routes>
      </BrowserRouter>
      <DetailPage/>
    </div>
  );
}

export default App;
