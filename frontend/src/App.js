import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/home';
import { SignUpPage } from './components/SignUpPage';
import { LandingPage } from './components/LandingPage';


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

const NavBar = () => {
  <nav className = {cssEl.Nav}>
        <div className={cssEl.item}>
            <NavLink to='/profile'>Home</NavLink>
        </div>
        <div className={cssEl.item}>
           < a>Login</a>
        </div>
        <div className={cssEl.item}>
            <NavLink to='/dialouges'>Sign up</NavLink>
        </div>
            <div className={cssEl.item}>
                <NavLink to='/users'>Landing page</NavLink>
            </div>
        <div className={cssEl.item}>
            <a>Posts</a>
        </div>
        <div className={cssEl.item}>
            <a>Music</a>
        </div>
    </nav>
}

export class App extends React.Componenet {
  componentDidMount () {

  }

  render () {
    <BrowserRouter>
    
      <Routes>
        <Route path = '/home' element={HomePage}></Route>
        <Route path = '/login' element={LoginPage}></Route>
        <Route path = '/sidnup' element={SignUpPage}></Route>
        <Route path = '/info' element={LandingPage}></Route>
      </Routes>
    </BrowserRouter>
  }
}




export default App;
