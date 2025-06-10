import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig, ErrorCauseBoundary} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import styles from './styles.module.css';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}

function NavbarItems({items}) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.\nPlease double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:\n${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');
  const {navbar: {title: navbarTitle, logo}} = useThemeConfig();
  const logoLink = useBaseUrl(logo?.href || '/');

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.topRow}>
        {/* Left: Logo */}
        <div className={styles.logoLeft}>
          <NavbarLogo />
        </div>
        {/* Center: (empty for now, can be used for spacing) */}
        <div style={{ flex: 1 }} />
        {/* Right: right items */}
        <div className={styles.rightItems}>
          
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </div>
      </div>
      <div className={styles.bottomRow}>
        {navbarTitle && (
          <Link to={logoLink} {...(logo?.target && {target: logo.target})} style={{marginRight: '1.5rem'}}>
            <b className="navbar__title text--truncate">{navbarTitle}</b>
          </Link>
        )}
        <NavbarItems items={leftItems} />
      </div>
    </div>
  );
}
