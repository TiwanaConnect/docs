import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Family Tree Visualization',
    description: (
      <>
        Easily visualize family connections with an intuitive and beautiful tree layout. 
        Navigate across generations with ease.
      </>
    ),
  },
  {
    title: 'Member Profiles',
    description: (
      <>
        Every family member gets a personalized profile containing their key details, 
        relationships, and legacy.
      </>
    ),
  },
  {
    title: 'Relation Mapping',
    description: (
      <>
        Add father, mother, spouse, and children — the system automatically connects relationships 
        and updates the tree.
      </>
    ),
  },
  {
    title: 'Search & Navigation',
    description: (
      <>
        Quickly find any family member using powerful search and smart filtering options.
      </>
    ),
  },
  {
    title: 'Import / Export',
    description: (
      <>
        Seamlessly backup or transfer family data using import/export functionality — secure and fast.
      </>
    ),
  },
  {
    title: 'Privacy & Access Control',
    description: (
      <>
        Only approved family members can access and edit data. All your family data is safe and private.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md padding-vert--lg">
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
