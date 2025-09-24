import { useState } from "react";
import Nav from "react-bootstrap/Nav";

function VideoPlayer() {
  const [play, setPlay] = useState(false);

  return (
    <div className="give-position">
      {play ? (
        // Show YouTube iframe when clicked
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/IhhjcB2ZjIM?si=ecPSZfl3Ejz_7kG9"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        // Show thumbnail with play button
        <>
          <img
            src="src/assets/want-new-members.png"
            alt="Thumbnail"
            className="w-100"
          />
          <Nav.Link onClick={() => setPlay(true)}>
            <i className="fa-regular fa-circle-play icon-tag"></i>
          </Nav.Link>
        </>
      )}
    </div>
  );
}

export default VideoPlayer;
