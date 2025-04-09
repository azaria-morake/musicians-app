import styled, { css } from 'styled-components';

export const AboutUsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Helvetica';
  line-height: 1.6;
  color: rgb(216, 220, 224);
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  background-image: url('/intricate-explorer-H0-3xfbU8wk-unsplash.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1030;

  @media (max-width: 720px) {
    padding: 1rem;
    background-size: 150%;
  }
`;

export const LyricsContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border: 1px solid #a2a9b1;
  border-radius: 3px;
  margin-bottom: 2rem;

  @media (max-width: 720px) {
    padding: 1rem;
  }
`;

export const LyricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const SongTile = styled.div`
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const SongImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 720px) {
    height: 150px;
  }
`;

export const SongInfo = styled.div`
  padding: 0.5rem;
  text-align: center;
  color: white;

  h4 {
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #ccc;
  }
`;

export const LyricsModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const LyricsModalContent = styled.div`
  background: rgb(15, 15, 15);
  max-width: 700px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* Custom Scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(107, 107, 107, 0.8) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(107, 107, 107, 0.8);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 720px) {
    padding: 1rem;
    width: 95%;
  }
`;

export const LyricsBody = styled.div`
  line-height: 1.6;
  padding: 1rem 0;
  white-space: pre-wrap;

  /* Removed max-height and overflow-y to enable unified scrolling */
  /* Custom Scrollbar removed here since parent handles scrolling */
`;


export const MobileDiv = styled.div`
  
  @media (max-width: 720px) {
  margin: 20px;
}
  /* Removed max-height and overflow-y to enable unified scrolling */
  /* Custom Scrollbar removed here since parent handles scrolling */
`;



export const LyricsHeader = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: auto;
  }

  ${SongImage} {
    width: 150px;
    height: 150px;
    margin: 20px;

    @media (max-width: 720px) {
      width: auto;
      height: auto;
      max-height: 200px;
      margin-bottom: 10px;
    }
  }

  div {
    flex: 1;
    margin: 10px;

    h3 {
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
    }

    p {
      color: #888;
      margin: 0;
    }
  }
`;


export const ShareButton = styled.button`
  background: #1da1f2;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  button {
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 0.3rem;
    border-radius: 50%;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    transition: all 0.2s;

    &:hover {
      background: white;
      color: black;
    }
  }
`;

export const Header = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: white;
  border-bottom: 1px solid #a2a9b1;
  padding-bottom: 0.5rem;

  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

// Carousel Styles (unchanged, retained for completeness)
export const VideoCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 20px 0;
  height: 220px;

  @media (max-width: 720px) {
    height: 180px;
  }
`;

export const VideoCarouselWrapper = styled.div`
  display: flex;
  gap: 10px;
  transform: translateX(${(props) => props.translateX}px);
  transition: transform 0.5s ease;
`;

export const VideoCard = styled.div`
  flex: 0 0 auto;
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 720px) {
    width: 250px;
    height: 150px;
  }

  ${props =>
    props.$isHovered &&
    css`
      transform: scale(1.07);
      z-index: 2;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    `}

  ${props =>
    !props.$isHovered &&
    css`
      transform: scale(0.9);
      opacity: 100%;
    `}
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const PlayButtonOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 720px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

export const YTCarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 3;

  &:hover {
    background: black;
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  @media (max-width: 720px) {
    width: 50px;
    height: 50px;
  }
`;

export const YouTubeModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const YouTubeModalContent = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  width: 90%;
  max-width: 800px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export const CenteredParagraph = styled.p`
  text-align: left;
  color: rgb(255, 255, 255);
  margin-bottom: 3rem;
  max-width: 100%;

  @media (max-width: 720px) {
    margin-bottom: 1.5rem;
  }
`;
