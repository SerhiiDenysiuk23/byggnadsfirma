import React from 'react';
import ContactsBlock from "../components/ContactsBlock";
import ContactsForm from "../components/ContactsForm";

const Contacts = () => {
  return (
    <main className={"container"}>
      <section className='contacts-section'>
        <ContactsBlock/>
        <ContactsForm/>
      </section>
    </main>
  );
};

export default Contacts;