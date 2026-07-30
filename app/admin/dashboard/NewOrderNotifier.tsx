"use client";

import { useRef } from "react";

export default function NewOrderNotifier() {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <>
      <audio
        ref={audioRef}
        src="/sounds/new-order.mp3"
        preload="auto"
      />

      <button
        onClick={() => audioRef.current?.play()}
        className="mb-4 rounded-lg bg-pink-600 px-4 py-2 text-white"
      >
        🔔 Test Notification Sound
      </button>
    </>
  );
}