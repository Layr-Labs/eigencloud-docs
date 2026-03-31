import React, { useState, useRef } from 'react';
import TurndownService from 'turndown';
import styles from './styles.module.css';

function createTurndownService() {
  const td = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
  });

  // Preserve fenced code blocks with language
  td.addRule('fencedCodeBlock', {
    filter(node) {
      return (
        node.nodeName === 'PRE' &&
        node.querySelector('code')
      );
    },
    replacement(content, node) {
      const code = node.querySelector('code');
      const classNames = code.className || '';
      const langMatch = classNames.match(/language-(\S+)/);
      const lang = langMatch ? langMatch[1] : '';
      const text = code.textContent || '';
      return `\n\`\`\`${lang}\n${text}\n\`\`\`\n`;
    },
  });

  // Convert Docusaurus admonitions to blockquotes with labels
  td.addRule('admonitions', {
    filter(node) {
      return (
        node.nodeName === 'DIV' &&
        /theme-admonition/.test(node.className || '')
      );
    },
    replacement(content, node) {
      const typeMatch = (node.className || '').match(/admonition-(\w+)/);
      const type = typeMatch ? typeMatch[1].toUpperCase() : 'NOTE';
      const lines = content.trim().split('\n');
      return `\n> **${type}**\n${lines.map((l) => `> ${l}`).join('\n')}\n`;
    },
  });

  // Convert Docusaurus tab content — just keep active tab's content
  td.addRule('tabs', {
    filter(node) {
      return (
        node.nodeName === 'DIV' &&
        /tabs-container/.test(node.className || '')
      );
    },
    replacement(content) {
      return `\n${content}\n`;
    },
  });

  // Strip copy buttons inside code blocks
  td.addRule('stripCopyButton', {
    filter(node) {
      return (
        node.nodeName === 'BUTTON' &&
        /copyButton|clean-btn/.test(node.className || '')
      );
    },
    replacement() {
      return '';
    },
  });

  // Strip the "Copy for LLM" button itself from output
  td.addRule('stripSelf', {
    filter(node) {
      return (
        node.nodeName === 'DIV' &&
        node.querySelector('[title="Copy page as markdown for LLMs"]') != null
      );
    },
    replacement() {
      return '';
    },
  });

  return td;
}

export default function CopyMarkdownButton() {
  const [copied, setCopied] = useState(false);
  const tdRef = useRef(null);

  const copyMarkdown = async () => {
    try {
      const article = document.querySelector('article');
      if (!article) return;

      if (!tdRef.current) {
        tdRef.current = createTurndownService();
      }

      const markdown = tdRef.current.turndown(article);

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
