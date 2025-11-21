import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// GA4 Click Tracking Implementation for EigenCloud Docs
// Tracks all clicks, scroll depth, and engagement time

function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    if (location.pathname === '/' || location.pathname === '/index.html') {
      window.location.replace('/products/eigencloud/eigencloud-overview');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    const eigenContext = getEigencomputeContext(location.pathname);

    // Enhanced click tracking for all links and buttons
    const handleClick = (event) => {
      // Find the actual clicked element (link or button)
      let target = event.target;
      
      // Traverse up to find the nearest link or button
      while (target && target !== document.body) {
        if (target.tagName === 'A' || 
            target.tagName === 'BUTTON' || 
            target.getAttribute('role') === 'button') {
          break;
        }
        target = target.parentElement;
      }

      if (!target || target === document.body) return;

      // Prepare click data
      const clickText = (target.innerText || target.textContent || '').trim().substring(0, 100);
      const clickUrl = target.href || '';
      const elementType = target.tagName.toLowerCase();
      const elementId = target.id || '';
      const elementClasses = target.className || '';
      
      // Determine the section/component where the click occurred
      const section = getClickSection(target);
      
      // Determine click type
      const isExternal = clickUrl && !clickUrl.includes(window.location.hostname);
      const isDownload = clickUrl && /\.(pdf|doc|docx|xls|xlsx|zip|rar|tar|gz)$/i.test(clickUrl);
      const isAnchor = clickUrl && clickUrl.includes('#');
      const isSidebar = target.closest('.theme-doc-sidebar-menu') !== null;
      const isNavbar = target.closest('.navbar') !== null;
      const isFooter = target.closest('footer') !== null;
      const isTOC = target.closest('.table-of-contents') !== null;
      
      // Determine content area
      let contentArea = 'main-content';
      if (isSidebar) contentArea = 'sidebar';
      else if (isNavbar) contentArea = 'navbar';
      else if (isFooter) contentArea = 'footer';
      else if (isTOC) contentArea = 'table-of-contents';

      // Generate Eigencompute-specific identifiers when applicable
      let eigencomputeElementId = null;
      if (eigenContext) {
        eigencomputeElementId = buildEigencomputeElementId(target, clickText, elementType);
      }

      // Send to GA4 using gtag
      if (window.gtag) {
        // Create a unique identifier combining page and click info
        const clickIdentifier = `${location.pathname} | ${clickText || 'No text'}`.substring(0, 150);
        const fullClickContext = `[${contentArea}] ${location.pathname} → ${clickText || elementType}`.substring(0, 200);
        
        // Main click event with all details
        window.gtag('event', 'click', {
          // Basic click information
          click_element: elementType,
          click_text: clickText,
          click_url: clickUrl,
          click_id: elementId,
          click_classes: elementClasses.substring(0, 100),
          
          // Page context
          page_path: location.pathname,
          page_title: document.title,
          
          // Combined identifiers for easier analysis
          click_identifier: clickIdentifier,  // "page | click_text" format
          click_full_context: fullClickContext,  // "[area] page → click_text" format
          click_destination: clickUrl || 'no-url',  // click destination URL
          
          // Click context
          content_area: contentArea,
          parent_section: section,
          is_external_link: isExternal,
          is_download: isDownload,
          is_anchor_link: isAnchor,
          
          // Additional categorization
          link_domain: isExternal ? new URL(clickUrl).hostname : 'internal',
          
          // Custom event parameters for easier filtering in GA4
          custom_event_category: isExternal ? 'external_link' : 'internal_navigation',
          custom_event_label: clickText || clickUrl,

          // Eigencompute identifiers
          ...(eigenContext
            ? {
                eigencompute_page_id: eigenContext.pageId,
                eigencompute_element_id: eigencomputeElementId,
              }
            : {})
        });

        // Send specialized events for specific click types
        if (isExternal) {
          window.gtag('event', 'external_link_click', {
            link_url: clickUrl,
            link_text: clickText,
            link_domain: new URL(clickUrl).hostname,
            page_path: location.pathname
          });
        }

        if (isDownload) {
          const fileName = clickUrl.split('/').pop();
          const fileExtension = fileName.split('.').pop();
          
          window.gtag('event', 'file_download', {
            file_name: fileName,
            file_extension: fileExtension,
            link_text: clickText,
            page_path: location.pathname
          });
        }

        if (contentArea === 'sidebar') {
          window.gtag('event', 'sidebar_navigation', {
            link_text: clickText,
            link_url: clickUrl,
            page_path: location.pathname
          });
        }

        if (contentArea === 'navbar') {
          window.gtag('event', 'navbar_navigation', {
            link_text: clickText,
            link_url: clickUrl,
            page_path: location.pathname
          });
        }

        if (eigenContext) {
          window.gtag('event', 'eigencompute_click', {
            page_path: location.pathname,
            page_title: document.title,
            eigencompute_page_id: eigenContext.pageId,
            eigencompute_element_id: eigencomputeElementId,
            eigencompute_click_identifier: clickIdentifier,
            content_area: contentArea,
            parent_section: section,
            click_element: elementType,
            click_text: clickText,
            click_destination: clickUrl || 'no-url'
          });
        }
      }
    };

    // Helper function to determine the section of the click
    function getClickSection(element) {
      let current = element;
      let depth = 0;
      const maxDepth = 15;
      
      while (current && current !== document.body && depth < maxDepth) {
        // Check for Docusaurus-specific sections
        if (current.classList) {
          if (current.classList.contains('theme-doc-markdown')) return 'documentation-content';
          if (current.classList.contains('theme-doc-sidebar-menu')) return 'sidebar-menu';
          if (current.classList.contains('navbar__items')) return 'navbar-items';
          if (current.classList.contains('footer__links')) return 'footer-links';
          if (current.classList.contains('table-of-contents')) return 'table-of-contents';
          if (current.classList.contains('pagination-nav')) return 'pagination';
          if (current.classList.contains('theme-admonition')) return 'admonition-block';
          if (current.classList.contains('tabs')) return 'tabs-component';
        }
        
        // Check for semantic HTML5 elements
        const tagName = current.tagName;
        if (tagName === 'NAV') return 'navigation';
        if (tagName === 'ARTICLE') return 'article';
        if (tagName === 'SECTION') return 'section';
        if (tagName === 'ASIDE') return 'aside';
        if (tagName === 'HEADER') return 'header';
        if (tagName === 'FOOTER') return 'footer';
        if (tagName === 'MAIN') return 'main';
        
        // Check for heading sections
        if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(tagName)) {
          return `heading-${tagName.toLowerCase()}`;
        }
        
        current = current.parentElement;
        depth++;
      }
      
      return 'unknown';
    }

    // Attach click listener with capture to catch all clicks
    document.addEventListener('click', handleClick, true);

    // Track scroll depth
    let maxScroll = 0;
    let scrollTimer = null;
    
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
        
        // Clear existing timer
        if (scrollTimer) clearTimeout(scrollTimer);
        
        // Set new timer to send event after user stops scrolling
        scrollTimer = setTimeout(() => {
          if (window.gtag && maxScroll > 0) {
            // Send scroll depth events at milestones
            const milestones = [25, 50, 75, 90, 100];
            for (const milestone of milestones) {
              if (maxScroll >= milestone && maxScroll < milestone + 25) {
                window.gtag('event', 'scroll', {
                  percent_scrolled: milestone,
                  page_path: location.pathname,
                  page_title: document.title,
                  ...(eigenContext
                    ? {
                        eigencompute_page_id: eigenContext.pageId,
                        eigencompute_scroll_id: `${eigenContext.pageId}_${milestone}`,
                      }
                    : {})
                });

                if (eigenContext) {
                  window.gtag('event', 'eigencompute_scroll', {
                    page_path: location.pathname,
                    page_title: document.title,
                    eigencompute_page_id: eigenContext.pageId,
                    eigencompute_scroll_id: `${eigenContext.pageId}_${milestone}`,
                    eigencompute_scroll_percent: milestone
                  });
                }
                break;
              }
            }
          }
        }, 1000); // Wait 1 second after scrolling stops
      }
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track time on page
    const startTime = Date.now();
    
    const sendEngagementTime = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000); // in seconds
      
      if (window.gtag && timeOnPage > 0) {
        window.gtag('event', 'page_engagement_time', {
          engagement_time_seconds: timeOnPage,
          page_path: location.pathname,
          page_title: document.title
        });
      }
    };

    // Send engagement time when user leaves the page
    window.addEventListener('beforeunload', sendEngagementTime);

    // Also send engagement time at intervals for long page sessions
    const engagementInterval = setInterval(() => {
      sendEngagementTime();
    }, 30000); // Every 30 seconds

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', sendEngagementTime);
      clearInterval(engagementInterval);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, [location]);

  return <>{children}</>;
}

