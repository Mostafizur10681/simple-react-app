
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SingleComment from './components/SingleComment';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/:id' element={<SingleComment></SingleComment>}></Route>
      </Routes>
    </div>
  );
}

export default App;

