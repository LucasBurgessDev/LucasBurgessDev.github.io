import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom' 
import { Button } from './button';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" OnClick={closeMobileMenu}>
              <i className="fas fa-database"></i>LucasBurgessDev
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              {/*                        <li className='nav-item'>
                            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                         <li className='nav-item'>
                            <Link to='/extra-projects' className='nav-links' onClick={closeMobileMenu}>
                                Extra Projects
                            </Link>
<<<<<<< HEAD
                        </li> */}
              <li className="nav-item">
                <Link
                  to="/blog"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </li>
=======
                        </li> 
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>*/}
>>>>>>> 31d383fc (remove resume from navbar)
            </ul>
            {button && <Button buttonStyle="btn--outline">CONTACT ME</Button>}
          </div>
        </nav>
      </>
    );
}

export default NavBar