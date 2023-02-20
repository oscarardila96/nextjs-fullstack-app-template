import Cards from './Cards';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

export default function NavigateLayout({ children }) {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <Footer />
      <main>{children}</main>
    </>
  );
}
