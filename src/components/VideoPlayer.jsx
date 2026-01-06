import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import thumbnail1 from "../assets/want-new-members.png";
import thumbnail2 from "../assets/video-banner.png";

function VideoPlayer() {
  const [play, setPlay] = useState(false);

  return (
    <div className="give-position">
      {play ? (
        // Show YouTube iframe when clicked
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/IhhjcB2ZjIM?si=ecPSZfl3Ejz_7kG9&autoplay=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture,web-share"
          allowFullScreen
        ></iframe>
      ) : (
        // Show thumbnail with play button
        <>
          <img
            src={thumbnail1}
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

function CallDuty() {
  const [play, setPlay] = useState(false);

  return (
    <div className="give-position">
      {play ? (
        // Show YouTube iframe when clicked
        <iframe
  className="w-100"
  style={{ height: "508px" }}
  src="https://www.youtube.com/embed/KlCzROTAos4?si=991uWQ4s3_PSSNef&autoplay=1"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

      ) : (
        // Show thumbnail with play button
        <>
        <img src={thumbnail2} alt="Thumbnail" className="w-100" />
          
          <Nav.Link onClick={() => setPlay(true)}>
            <i className="fa-regular fa-circle-play icon-tags"></i>
          </Nav.Link>
        </>
      )}
    </div>
  );
}
export { VideoPlayer, CallDuty };  