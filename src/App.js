import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Order from './components/Order';
import Product from './components/Product/Product';
import Products from './components/Products';
import Myorders from './components/Myorders';
import Signout from './components/auth/Signout';
import Admin from './components/admin/Admin'; 
import Navbar from './Layouts/Navbar';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './Routing/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import Footer from './Layouts/Footer';
import Details from './components/Product/Details';

function App() {
  return (
    <div>
      <div><Toaster /></div>

      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signout' element={<Signout />} />
        <Route path='/signup' element= {<Signup />} />
        <Route path='/order' element= {<Order />} />
        <Route path='/shop' element= {<Products />} />
        <Route path='/shop/:productId' element= {<Product />} />
        <Route path='/admin' element= {<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
