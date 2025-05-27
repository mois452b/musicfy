import React from "react";

interface SpotifyPlayerProps {
  trackId: string;
}

const PlayerControls: React.FC<SpotifyPlayerProps> = ({ trackId }) => {
  if (!trackId) return null;
  console.log(trackId)
  const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <iframe
        title="Spotify Player"
        src={embedUrl}
        width="100%"
        height="80"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="border-0"
      ></iframe>
    </div>
  );
};

export default PlayerControls;
