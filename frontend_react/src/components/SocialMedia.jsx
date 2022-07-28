import React from 'react';
import { BsYoutube, BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.instagram.com/smbalaji_the_mentor/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
       <BsInstagram />
      </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/balaji-murugesan-48b291222/" target="_blank" rel="noreferrer">
      <BsLinkedin />
      </a>
    </div>
    <div>
    <a href="https://www.youtube.com/c/SMBalajiTheMentor" target="_blank" rel="noreferrer">
    <BsYoutube  />
      </a>
    </div>
    <div>
    <a href="https://github.com/SMBalaJiii" target="_blank" rel="noreferrer">
    <BsGithub  />
      </a>
    </div>
  </div>
);

export default SocialMedia;