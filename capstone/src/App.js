import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import StartPage from './Components/StartPage.js'
import GenImages from './Components/GenImages.js'; // This is the new page you'll navigate to
import { Button, Container } from 'reactstrap';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Container>
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/genImages" element={<GenImages />} /> 
      </Routes>
    </Router>
    </Container>
  );

}

export default App;
