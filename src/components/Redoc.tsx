import React from 'react';
import { RedocStandalone } from 'redoc';
import { useColorMode } from '@docusaurus/theme-common';

// Dark theme configuration for Redoc
const darkTheme = {
  colors: {
    primary: {
      main: '#648fe4',
    },
    text: {
      primary: '#ffffff',
      secondary: '#c7c7e5',
    },
    http: {
      get: '#61affe',
      post: '#49cc90',
      put: '#fca130',
      delete: '#f93e3e',
      patch: '#50e3c2',
      options: '#0d5aa7',
      head: '#9012fe',
    },
    responses: {
      success: {
        color: '#49cc90',
        backgroundColor: 'rgba(73, 204, 144, 0.1)',
      },
      error: {
        color: '#f93e3e',
        backgroundColor: 'rgba(249, 62, 62, 0.1)',
      },
      redirect: {
        color: '#fca130',
        backgroundColor: 'rgba(252, 161, 48, 0.1)',
      },
      info: {
        color: '#61affe',
        backgroundColor: 'rgba(97, 175, 254, 0.1)',
      },
    },
    border: {
      dark: '#3d3d5c',
      light: '#4d4d6c',
    },
  },
  schema: {
    nestedBackground: '#232340',
    labelsTextSize: '0.9em',
    typeNameColor: '#648fe4',
    typeTitleColor: '#c7c7e5',
    requireLabelColor: '#f93e3e',
  },
  typography: {
    fontSize: '16px',
    fontFamily: '"DM Sans", Arial, sans-serif',
    headings: {
      fontFamily: '"ABC Repro", "DM Sans", Arial, sans-serif',
      fontWeight: '600',
    },
    code: {
      fontSize: '14px',
      fontFamily: '"SFMono-Regular", Menlo, Monaco, Consolas, monospace',
      backgroundColor: '#2d2d44',
      color: '#e6e6e6',
      wrap: true,
    },
    links: {
      color: '#648fe4',
      hover: '#8ab4f8',
    },
  },
  sidebar: {
    backgroundColor: '#1a1a2e',
    textColor: '#ffffff',
    activeTextColor: '#648fe4',
    groupItems: {
      textTransform: 'uppercase',
    },
  },
  rightPanel: {
    backgroundColor: '#1e1e32',
    textColor: '#ffffff',
    servers: {
      overlay: {
        backgroundColor: '#232340',
        textColor: '#ffffff',
      },
      url: {
        backgroundColor: '#2d2d44',
      },
    },
  },
  codeBlock: {
    backgroundColor: '#1e1e32',
  },
};

// Light theme configuration for Redoc
const lightTheme = {
  colors: {
    primary: {
      main: '#346ddb',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    http: {
      get: '#61affe',
      post: '#49cc90',
      put: '#fca130',
      delete: '#f93e3e',
      patch: '#50e3c2',
      options: '#0d5aa7',
      head: '#9012fe',
    },
    responses: {
      success: {
        color: '#49cc90',
        backgroundColor: 'rgba(73, 204, 144, 0.08)',
      },
      error: {
        color: '#f93e3e',
        backgroundColor: 'rgba(249, 62, 62, 0.08)',
      },
      redirect: {
        color: '#fca130',
        backgroundColor: 'rgba(252, 161, 48, 0.08)',
      },
      info: {
        color: '#61affe',
        backgroundColor: 'rgba(97, 175, 254, 0.08)',
      },
    },
  },
  schema: {
    nestedBackground: '#f8f8f8',
    typeNameColor: '#346ddb',
    requireLabelColor: '#f93e3e',
  },
  typography: {
    fontSize: '16px',
    fontFamily: '"DM Sans", Arial, sans-serif',
    headings: {
      fontFamily: '"ABC Repro", "DM Sans", Arial, sans-serif',
      fontWeight: '600',
    },
    code: {
      fontSize: '14px',
      fontFamily: '"SFMono-Regular", Menlo, Monaco, Consolas, monospace',
      wrap: true,
    },
    links: {
      color: '#346ddb',
    },
  },
  rightPanel: {
    backgroundColor: '#263238',
    textColor: '#ffffff',
  },
};

export default function RedocWrapper() {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  // Use key prop to force complete re-mount when theme changes
  // This ensures Redoc's styled-components fully re-render with new theme
  return (
    <div className={`eigen-redoc ${isDarkMode ? 'eigen-redoc--dark' : 'eigen-redoc--light'}`}>
      <RedocStandalone
        key={colorMode}
        specUrl="/openapi.yaml"
        options={{
          hideDownloadButton: true,
          theme: isDarkMode ? darkTheme : lightTheme,
          nativeScrollbars: true,
          scrollYOffset: 60,
        }}
      />
    </div>
  );
}
