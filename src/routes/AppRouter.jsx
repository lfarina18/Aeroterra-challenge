import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  return (
    <div className='container mx-auto'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
