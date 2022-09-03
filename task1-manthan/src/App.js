import './App.css';
import Cards from './components/Cards';
import Form from './components/Form';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Cards key="Home"/>}></Route>
          <Route exact path="/form" element={<Form key="Form"/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
