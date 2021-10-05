import React from 'react';

import { AboutContainer,IconContainer,PhotoContainer,SocialContainer } from './about.styles';

const AboutPage = () => (
<AboutContainer>
    <br/>
    <h1>About This:</h1>
    <p>
        This is a portfolio project, a clothing E-Commerce website created using React + Redux
        <IconContainer src='https://i.ibb.co/9nB8h59/react-redux.png' alt='react-redux'/>
    </p>
    <br/>
    <h1>Author:</h1>
    <PhotoContainer
     src='https://i.ibb.co/z2D5gZC/profile.jpg'
     alt="Author"
    />
    <h2 >Oussama Chatti</h2>
    <SocialContainer>

         <a data-tooltip="oussama.chatti.12@gmail.com" href="mailto:oussama.chatti.12@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
         </a>

         <a data-tooltip="GitHub" href="https://github.com/OussamaChatti">
            <i className="fa fa-github" aria-hidden="true"></i>
        </a>

        <a data-tooltip="LinkedIn" href="https://www.linkedin.com/in/oussama-chatti12">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>

        <a data-tooltip="Facebook" href="https://www.facebook.com/sql12">
            <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>

    </SocialContainer>

</AboutContainer>
);

export default AboutPage;