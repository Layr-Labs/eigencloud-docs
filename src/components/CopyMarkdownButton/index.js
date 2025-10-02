import React, { useState } from 'react';
import styles from './styles.module.css';

export default function CopyMarkdownButton() {
  const [copied, setCopied] = useState(false);

  const copyMarkdown = async () => {
    try {
      // Get the main article content
      const article = document.querySelector('article');
      if (!article) return;

      // Get the markdown content from the page
      const title = document.querySelector('h1')?.textContent || '';
      const content = article.innerText;

      // Format as markdown
      const markdown = `# ${title}\n\n${content}`;

      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={styles.copyButtonContainer}>
      <button
        className={styles.copyButton}
        onClick={copyMarkdown}
        title="Copy page as markdown for LLMs"
      >
        {copied ? (
          <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
            </svg>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path>
              <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
            </svg>
            <span>Copy for LLM</span>
          </>
        )}
      </button>
    </div>
  );
}
