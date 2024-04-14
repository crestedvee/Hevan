import Navbar from "../navbar/Navbar";
import './header.scss';

const Header = () => {

  return (
    <>
      <Navbar />
      <div className="headerImg">
      <img src={require('../../assets/h6c.png')} alt="headerImage"/>
      </div>
      <h2>
        Popular Nigerian Dishes
      </h2>
      <hr />
    </>
  );
}

export default Header;