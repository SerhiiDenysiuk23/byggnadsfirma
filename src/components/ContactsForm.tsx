import React from 'react';
import InputField from "../elements/InputField";

const i_am_radios = [
  "Bostadsrättsförening",
  "Fastighetsägare",
  "Hyresgäst",
  "Kontorsägare",
  "Privatperson",
  "Annat1"
]
const type_radios = [
  "Nybyggnation",
  "Tillbyggnation",
  "Kontorsanpassning",
  "Lokalanpassning",
  "Renovering",
  "Annat2"
]

const ContactsForm = () => {

  const zaglushka = (str: string) => {

  }

  return (
    <div className="contacts-form">
      <h2>Skicka en förfrågan så kontaktar vi dig</h2>
      <form action="">
        <div className='field-area'>
          <InputField label={"Förnamn"} changeHandler={zaglushka}/>
          <InputField label={"Telefon"} changeHandler={zaglushka}/>
          <InputField label={"Efternamn"} changeHandler={zaglushka}/>
          <InputField label={"E-post"} changeHandler={zaglushka}/>
        </div>
        <div className='radio-area'>
          <div className='radio-col'>
            <div className='radio-title'>Jag är</div>
            {
              i_am_radios.map(x => (
                <div key={x}>
                  <input name="i_am" value={x} id={x} type="radio"/>
                  <label htmlFor={x}>{x.replace(/[0-9]/, "")}</label>
                </div>
              ))
            }
          </div>
          <div className='radio-col'>
            <div className='radio-title'>Projekttyp</div>
            {
              type_radios.map(x => (
                <div key={x}>
                  <input name="type" value={x} id={x} type="radio"/>
                  <label htmlFor={x}>{x.replace(/[0-9]/, "")}</label>
                </div>
              ))
            }
          </div>
        </div>
        <button type='submit'>Skicka</button>
      </form>
    </div>
  );
};

export default ContactsForm;