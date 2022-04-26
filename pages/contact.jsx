import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import styles from "../styles/Contact/ContactPage.module.css";
import ContactHome from "../components/Contact/ContactHome"

const Contact = () => {
  return (
    <>
    <Navbar color={"black"}/>
    <Layout />
    <main className={styles["main"]}>
Contact Page
      </main>
    <ContactHome/>
    
    </>
  );
}

export default Contact;
