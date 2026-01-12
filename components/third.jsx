'use client'
import { useRef } from "react";

export default function Third() {
  const videoRef = useRef(null);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.play();
  };

  return (
    <div className="block sm:hidden w-screen h-screen flex justify-center items-center">
      <video
        ref={videoRef}
        src="/luna26.mp4"
        autoPlay
        loop
        muted
        playsInline
        onClick={handleClick}
        className="w-full h-full object-cover cursor-pointer"
      />
    </div>
  );
}
