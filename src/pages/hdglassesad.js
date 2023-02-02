import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./test.module.css";

const TestPage = () => {
  const [state, setState] = useState({
    canContinue: false,
    // blackout: true,
  });

  // const cantContinueCantBlackout = () =>
  //   setState({ canContinue: false, blackout: false });
  // const canContinueCantBlackout = () =>
  //   setState({ canContinue: true, blackout: false });
  // const canContinueCanBlackout = () =>
  //   setState({ canContinue: false, blackout: true });

  // setTimeout(cantContinueCantBlackout, 4000);
  // setTimeout(canContinueCantBlackout, 30000);
  setTimeout(() => setState({ canContinue: true }), 30000);
  // setTimeout(canContinueCanBlackout, 116000);
  setTimeout(() => (window.location = "/form2"), 125000);

  return (
    <Layout>
      <div className={styles.center}>
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
          style={state.blackout ? { backgroundColor: "black" } : {}}
        ></div>
        <div className={styles.wait}>
          <p
            className={styles.fadeOut}
            style={{ display: state.canContinue ? "none" : "inline" }}
          >
            Continue after 30 seconds
          </p>
          <Link
            className={styles.fadeIn}
            style={{ display: state.canContinue ? "inline" : "none" }}
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

export default TestPage;

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
