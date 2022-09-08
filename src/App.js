import './App.css';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import { Home } from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div style={{maxWidth: "30rem",margin: "4rem auto"}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addUser" element={<AddUser/>} />
          <Route path="/editUser" element={<EditUser/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
