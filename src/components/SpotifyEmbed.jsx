// src/components/SpotifyEmbed.jsx
import React from 'react';
import { EmbedContainer, StyledIframe, SpotifyWrapper } from './SpotifyEmbedStyles';

const SpotifyEmbed = () => {
  return (
    <SpotifyWrapper>
      <EmbedContainer>
        <StyledIframe
          src="https://open.spotify.com/embed/artist/5m5lgddffBHA2pv0m5E2Ro?utm_source=generator"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </EmbedContainer>
    </SpotifyWrapper>
  );
};

export default SpotifyEmbed;

