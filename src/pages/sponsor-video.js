import React, { useState, useEffect, useRef } from "react";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HDGlassesVideo from "../images/hdglasses.mp4";
import HDGlasses from "../images/hdglasses.jpg";

const SponsorVideoPage = () => {
  const [playing, setPlaying] = useState(false);
  const [canContinue, setCanContinue] = useState(false);

  const videoEl = useRef(null);

  useEffect(() => {
    const to1 = setTimeout(() => setCanContinue(true), 30000);

    return () => {
      clearTimeout(to1);
    };
  }, [videoEl]);

  const playButtonClicked = () => {
    videoEl.current.play();
    setPlaying(true);
  };

  return (
    <Layout>
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h3>A quick word from our sponsor:</h3>
        <video
          ref={videoEl}
          src={HDGlassesVideo}
          poster={HDGlasses}
          width="560"
          disablePictureInPicture
          disableRemotePlayback
          loop
        />
        <FontAwesomeIcon
          style={{
            display: playing ? "none" : "static",
          }}
          className="playButtonOverVideo"
          icon={faPlay}
          size="10x"
          onClick={playButtonClicked}
        />
        <div className="mt-2" style={{ minHeight: "125px" }}>
          <p
            className="fadeOut"
            style={{ display: canContinue ? "none" : "inline" }}
          >
            Continue enabled after 30 seconds.
          </p>
          <button
            className="fadeIn"
            style={{ display: canContinue ? "inline" : "none" }}
            type="button"
            onClick={() => navigate("/form2")}
          >
            Continue
          </button>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Sponsor Ad" />;

export default SponsorVideoPage;
