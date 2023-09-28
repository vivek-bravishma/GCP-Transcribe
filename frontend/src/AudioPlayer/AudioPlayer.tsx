// import React, { useEffect } from "react";

// function AudioPlayer() {
//   useEffect(() => {
//     const audioElement = document.getElementById("audio") as HTMLAudioElement;

//     audioElement.addEventListener("canplay", () => {
//       audioElement.play();
//     });

//     audioElement.addEventListener("ended", () => {
//       // Audio playback has finished
//     });

//     audioElement.addEventListener("error", (error) => {
//       console.error("Audio error:", error);
//     });
//   }, []);

//   return (
//     <div>
//       <audio id="audio" controls>
//         <source src="http://localhost:3001/stream-audio" type="audio/wav"  />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// }

// export default AudioPlayer;

////////////////////////////////

import React, { useEffect, useState } from "react";
import "./style.css";


function AudioPlayer() {
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById("audio") as HTMLAudioElement;

    if (hasUserInteracted) {
      audioElement
        .play()

        .then(() => {
          // Playback started successfully
        })

        .catch((error) => {
          console.error("Audio playback error:", error);
        });
    }

    audioElement.addEventListener("ended", () => {
      // Audio playback has finished
      console.log("endeded");
      setHasUserInteracted(false);
    });

    audioElement.addEventListener("error", (error) => {
      console.error("Audio error:", error);
    });

    return () => {
      audioElement.removeEventListener("ended", () => {});

      audioElement.removeEventListener("error", () => {});
    };
  }, [hasUserInteracted]);

  const handlePlayClick = () => {
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
    }
  };

  return (
    <div className="audio-plr-container">
      <button className="audio-plr-btn" onClick={handlePlayClick} disabled={hasUserInteracted}>
        {hasUserInteracted ? "Playing..." : "Play"}
      </button>

      <audio className="audio-plr-adyotg" id="audio" controls>
        <source
          // src="http://localhost:3001/stream-audio"
          src="https://gcloudapi.lab.bravishma.com/stream-audio"
          type="audio/wav"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;

///////////////////////////////

// import React, { useEffect, useState } from "react";

// function AudioPlayer() {
//   const [audioSrc, setAudioSrc] = useState("");
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const audioElement = document.getElementById("audio") as HTMLAudioElement;

//     const handlePlayClick = async () => {
//       if (!isPlaying) {
//         setAudioSrc("https://mynodeapi.com/stream-audio");
//         await audioElement.play();
//         setIsPlaying(true);
//       }
//     };

//     audioElement.addEventListener("ended", () => {
//       setIsPlaying(false);
//     });

//     audioElement.addEventListener("error", (error) => {
//       console.error("Audio error:", error);
//       setIsPlaying(false);
//     });

//     return () => {
//       audioElement.removeEventListener("ended", () => {});
//       audioElement.removeEventListener("error", () => {});
//     };
//   }, [isPlaying]);

//   return (
//     <div>
//       <button onClick={handlePlayClick} disabled={isPlaying}>
//         {isPlaying ? "Playing..." : "Play"}
//       </button>
//       <audio id="audio" controls>
//         <source src={audioSrc} type="audio/wav" />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// }

// export default AudioPlayer;

///////////////////////////////////

// import React, { useState } from "react";

// function AudioPlayer() {
//   const [audioSrc, setAudioSrc] = useState("");

//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayClick = async () => {
//     if (!isPlaying) {
//       setAudioSrc("http://localhost:3001/stream-audio");

//       const audioElement = document.getElementById("audio") as HTMLAudioElement;

//       audioElement.addEventListener("canplay", async () => {
//         try {
//           await audioElement.play();

//           setIsPlaying(true);
//         } catch (error) {
//           console.error("Audio playback error:", error);

//           setIsPlaying(false);
//         }
//       });
//     }
//   };

//   return (
//     <div>
//       <button onClick={handlePlayClick} disabled={isPlaying}>
//         {isPlaying ? "Playing..." : "Play"}
//       </button>

//       <audio id="audio" controls>
//         <source src={audioSrc} type="audio/wav" />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// }

// export default AudioPlayer;

///////////////////////////////////////

// import React, { useState } from "react";

// import axios from "axios";

// function AudioPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayClick = async () => {
//     if (!isPlaying) {
//       try {
//         // Fetch audio data from your API

//         const response = await axios.get("http://localhost:3001/stream-audio", {
//           responseType: "arraybuffer", // Set the response type to arraybuffer for audio data
//         });

//         // const audioContext = new (window.AudioContext ||
//         //   window.webkitAudioContext)();
//         const audioContext = new window.AudioContext();

//         const audioBuffer = await audioContext.decodeAudioData(response.data);

//         // Create an audio source

//         const source = audioContext.createBufferSource();

//         source.buffer = audioBuffer;

//         // Connect the audio source to the audio output (your speakers)

//         source.connect(audioContext.destination);

//         // Play the audio

//         source.start();

//         // Set playing state to true

//         setIsPlaying(true);
//       } catch (error) {
//         console.error("Error fetching or playing audio:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <button onClick={handlePlayClick} disabled={isPlaying}>
//         {isPlaying ? "Playing..." : "Play"}
//       </button>
//     </div>
//   );
// }

// export default AudioPlayer;

///////////////////////////////////////

// import React, { useState } from "react";

// import axios from "axios";

// function AudioPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const [audioBuffer, setAudioBuffer] = useState<any>(null);

//   const handlePlayClick = async () => {
//     if (!isPlaying) {
//       try {
//         if (!audioBuffer) {
//           // Fetch audio data from your API asynchronously

//           const response = await axios.get(
//             "http://localhost:3001/stream-audio",
//             {
//               responseType: "arraybuffer", // Set the response type to arraybuffer for audio data
//             }
//           );

//           // const audioContext = new (window.AudioContext ||
//           //   window.webkitAudioContext)();

//           const audioContext = new window.AudioContext();

//           const decodedAudioBuffer = await audioContext.decodeAudioData(
//             response.data
//           );

//           setAudioBuffer(decodedAudioBuffer);
//         }

//         // const audioContext = new (window.AudioContext ||
//         //   window.webkitAudioContext)();
//         const audioContext = new window.AudioContext();

//         const source = audioContext.createBufferSource();

//         source.buffer = audioBuffer;

//         // Connect the audio source to the audio output (your speakers)

//         source.connect(audioContext.destination);

//         // Play the audio

//         source.start();

//         // Set playing state to true

//         setIsPlaying(true);

//         // Handle the end of audio playback

//         source.onended = () => {
//           setIsPlaying(false);
//         };
//       } catch (error) {
//         console.error("Error fetching or playing audio:", error);

//         setIsPlaying(false);
//       }
//     }
//   };

//   return (
//     <div>
//       <button onClick={handlePlayClick} disabled={isPlaying}>
//         {isPlaying ? "Playing..." : "Play"}
//       </button>
//     </div>
//   );
// }

// export default AudioPlayer;
