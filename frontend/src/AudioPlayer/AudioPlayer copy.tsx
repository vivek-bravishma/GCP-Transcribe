import React, { useState } from "react";
import axios from "axios";

function AudioPlayer() {
  const [audioBlob, setAudioBlob] = useState<any>(null);
  const [audio, setAudio] = useState(new Audio());

  const fetchAudio = () => {
    // Make an HTTP GET request to your API endpoint
    axios
      .get("https://javaapi.lab.bravishma.com/api/v1/files", {
        // .get("http://localhost:8080/api/v1/files", {
        responseType: "arraybuffer",
      })
      .then((response) => {
        const audioData = response.data;

        // Create a Blob from the audio data
        const blob = new Blob([audioData], { type: "audio/wav" });

        console.log("blob--> ", blob);

        // Set the blob as the source for the audio element
        setAudioBlob(blob);

        // Load and play the audio blob
        audio.src = URL.createObjectURL(blob);
        audio.play();
      })
      .catch((error) => {
        console.error("Error fetching audio:", error);
      });
  };

  return (
    <div>
      <button onClick={fetchAudio}>Play Audio</button>
      <audio controls style={{ display: "none" }}>
        <source
          src={audioBlob && URL.createObjectURL(audioBlob)}
          type="audio/wav"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
