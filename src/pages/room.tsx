import React, { useState } from "react";
import "../styles/room.sass";
import { Camera, CameraOut, MutedIcon, Share, Sharex, SpeakerIcon, Hand } from "../icons";

/**
 * Room page - Meeting UI (matches provided design screenshot)
 */
export default function Room() {
  const participants = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: "D",
  }));

  const [muted, setMuted] = useState(false);
  const [camera, setCamera] = useState(true);
  const [share, setShare] = useState(false);
  const [hand, setHand] = useState(true);

  return (
    <main className="room">
      {/* LEFT big main video/avatar */}
      <section className="room__main">
        <div className="room__main-avatar">
          <img
            src="/images/chat.png"
            alt="Main participant avatar"
          />
        </div>

        {/* Bottom meeting controls */}
        <div className="room__controls">
          <button
            className="room__btn"
            onClick={() => setMuted(!muted)}
            aria-label="Toggle microphone"
          >
            {muted ? <SpeakerIcon /> : <MutedIcon />}
          </button>

          <button
            className="room__btn"
            onClick={() => setCamera(!camera)}
            aria-label="Toggle camera"
          >
            {camera ? <Camera/> : <CameraOut/>}
          </button>

          <button
            className="room__btn"
            onClick={() => setShare(!Share)}
            aria-label="Toggle share"
          >
            {Share ? <Share/> : <Sharex/>}
            </button>
          <button 
            className="room__btn"
            onClick={() => setHand(!hand)}
            aria-label="Toggle hand"
          >
            {hand ? <Hand/> : <Sharex/>}
            </button>

          <button className="room__btn room__btn--hangup">End</button>
        </div>
      </section>

      {/* RIGHT grid of participants */}
      <aside className="room__grid">
        {participants.map((p) => (
          <div key={p.id} className="room__grid-item">
            <div className="room__small-avatar">D</div>
          </div>
        ))}
      </aside>

      {/* Floating chat button */}
      <button
        className="room__chat-button"
        aria-label="Open chat"
      >
        <img src="/images/chat.png" alt="Chat icon" />
      </button>
    </main>
  );
}
