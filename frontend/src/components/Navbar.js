import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const Navbar = () => {

    const userName = useSelector((state) => {
        return state.auth.login
    })

    const email = useSelector((state) => {
        return state.auth.email
    })

    return (
      <nav>
        <div>
            {userName}
        </div>
        <div>
            {email}
        </div>
        <hr/>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/landing'>Landing page</Link>
        </div>
        <div>
          <Link to='/login'>Login</Link>
        </div>
        <div>
          <Link to='/signup'>Sign up</Link>
        </div>
      </nav>
    )
  }