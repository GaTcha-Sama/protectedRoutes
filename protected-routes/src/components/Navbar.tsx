import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';

export const Navbar = () => {
    const {isConnected, logOut} = useAuthContext()
  return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile (private)</Link>
            <Link to="/about">About (public)</Link>
        </nav>
        {isConnected && <button onClick={logOut}>Disconnect</button>}
    </>
  );
};