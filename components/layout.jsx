import Footer from './Footer';
import Navbar from './Navbar';

export default function NavigateLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
