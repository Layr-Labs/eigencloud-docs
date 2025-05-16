import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import React from 'react';

import HomeHero from '../components/sections/HomeHero';
import DevelopAVSSection from '../components/sections/DevelopAVSSection';
import OperateNodeSection from '../components/sections/OperateNodeSection';
import BuildApplicationSection from '../components/sections/BuildApplicationSection';
import RestakeSection from '../components/sections/RestakeSection';
import CommunityResourcesSection from '../components/sections/CommunityResourcesSection';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Homepage" description="EigenLayer Documentation">
      <main className={styles.main}>
        <HomeHero />
        <DevelopAVSSection />
        <OperateNodeSection />
        {/* <BuildApplicationSection /> */}
        <RestakeSection />
        <CommunityResourcesSection />
      </main>
    </Layout>
  );
}

export default Home;
