import Header from './Navigate';

export default function NavigateLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
