import './Others.scss';
import Rice from '../rice/Rice';
import Beans from '../beans/Beans';

const Others = () => {
  return (
    <div className='others'>
      <h3>
        Other Dishes
      </h3>
      <hr/>
      <div>
        <Rice />
      </div>
      <div>
        <Beans />
      </div>
    </div>
  );
}

export default Others;