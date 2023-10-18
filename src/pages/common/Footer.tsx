import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div>
            <p><strong>© 2023<br/>
            </strong>INC Byggnadsfirma AB</p>
          </div>

          <div>
            <p><strong>Adress<br/>
            </strong>Stadsgårdsterminalen<br/>
              116 45 Stockholm</p>
          </div>

          <div>
            <p><strong>Telefon<br/>
            </strong></p>
          </div>

          <div>
            <p><strong>E-post<br/>
            </strong><a href="mailto:info@incbygg.se">info@incbygg.se</a></p>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;