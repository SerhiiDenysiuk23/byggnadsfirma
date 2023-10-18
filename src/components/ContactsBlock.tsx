import React from 'react';
import {ReactComponent as PointIcon} from "../assets/point.svg";
import {ReactComponent as Details} from "../assets/details.svg";


const ContactsBlock = () => {
  return (
    <div className="contacts">

      <h2>Kontakta oss</h2>
      <div className='contact-item'>
        <div>E-post:</div>
        <a href="mailto:info@incbygg.se">info@incbygg.se</a></div>
      <p>
        <div className="list-point"><PointIcon/> För projektförfrågningar:</div>
        <div className='list-point-subtitle'><strong>Andreas Ferm</strong>, VD</div>
        <div className='contact-item'>
          <div>Telefon:</div>
          0709 997970
        </div>
        <div className='contact-item'>
          <div>E-post:</div>
          <a href="mailto:af@incbygg.se">af@incbygg.se</a></div>
      </p>

      <p>
        <div className="list-point"><PointIcon/> För pågående projekt:</div>
        <div className='contacts__row'>
          <div>
            <div className="list-point-subtitle"><strong>Johan Bäckbro</strong>,<br/> projektledare</div>
            <div className='contact-item'>
              <div>Telefon:</div>
              0767860062
            </div>
            <div className='contact-item'>
              <div>E-post:</div>
              <a href="mailto:jb@incbygg.se">jb@incbygg.se</a></div>
          </div>

          <div>
            <div className="list-point-subtitle"><strong>Mustafa Imamovic</strong>,<br/> arbetsledare</div>
            <div className='contact-item'>
              <div>Telefon:</div>
              0702 507086<br/></div>
            <div className='contact-item'>
              <div>E-post:</div>
              <a href="mailto:mi@incbygg.se">mi@incbygg.se</a></div>
          </div>
        </div>
      </p>

      <p className='invoices-info'>
        <div className="list-point"><PointIcon/>
          Fakturor mailas till:
        </div>

        <a href="mailto:inbox.lev.208998@arkivplats.se" target="_blank"
           rel="noopener">inbox.lev.208998@arkivplats.se</a>

        <div className="contacts__center invoices-info__details">
          E-postfakturor skall vara i formatet PDF. <br/>
          Det är viktigt att faktureringsadressen står på varje
          faktura. <br/>
          Samtliga fakturor skall projektmärkas.
          <Details/>
        </div>
      </p>

      <p>
        <div className="list-point"><PointIcon/> Fakturaadress:</div>
        <div className="contacts__center">
          INC Byggnadsfirma AB<br/>
          FE 20273<br/>
          838 76 Frösön
        </div>
      </p>

    </div>
  );
};

export default ContactsBlock;