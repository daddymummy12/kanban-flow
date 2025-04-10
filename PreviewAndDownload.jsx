import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const PreviewAndDownload = () => {
  const [screenshot, setScreenshot] = useState(null);

  const captureElement = async () => {
    const canvas = await html2canvas(document.body);  // Capture the whole page
    const dataUrl = canvas.toDataURL();
    setScreenshot(dataUrl);
  };

  const downloadScreenshot = () => {
    if (!screenshot) return;
    const link = document.createElement('a');
    link.href = screenshot;
    link.download = 'web_screenshot.png';
    link.click();
  };

  return (
    <div>
      <button onClick={captureElement}>Capture Page</button>
      <button onClick={downloadScreenshot} disabled={!screenshot}>
        Download Screenshot
      </button>

      {screenshot && <img src={screenshot} alt="Captured Preview" />}
    </div>
  );
};

export default PreviewAndDownload;
