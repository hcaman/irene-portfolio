import React, { useEffect, useRef } from 'react';
import { default as TypedLib } from 'typed.js';
import { useHeaderData } from '../hooks/useHeaderData';
import { GatsbyImage } from 'gatsby-plugin-image';

const Header = () => {
  const isBrowser = typeof window !== 'undefined';
  const { datoCmsHome } = useHeaderData();
  const { firstText, name, skills, image, linkVideo } = datoCmsHome;
  const urlVideo = linkVideo?.value?.document?.children[0]?.children[0]?.url;
  const titleTyping = useRef(null);
  const typed = useRef(null);
  const handleClick = () => isBrowser && window.open(urlVideo, '_blank');

  useEffect(() => {
    const arrStringTyping = skills.split(', ');
    const typedOpts = {
      strings: arrStringTyping, // Strings to display
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    };
    typed.current = new TypedLib(titleTyping.current, typedOpts);

    // Destropying
    return () => {
      typed.current.destroy();
    };
  }, [skills]);

  return (
    <header>
      <div
        className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
        id="home"
        style={{ minHeight: '100vh' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <GatsbyImage
                className="img-fluid w-100 rounded-circle shadow-sm"
                image={image.gatsbyImageData}
                alt={image.alt || image.filename || 'image'}
              />
            </div>
            <div className="col-lg-7 text-center text-lg-left">
              <h3 className="text-white font-weight-normal mb-3">
                {firstText}
              </h3>
              <h1 className="display-3 text-uppercase text-primary mb-2 text-stroke-2px">
                {name}
              </h1>
              <h1
                ref={titleTyping}
                className="typed-text-output d-inline font-weight-lighter text-white"
              >
                {' '}
              </h1>
              {/* <div className="typed-text d-none">{skills}</div> */}
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <button
                  type="button"
                  className="btn-play"
                  data-toggle="modal"
                  data-src={urlVideo}
                  data-target="#videoModal"
                  onClick={handleClick}
                >
                  <span></span>
                </button>
                <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">
                  Play Video
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
