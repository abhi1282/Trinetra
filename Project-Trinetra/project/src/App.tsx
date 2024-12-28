import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Recovery } from './pages/Recovery';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Recovery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;