export default Root;

const EIGENCOMPUTE_BASE_PATH = '/products/eigencompute';

function getEigencomputeContext(pathname) {
  if (!pathname || !pathname.startsWith(EIGENCOMPUTE_BASE_PATH)) {
    return null;
  }

  const relativePath = pathname
    .slice(EIGENCOMPUTE_BASE_PATH.length)
    .replace(/^\/+/, '')
    .replace(/\/$/, '');

  const pageSeed = relativePath || 'index';
  const pageId = `ec_${slugify(pageSeed) || 'index'}`;

  return {
    pageId,
  };
}

function buildEigencomputeElementId(target, clickText, elementType) {
  const analyticsId = findAnalyticsId(target);
  if (analyticsId) {
    return analyticsId;
  }

  const codeIdentifier = getCodeBlockIdentifier(target);
  if (codeIdentifier) {
    return codeIdentifier;
  }

  const ariaLabel = target?.getAttribute ? target.getAttribute('aria-label') : null;
  if (ariaLabel) {
    const ariaId = slugify(ariaLabel);
    if (ariaId) {
      return `aria_${ariaId}`;
    }
  }

  const titleAttr = target?.getAttribute ? target.getAttribute('title') : null;
  if (titleAttr) {
    const titleId = slugify(titleAttr);
    if (titleId) {
      return `title_${titleId}`;
    }
  }

  if (clickText) {
    const textId = slugify(clickText);
    if (textId) {
      return `text_${textId}`;
    }
  }

  if (elementType) {
    const elementId = slugify(elementType);
    if (elementId) {
      return `element_${elementId}`;
    }
  }

  return 'unknown';
}

