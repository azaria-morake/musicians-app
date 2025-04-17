// src/components/SpotifyEmbed.styles.js
import styled from 'styled-components';

export const EmbedContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  height: 60%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  margin-top: 20px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 6px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const SpotifyWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  //height: 400px;
  margin: 0 auto;

  
  @media (max-width: 720px) {
    width: 100%;
  }

`;
