import React from 'react';
import { RedocStandalone } from 'redoc';

export default function RedocWrapper() {
  return (
    <div className="eigen-redoc">
          <RedocStandalone
            specUrl="/openapi.yaml"
            options={{
              hideDownloadButton: true,
              // any other options you like
            }}
          />
    </div>
  );
}
