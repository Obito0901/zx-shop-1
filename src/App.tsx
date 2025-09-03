import { Dispatch, SetStateAction, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'shop' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = (setCurrentPage: Dispatch<SetStateAction<Page>>) => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage}/>;
      case 'shop':
        return <ShopPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage}/>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="pt-16">
        {renderPage(setCurrentPage)}
      </main>
      <Footer />
    </div>
  );
}

export default App;