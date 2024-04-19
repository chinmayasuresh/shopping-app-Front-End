import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';
import Nav from './components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
<Nav/>
<BrowserRouter>
<Routes>

<Route path="/view" element={<View/>}   />

<Route path="/" element={<Add/>}   />
<Route path="/search" element={<Search/>}   />
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
