import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';
import styles from './index.module.scss';
import Translate, { translate } from '@docusaurus/Translate';

const ogImage = 'https://imgur.com/j6OTApL';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero ', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={translate({ id: 'home.page.title' })} description={siteConfig.description}>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1.0001,maximum-scale=1.0001,viewport-fit=cover"
        />
        <link rel="preconnect" href="https//imgur.com" />
        <link rel="dns-prefetch" href="https//imgur.com" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
