import { Helmet } from 'react-helmet';
import React, { useRef, useEffect } from 'react';
import Header from '@/components/Header';

export default function Models() {
  const styles = {
    model: {
      margin: 'auto',
      width: '50%',
      padding: '10px',
      width: '400px',
      height: '280px',
      'object-fit': 'cover',
    },
  };

  const modelViewerRef = useRef(null);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    modelViewer.addEventListener('error', e => console.log(`Error: ${JSON.stringify(e)}`));
    modelViewer.addEventListener('load', e => console.log(`Load: ${JSON.stringify(e)}`));
    modelViewer.addEventListener('ar-status', e => console.log(`AR-Status: ${JSON.stringify(e)}`));
  }, []);

  return (
    <>
      <Header />
      <div>
        <Helmet>
          <script
            nomodule
            src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
            async
          ></script>
          <script
            type="module"
            src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js"
            async
          ></script>
        </Helmet>
      </div>
      <div class="row">
        <div class="column">
          <model-viewer
            ref={modelViewerRef}
            style={styles.model}
            src="Mario.glb"
            shadow-intensity=".2"
            camera-controls
            touch-action="pan-y"
            ar
          ></model-viewer>
        </div>
        <div class="column">
          <model-viewer
            ref={modelViewerRef}
            style={styles.model}
            src="Spiderman.glb"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            ar
          ></model-viewer>
        </div>
        <div class="column">
          <model-viewer
            ref={modelViewerRef}
            style={styles.model}
            src="Luigi.glb"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            ar
          ></model-viewer>
        </div>
      </div>
    </>
  );
}
