import React, { useRef } from "react";

const App = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        width="600"
        style={{ marginBottom: "20px" , height:"200px"}}
        controls
      >
        <source
          src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <br />
      <button onClick={handlePlay} style={{ marginRight: "10px" }}>
        Play
      </button>
      <button onClick={handlePause} style={{ marginRight: "10px" }}>
        Pause
      </button>
      <button onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default App;
