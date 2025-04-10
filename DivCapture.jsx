import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const DivCapture = () => {
  const targetRef = useRef(null);
  const [screenshot, setScreenshot] = useState(null);

  const captureDiv = async () => {
    const canvas = await html2canvas(targetRef.current);
    const dataUrl = canvas.toDataURL();
    setScreenshot(dataUrl);
  };

  const downloadImage = () => {
    if (!screenshot) return;
    const link = document.createElement('a');
    link.href = screenshot;
    link.download = 'div_screenshot.png';
    link.click();
  };

  return (
    <div>
      <div ref={targetRef} style={{ padding: '1rem', border: '2px solid #ddd' }}>
        <h2>This is the target div</h2>
        <p>Click the capture button to screenshot this area.</p>
      </div>
      <button onClick={captureDiv}>Capture Div</button>
      <button onClick={downloadImage} disabled={!screenshot}>
        Download Div Screenshot
      </button>

      {screenshot && <img src={screenshot} alt="Div Preview" />}
    </div>
  );
};

export default DivCapture;
