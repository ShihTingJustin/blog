import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Translate from '@docusaurus/Translate';
import { useHistory } from '@docusaurus/router';

const FeatureList = [
  {
    title: <Translate id="body.feature.title.left">Technical note</Translate>,
    Svg: require('@site/static/img/code_review_dark.svg').default,
    description: <Translate id="body.feature.content.left"></Translate>,
    path: 'docs/intro',
  },
  {
    title: <Translate id="body.feature.title.center">Articles</Translate>,
    Svg: require('@site/static/img/programming_dark.svg').default,
    description: <Translate id="body.feature.content.center"></Translate>,
    path: 'blog',
  },
  {
    title: <Translate id="body.feature.title.right">Portfolio</Translate>,
    Svg: require('@site/static/img/responsive_dark.svg').default,
    description: <Translate id="body.feature.content.right"></Translate>,
    path: 'portfolio',
  },
];

function Feature({ Svg, title, description, path }) {
  const history = useHistory();

  return (
    <div
      className={`${styles.feature} ${clsx('col col--4')}`}
      onClick={() => history.push(history.location.pathname + path)}
    >
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
