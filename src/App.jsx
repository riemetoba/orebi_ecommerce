import './App.css'
import RootLayout from './components/layouts/RootLayout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Error from './components/pages/Error';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Contact from './components/pages/Contact';

const App = () => {
 

  return (
   <>
    <Routes>
        <Route path ="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
   </>
  )
}

export default App
