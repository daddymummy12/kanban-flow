import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const CustomCapture = () => {
  const targetRef = useRef(null);
  const [screenshot, setScreenshot] = useState(null);

  const captureCustomElement = async () => {
    const canvas = await html2canvas(targetRef.current);
    const dataUrl = canvas.toDataURL();
    setScreenshot(dataUrl);
  };

  const downloadCustomScreenshot = () => {
    if (!screenshot) return;
    const link = document.createElement('a');
    link.href = screenshot;
    link.download = 'custom_screenshot.png';
    link.click();
  };

  return (
    <div>
      <div ref={targetRef} style={{ border: '2px solid #ff6347', padding: '1rem' }}>
        <h2>This is a customizable capture area</h2>
        <p>Capture and download this specific section of the page.</p>
      </div>
      <button onClick={captureCustomElement}>Capture Custom Section</button>
      <button onClick={downloadCustomScreenshot} disabled={!screenshot}>
        Download Custom Screenshot
      </button>

      {screenshot && <img src={screenshot} alt="Custom Screenshot Preview" />}
    </div>
  );
};

export default CustomCapture;
