import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Navigation from './components/navigation';
import HomePage from './pages/home';
import ServicesPage from './pages/services';

export function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
