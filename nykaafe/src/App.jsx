import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import EditProduct from './pages/EditProduct';
import EditUser from './pages/EditUser';
import UserProduct from './pages/UserProduct';
import CreateProduct from './pages/CreateProduct';
import Register from './pages/Register';
import Login from './pages/Login';
import SortType from './pages/SortType';
import Nopage from './pages/Nopage';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import UserList from './pages/UserList';

function App() {
  const [count, setCount] = useState(0);
  const [heading, setHeading] = useState(() => {
    return (JSON.parse(localStorage.getItem('heading')) || 'Heading')
  });

  localStorage.setItem('heading', JSON.stringify(heading))
  // console.log(heading)

  return (
    <>
    <div className="header">
      <Header heading={heading} setHeading={setHeading} />
    </div>
    <div className="main">
      <Routes>
        <Route path='/' element={<Home
          heading={heading} setHeading={setHeading} />} />
        <Route path='/cart' element={<CartDrawer />} />
        <Route path='/productdetail' element={<ProductDetail />} />
        <Route path='/editproduct' element={<EditProduct />} />
        <Route path='/edituser' element={<EditUser />} />
        <Route path='/listuser' element={<UserList />} />
        <Route path='/userproduct' element={<UserProduct />} />
        <Route path='/createproduct' element={<CreateProduct />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sort' element={<SortType />} />
        <Route path='/*' element={<Nopage />} />
      </Routes>
      <Footer />
    </div>

  </>
  )
}

export default App
