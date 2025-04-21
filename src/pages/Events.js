import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const imageBasePath = '/images/events/';
const images = [
  {
    src: `${imageBasePath}d-com_3.jpg`,
    alt: 'Speaking Event',
    description: "Presenting at SAP's D-com on leveraging LLMs for business customization challenges",
  },
  {
    src: `${imageBasePath}meetup_1.jpg`,
    alt: 'Meetup Event 1',
    description: 'Inspired by the release of ChatGPT, I founded a meetup to brainstorm and explore its possibilities',
  },
  {
    src: `${imageBasePath}hackathon_hosted_1.png`,
    alt: 'Hackathon Hosted',
    description: 'Event planning is tough, but seeing the AI hackathon I organized come together was incredibly rewarding',
  },
  {
    src: `${imageBasePath}kilojoule.jpg`,
    alt: 'Kilojoule Hackathon Winning',
    description: "Led the winning team, Kilojoule, at SAP's global HackAIthon",
  },
];

const imageContainerStyle = {
  position: 'relative',
  marginBottom: '1.5rem',
  maxWidth: '100%',
  display: 'block',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
};

const overlayStyle = {
  position: 'absolute',
  top: '15px',
  left: '15px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: 'white',
  padding: '8px 12px',
  borderRadius: '4px',
  fontSize: '0.9rem',
  maxWidth: '70%',
  boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
};

const Events = () => (
  <Main
    title="Events"
    description="Brian Morris's Personal & Community Involvement"
  >
    <article className="post" id="events">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/events">Personal & Community Involvement</Link></h2>
          <p>Photos from meetups, hackathons, and speaking events.</p>
        </div>
      </header>
      <div>
        {images.map((image) => (
          <div key={image.src} style={imageContainerStyle}>
            <img
              src={image.src}
              alt={image.alt}
              style={imageStyle}
            />
            <div style={overlayStyle}>
              {image.description}
            </div>
          </div>
        ))}
      </div>
    </article>
  </Main>
);

export default Events;
