import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="body.feature.title.left">Technical note</Translate>,
    Svg: require('@site/static/img/code_review_dark.svg').default,
    description: <Translate id="body.feature.content.left"></Translate>,
  },
  {
    title: <Translate id="body.feature.title.center">Articles</Translate>,
    Svg: require('@site/static/img/programming_dark.svg').default,
    description: <Translate id="body.feature.content.center"></Translate>,
  },
  {
    title: <Translate id="body.feature.title.right">Portfolio</Translate>,
    Svg: require('@site/static/img/responsive_dark.svg').default,
    description: <Translate id="body.feature.content.right"></Translate>,
  },
];

function Feature({ Svg, title, description, to }) {
  return (
    <div className={clsx('col col--4')}>
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
