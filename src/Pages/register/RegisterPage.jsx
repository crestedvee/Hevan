import './Register.scss';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import {useState} from 'react';

const RegisterPage = () => {

  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  return (
    <div className='register'>
      <form>
        <div>
          <div className="imgDiv">
            <h1>Sign up</h1>
            <img src={require("../../assets/hlogo.png")} alt="logo" />
          </div>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <input type='number' placeholder='Phone Number' />
          <div className='passDiv'>
            <input type={type} value={password} className='passd' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)} />
            <span className="eye" onClick={handleToggle}>
              <Icon class="absolute mr-10" icon={icon} size={25} />
            </span>
          </div>
          <input type={type} placeholder='Confirm Password' />
          <input type='submit' className='button' value="Register" />
          <p>
            Already have an account? &nbsp;
            <Link to='/signIn' as={Link} className="forgot">Sign In</Link>

          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;