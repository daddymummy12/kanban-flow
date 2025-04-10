import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const SectionCapture = () => {
  const targetRef = useRef(null);
  const [screenshot, setScreenshot] = useState(null);

  const captureSection = async () => {
    const canvas = await html2canvas(targetRef.current);
    const dataUrl = canvas.toDataURL();
    setScreenshot(dataUrl);
  };

  const downloadSectionImage = () => {
    if (!screenshot) return;
    const link = document.createElement('a');
    link.href = screenshot;
    link.download = 'section_screenshot.png';
    link.click();
  };

  return (
    <div>
      <div ref={targetRef} style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <h2>This is the section to capture</h2>
        <p>Click below to capture this section and download the image.</p>
      </div>

      <button onClick={captureSection}>Capture Section</button>
      <button onClick={downloadSectionImage} disabled={!screenshot}>
        Download Section Screenshot
      </button>

      {screenshot && <img src={screenshot} alt="Section Screenshot" />}
    </div>
  );
};

export default SectionCapture;