function findAnalyticsId(element) {
  let current = element;
  let depth = 0;
  const maxDepth = 5;

  while (current && current !== document.body && depth < maxDepth) {
    if (current.dataset && current.dataset.analyticsId) {
      const normalized = slugify(current.dataset.analyticsId);
      if (normalized) {
        return normalized;
      }
    }

    current = current.parentElement;
    depth += 1;
  }

  return null;
}

function getCodeBlockIdentifier(element) {
  if (!element || typeof element.closest !== 'function') {
    return null;
  }

  const themeCodeBlock = element.closest('.theme-code-block');
  if (themeCodeBlock) {
    const codeElement =
      themeCodeBlock.querySelector('pre code') ||
      themeCodeBlock.querySelector('pre') ||
      themeCodeBlock.querySelector('code');
    const codeText = codeElement?.textContent || '';
    const firstLine = getFirstNonEmptyLine(codeText);
    const codeId = slugify(firstLine).slice(0, 80);
    if (codeId) {
      return `code_${codeId}`;
    }
  }

  const preElement = element.closest('pre');
  if (preElement) {
    const firstLine = getFirstNonEmptyLine(preElement.textContent || '');
    const codeId = slugify(firstLine).slice(0, 80);
    if (codeId) {
      return `code_${codeId}`;
    }
  }

  return null;
}

function getFirstNonEmptyLine(text) {
  if (!text) {
    return '';
  }

  const lines = text.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed) {
      return trimmed;
    }
  }

  return '';
}

function slugify(value) {
  if (!value || typeof value !== 'string') {
    return '';
  }

  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
