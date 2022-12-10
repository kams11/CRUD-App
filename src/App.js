import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import About from './WebPages/About';
import Home from './WebPages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Contact from './WebPages/Contact';
import Users from './Components/Users';
import AddUser from './Components/AddUser';
import PageNotFound from './WebPages/PageNotFound';
import Navbar from './Layouts/Navbar';
import EditUser from './Components/EditUser';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/users/:id" element={<Users/>} />
              <Route path="/users/add" element={<AddUser/>} />
              <Route path="/users/edit/:id" element={<EditUser/>} />
              <Route path="/*" element={<PageNotFound/>} />
          </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;
