import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/layout/Header';
import Footer from './components/Footer/Footer';
import Login from "./components/Login/Login";
import Categories from './components/Categories/Categories';
import Ideas from "./components/ideas/Ideas";
import LivingRoom from './components/Categories/Departments/Livingroom/LivingRoom';
import Kitchen from './components/Categories/Departments/Kitchen/Kitchen';
import Diningroom from './components/Categories/Departments/Diningroom/Diningroom';
import Bedroom from './components/Categories/Departments/Bedroom/Bedroom';
import Office from './components/Categories/Departments/Kitchen/Office/Office';
import Collections from './components/Collections/Collections';
import Beds from './components/Categories/Specifics/Beds/Beds';
import Chairs from './components/Categories/Specifics/Chairs/Chairs';
import Sofas from './components/Categories/Specifics/Sofas/Sofas';
import Tables from './components/Categories/Specifics/Tables/Tables';
import Japanese from './components/Collections/Packs/Japanese/Japanese';
import Modern from './components/Collections/Packs/Modern/Modern';
import Valebeck from './components/Collections/Packs/Valebeck/Valebeck';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    
    <div className="App">
    
          <Header/>
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='categories' element={<Categories/>}/>
              <Route path='ideas' element={<Ideas/>}/>
              <Route path='livingroom' element={<LivingRoom/>}/>
              <Route path='bedroom' element={<Bedroom/>}/>
              <Route path='kitchen' element={<Kitchen/>}/>
              <Route path='diningroom' element={<Diningroom/>}/>
              <Route path='office' element={<Office/>}/>
              <Route path='categories' element={<Categories/>}/>
              <Route path='collections' element={<Collections/>}/>
              <Route path='beds' element={<Beds/>}/>
              <Route path='chairs' element={<Chairs/>}/>
              <Route path='sofas' element={<Sofas/>}/>
              <Route path='tables' element={<Tables/>}/>
              <Route path='japanese-collection' element={<Japanese/>}/>
              <Route path='modern-collection' element={<Modern/>}/>
              <Route path='valebeck-collection' element={<Valebeck/>}/>
              <Route path='check-out' element={<CheckOut/>}/>
            </Routes>              
          </main>
       <Footer/>
    </div>
  );
}

export default App;
