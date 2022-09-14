import '../css/DesktopLogin.css';
import Login from './Login';


function DesktopLogin( {setOpenSignUp} ) {
  return (
    <div className="desktop-login">
        <Login setOpenSignUp={setOpenSignUp} />
    </div>
  );
}

export default DesktopLogin;