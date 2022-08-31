import './App.css';
import User from './crud/User';
import { Route, Routes } from 'react-router-dom';
import DetailUser from './crud/DetailUser';
import AddUser from './crud/AddUser';
import UpdateUser from './crud/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<User />} />
        <Route path="/add" exact element={<AddUser />} />
        <Route path="/edit/:id" exact element={<UpdateUser />} />
        <Route path="/detail/:id" exact element={<DetailUser />} />
      </Routes>
    </div>
  );
}

export default App;
