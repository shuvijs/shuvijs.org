/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";

import classnames from "classnames";

import styles from "./styles.module.css";

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
      <div className={classnames("hero hero--dark", styles.heroBanner)}>
        <div className="container">
          <img
            className={classnames(styles.heroBannerLogo, "margin-vert--md")}
            src={useBaseUrl("img/logo.svg")}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl("docs/started")}
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
                  className={classnames("col col--4", styles.feature)}
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
