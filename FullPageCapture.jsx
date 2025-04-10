import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const FullPageCapture = () => {
  const [screenshot, setScreenshot] = useState(null);

  const captureFullPage = async () => {
    const canvas = await html2canvas(document.body);
    const dataUrl = canvas.toDataURL();
    setScreenshot(dataUrl);
  };

  const downloadImage = () => {
    if (!screenshot) return;
    const link = document.createElement('a');
    link.href = screenshot;
    link.download = 'full_page_screenshot.png';
    link.click();
  };

  return (
    <div>
      <button onClick={captureFullPage}>Capture Full Page</button>
      <button onClick={downloadImage} disabled={!screenshot}>
        Download Full Page Screenshot
      </button>

      {screenshot && <img src={screenshot} alt="Full Page Preview" />}
    </div>
  );
};

export default FullPageCapture;
