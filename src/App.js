import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';
import Layout from './pages/Layout/Layout';
import Services from './pages/Services/service';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/header' element={<Header/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/' element={<Layout/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
  );
}

export default App;
