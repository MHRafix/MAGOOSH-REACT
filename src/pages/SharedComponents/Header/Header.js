import React from 'react';
import Logo from '../../../logo.svg';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
       <section>
           <div className="headerSection">
               <div className="container">
                   <div className="navBarArea">
                      <nav className="navbar navbar-expand-lg navbar-light">
                         <div className="container-fluid">
                            <img width="165" src={Logo} alt="siteLogo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" id="proActive" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link">Tests</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link">Exam</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link">Quiz</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link">Subjects</Link>
                            </li>
                          </ul>
                          </div>
                         </div>
                    </nav>
                  </div>
                </div>
            </div>
       </section>
    );
};

export default Header;