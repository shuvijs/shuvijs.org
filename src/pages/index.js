import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from "@docusaurus/useBaseUrl";

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './index.module.css';
import styles from "./styles.module.css";



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: "注重体验",
    content:
      "以开发者为中心，强调开发体验，注重开发效率。"
  },
  {
    title: "开箱即用",
    content:
      "仅需一个依赖，即可拥有一个深度优化的现代前端应用程序。"
  },
  {
    title: "丰富的扩展性",
    content:
      "提供了丰富的接口，可以通过插件满足各种不同的功能和需求。"
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={"/"}
      description={"Set up a modern web app by running one command."}
    >
      <div className={clsx("hero hero--dark", styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, "margin-vert--md")}
            src={useBaseUrl("img/logo.svg")}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl("docs/introduction/getting-started")}
            >
              开始使用
            </Link>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div
                  key={idx}
                  className={clsx("col col--4", styles.feature)}
                >
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;
