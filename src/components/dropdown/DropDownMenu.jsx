import { Link } from 'react-router-dom';
import './DropDownMenu.scss';

const DropDownMenu = (props) => {
  return (
    <div className="dropDownMenu">
    <ul>
    <li>
        <Link to='/allDishes'>All Dishes</Link>
      </li>
      <li>
        <Link to='/soup'>Soup</Link>
      </li>
      <li>
        <Link to='/swallow'>Swallow</Link>
      </li>
      <li>
        <Link to='/others'>Others</Link>
      </li>   
    </ul>
  </div>
  );
};

export default DropDownMenu;