import './Login.scss';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import {useState} from 'react';

function LoginPage() {

  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [user, setUser] = useState('');

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  const handleSubmit = () => {
    console.log('Welcome to hevan')
  }

  return (
    <div className="login">
      <form>
        <div>
          <div className='imgDiv'>
            <h1>WELCOME</h1>
            <img src={require("../../assets/hlogo.png")} alt="logo" />
          </div>
          <input type='text' placeholder='username/email' name='user'/>
          <div className='passDiv'>
            <input type={type} value={password} className='passd' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)} name='password'/>
            <span className="eye" onClick={handleToggle}>
              <Icon className="absolute mr-10" icon={icon} size={25} />
            </span>
          </div>
          <input type='submit' className='button' value="sign in" onClick={handleSubmit}/>
          <ul>
            <li>
              forgot &nbsp;<a href='/' className='forgot'>username or password ?</a>
            </li>
            <li>
              Don't have an account? &nbsp; <Link to='/signUp' as={Link} className="forgot">Sign Up</Link>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;