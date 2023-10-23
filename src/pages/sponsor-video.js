import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./test.module.css";

const SponsorVideoPage = () => {
  const [showBlackout, setShowBlackout] = useState(false);
  const [canContinue, setCanContinue] = useState(false);

  useEffect(() => {
    // const cantContinueCantBlackout = () =>
    //   setState({ canContinue: false, blackout: false });
    // const canContinueCantBlackout = () =>
    //   setState({ canContinue: true, blackout: false });
    // const canContinueCanBlackout = () =>
    //   setState({ canContinue: false, blackout: true });

    // setTimeout(cantContinueCantBlackout, 4000);
    // setTimeout(canContinueCantBlackout, 30000);
    const to1 = setTimeout(() => setCanContinue(true), 30000);
    // setTimeout(canContinueCanBlackout, 116000);
    const to2 = setTimeout(() => (window.location = "/form2"), 125000);

    return () => {
      clearTimeout(to1);
      clearTimeout(to2);
    };
  }, []);

  return (
    <Layout>
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h3>A quick word from our sponsor:</h3>
        <iframe
          className="mb-2"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2L4rX1qxPrk?controls=0&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div
          className={styles.hoverblock}
          style={showBlackout ? { backgroundColor: "black" } : {}}
        ></div>
        <div className={styles.wait}>
          <p
            className={styles.fadeOut}
            style={{ display: canContinue ? "none" : "inline" }}
          >
            Continue after 30 seconds
          </p>
          <Link
            className={styles.fadeIn}
            style={{ display: canContinue ? "inline" : "none" }}
            to="/form2"
          >
            <button type="button">Continue</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Sponsor Ad" />;

export default SponsorVideoPage;

const note = `
<!DOCTYPE html>
<html>
  <body>
    <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
    <div id="player"></div>

    <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    </script>
  </body>
</html>
`;
