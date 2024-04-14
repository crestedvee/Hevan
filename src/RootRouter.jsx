import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from "react-router-dom";

const RootRouter = () => {
  return(
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootRouter;