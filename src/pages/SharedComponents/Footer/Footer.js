import React from 'react';

const Footer = () => {
    return (
      <footer>
          <div className="footerSection">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="authorMeta">
                              Created by || <a href="https://rafix.netlify.app">MH Rafiz</a>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="socialMeta">
                             <span className="fab fa-facebook"></span> 
                             <span className="fab fa-linkedin"></span> 
                             <span className="fab fa-twitter"></span> 
                             <span className="fab fa-youtube"></span> 
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    );
};

export default Footer;