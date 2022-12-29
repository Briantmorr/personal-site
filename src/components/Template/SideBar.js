import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/My project.jpg`} alt="" />
      </Link>
      <header>
        <h2>Brian Morris</h2>
        <p><a href="mailto:brianmorris.tech@gmail.com">brianmorris.tech@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Brian. I like building things and being outside.
        I&apos;m an amateur potter, hobby roboticist, and love automation.
        I currently work at SAP
        as a software engineer with my head in the cloud.
        When I&apos;m not coding, I&apos;m usually playing soccer or
        planning my next backpacking trip.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Brian Morris <Link to="/">briantmorris.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
