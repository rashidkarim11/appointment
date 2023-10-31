import React, { useEffect, useState } from "react";
import ContactForm from "../../component/contactData/contactForm";
import ContactTableData from "../../component/contactData/contactFormData";
import { getAllContacts } from "../../api/contact";
function ContactPage() {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    getAllContacts()
      .then(({ data }) => {
        setContactData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="">
        <ContactForm />
        <ContactTableData contactData={contactData} />
      </div>
    </>
  );
}

export default ContactPage;
