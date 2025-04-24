import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// Projects that need a darker background for better text readability
const PROJECTS_NEEDING_BACKGROUND = [
  'Fengshu-AI',
  'Quantitative Trading with Machine Learning',
  'Artificially Intelligent Colleague',
  'Postman login Automation',
  'Automating Security Triaging',
  'Seeding Performance Load Testing',
  '3D printed Rover',
  'Nature Connect',
  'Part Pig',
];

const Cell = ({ data }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const isVideo = data.link && data.link.includes('.mov');
  const needsBackground = PROJECTS_NEEDING_BACKGROUND.includes(data.title);

  useEffect(() => {
    if (isVideo && data.videoThumbnail && !thumbnailUrl) {
      // Create a temporary video element to extract the first frame
      const tempVideo = document.createElement('video');
      tempVideo.setAttribute('src', `${process.env.PUBLIC_URL}${data.link}`);
      tempVideo.setAttribute('crossOrigin', 'anonymous');

      // Once data is loaded, extract the first frame
      tempVideo.addEventListener('loadeddata', () => {
        // Seek to the very first frame
        tempVideo.currentTime = 0;
      });

      tempVideo.addEventListener('seeked', () => {
        // Create a canvas to draw the first frame
        const canvas = document.createElement('canvas');
        canvas.width = tempVideo.videoWidth;
        canvas.height = tempVideo.videoHeight;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);

        // Convert canvas to URL and set as thumbnail
        try {
          const dataUrl = canvas.toDataURL('image/jpeg');
          setThumbnailUrl(dataUrl);
        } catch (e) {
          console.error('Error extracting video thumbnail', e);
        }
      });

      // Handle errors
      tempVideo.addEventListener('error', (e) => {
        console.error('Error loading video for thumbnail', e);
      });

      // Start loading the video
      tempVideo.load();
    }
  }, [isVideo, data.videoThumbnail, data.link, thumbnailUrl]);

  const handleVideoClick = (e) => {
    if (isVideo) {
      e.preventDefault();
      setIsVideoPlaying(true);
    }
  };

  // Handles mouse hover for all projects
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3>
            {isVideo ? (
              <span>{data.title}</span>
            ) : (
              <a href={data.link}>{data.title}</a>
            )}
          </h3>
          <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
        </header>

        {isVideo && isVideoPlaying ? (
          <div className="video-container">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              ref={videoRef}
              controls
              autoPlay
              muted
              src={`${process.env.PUBLIC_URL}${data.link}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ) : (
          <a
            href={data.link}
            className="image"
            onClick={handleVideoClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={isVideo ? { position: 'relative', display: 'block' } : {}}
          >
            {data.videoThumbnail && thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt={data.title}
                style={{ width: '100%', height: 'auto' }}
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}${data.image}`}
                alt={data.title}
              />
            )}
            {isVideo && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '0',
                    height: '0',
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    borderLeft: '20px solid white',
                    marginLeft: '5px',
                  }}
                />
              </div>
            )}
          </a>
        )}

        {/* Show description only when not hovering */}
        {!isHovering && (
          <div
            className="description"
            style={needsBackground ? {
              backgroundColor: 'rgba(245, 245, 245, 0.87)',
              color: 'black',
              padding: '5px',
            } : {}}
          >
            <p>{data.desc}</p>
          </div>
        )}
      </article>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,
    videoThumbnail: PropTypes.bool,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
