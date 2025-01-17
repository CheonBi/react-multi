import React, { useEffect } from 'react';

export default function StreamCanvas({ streamManager }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (streamManager && canvasRef.current) {
      streamManager.addVideoElement(canvasRef.current);
    }
  }, [streamManager]);

  return (
    <video
      autoPlay
      ref={canvasRef}></video>
  );
}
