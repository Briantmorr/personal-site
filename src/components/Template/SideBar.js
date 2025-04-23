import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Brian Morris</h2>
        <p><a href="mailto:brianmorris.tech@gmail.com">brianmorris.tech@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Brian. I&apos;m an AI engineer currently working at SAP,
        where I focus on deploying LLMs into enterprise products.
        When I&apos;m not coding, you&apos;ll probably find me training for my next race
        or chasing mountain trails with a backpack.
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
