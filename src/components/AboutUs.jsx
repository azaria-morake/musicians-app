import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';
import { lyrics } from '../data/lyrics-data';
import {
  AboutUsContainer,
  LyricsContainer,
  Header,
  VideoCarouselContainer,
  VideoCarouselWrapper,
  VideoCard,
  VideoThumbnail,
  PlayButtonOverlay,
  YTCarouselButton,
  YouTubeModal,
  YouTubeModalContent,
  CloseButton,
  LyricsGrid,
  SongTile,
  SongImage,
  SongInfo,
  LyricsModal,
  LyricsModalContent,
  LyricsHeader,
  LyricsBody,
  ShareButton,
  SocialIcons,
  MobileDiv,
} from './AboutUsStyles';

const AboutUs = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedLyric, setSelectedLyric] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const [showSocial, setShowSocial] = useState(false);

  const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_NAME = 'StinoLeThwenny';

  // Fetch videos from YouTube channel
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              q: CHANNEL_NAME,
              type: 'channel',
              key: youtubeApiKey,
            },
          }
        );

        const channelId = channelResponse.data.items[0].id.channelId;

        const videosResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              channelId: channelId,
              maxResults: 20,
              order: 'date',
              type: 'video',
              key: youtubeApiKey,
            },
          }
        );

        const videoList = videosResponse.data.items.map((item) => ({
          id: item.id.videoId,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));

        setVideos(videoList);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [youtubeApiKey]);

  // Disable background scroll when a modal is open
  useEffect(() => {
    const body = document.body;
    if (selectedVideo || selectedLyric) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    return () => {
      body.style.overflow = 'auto';
    };
  }, [selectedVideo, selectedLyric]);

  // Modal handlers
  const openYouTubeModal = (video) => {
    setSelectedVideo(video);
  };

  const closeYouTubeModal = () => {
    setSelectedVideo(null);
  };

  const openLyricsModal = (song) => {
    setSelectedLyric(song);
    setShowSocial(false);
  };

  const closeLyricsModal = () => setSelectedLyric(null);

  // Carousel navigation
  const handlePrev = () => {
    setTranslateX((prev) => Math.min(prev + 310, 0));
  };

  const handleNext = () => {
    const maxTranslateX = -310 * (videos.length - 1);
    setTranslateX((prev) => Math.max(prev - 310, maxTranslateX));
  };

  return (
    <Layout>
      <AboutUsContainer>
        {/* Lyrics Section */}
        <LyricsContainer>
          <Header>Song Lyrics</Header>
          <LyricsGrid>
            {lyrics.map((song) => (
              <SongTile key={song.id} onClick={() => openLyricsModal(song)}>
                <SongImage src={song.image} alt={song.title} />
                <SongInfo>
                  <h4>{song.title}</h4>
                  {song.Artist && <p>Artist: {song.Artist}</p>}
                  {song.feat && <p>Feat. {song.feat}</p>}
                  
                </SongInfo>
              </SongTile>
            ))}
          </LyricsGrid>
        </LyricsContainer>

        {/* Video Carousel Section */}
        <Header>Featured Videos</Header>
        <VideoCarouselContainer>
          <YTCarouselButton className="prev" onClick={handlePrev}>
            &#8249;
          </YTCarouselButton>
          <VideoCarouselWrapper translateX={translateX}>
            {videos.map((video) => (
              <VideoCard key={video.id} onClick={() => openYouTubeModal(video)}>
                <VideoThumbnail src={video.thumbnail} alt={video.title} />
                <PlayButtonOverlay>▶</PlayButtonOverlay>
              </VideoCard>
            ))}
          </VideoCarouselWrapper>
          <YTCarouselButton className="next" onClick={handleNext}>
            &#8250;
          </YTCarouselButton>
        </VideoCarouselContainer>

        {/* Lyrics Modal */}
        {selectedLyric && (
          <LyricsModal onClick={closeLyricsModal} role="dialog" aria-modal="true">
            <LyricsModalContent onClick={(e) => e.stopPropagation()}>
              <LyricsHeader>
                <SongImage src={selectedLyric.image} alt={selectedLyric.title} />
                <MobileDiv>
                  <h3>{selectedLyric.title}</h3>
                  {selectedLyric.Artist && <p>Artist: {selectedLyric.Artist}</p>}
                  {selectedLyric.feat && <p>Featuring: {selectedLyric.feat}</p>}
                  <ShareButton onClick={() => setShowSocial(!showSocial)}>
                    Share {showSocial ? '▲' : '▼'}
                  </ShareButton>
                  {showSocial && (
                    <SocialIcons>
                      <button>Twitter</button>
                      <button>Facebook</button>
                      <button>WhatsApp</button>
                    </SocialIcons>
                  )}
                </MobileDiv>
              </LyricsHeader>
              <LyricsBody>
                {selectedLyric.lyrics.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </LyricsBody>
              <CloseButton onClick={closeLyricsModal}>X</CloseButton>
            </LyricsModalContent>
          </LyricsModal>
        )}



        {/* YouTube Modal */}
        {selectedVideo && (
          <YouTubeModal onClick={closeYouTubeModal} role="dialog" aria-modal="true">
            <YouTubeModalContent onClick={(e) => e.stopPropagation()}>
              <iframe
                width="100%"
                height="450"
                src={`https://www.youtube.com/embed/${selectedVideo.url.split('v=')[1]}`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <CloseButton onClick={closeYouTubeModal}>×</CloseButton>
            </YouTubeModalContent>
          </YouTubeModal>
        )}
      </AboutUsContainer>
    </Layout>
  );
};

export default AboutUs;
