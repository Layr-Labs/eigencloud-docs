import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import CopyMarkdownButton from '@site/src/components/CopyMarkdownButton';

export default function LayoutWrapper(props) {
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <CopyMarkdownButton />
      </div>
      <Layout {...props} />
    </>
  );
}
