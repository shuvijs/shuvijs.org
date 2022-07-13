import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./styles.module.css";
import clsx from "clsx";

import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import { exampleRoute } from "./example-route";
import { exampleLoader } from "./example-loader";

const HighlightView = ({code}) => {
  return <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={clsx(className,styles.highlight)} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
}

const features = [
  {
    title: "Focus on experience",
    content:
      "Focusing on developers, emphasizing development experience and focusing on development efficiency.",
    icon:"https://img.alicdn.com/imgextra/i4/O1CN01h5IQ8c1mll6tVqVhQ_!!6000000004995-2-tps-200-200.png"
  },
  {
    title: "Out of the box",
    content:
      "With just one dependency, you can have a modern, deeply optimized front-end application.",
    icon:"https://img.alicdn.com/imgextra/i1/O1CN01X9PWb51WTrmbiflpT_!!6000000002790-2-tps-200-200.png"
  
  },
  {
    title: "Rich extensibility",
    content:
      "Provides rich interfaces, which can meet various functions and needs through plug-ins.",
    icon:"https://img.alicdn.com/imgextra/i2/O1CN01u39OgG1KsLZ2sIJMg_!!6000000001219-2-tps-200-202.png"
  
  },

  {
    title: "Feature rich",
    content:
      "The API interface and server-side middleware are sufficient to support complex scenarios.",
    icon:"https://img.alicdn.com/imgextra/i3/O1CN01bQ0kTe1EBOjKuXpqp_!!6000000000313-2-tps-200-202.png"
  
  },
  {
    title:"SSR/CSR",
    content: "Progressive support for CSR and SSR",
    icon:"https://img.alicdn.com/imgextra/i4/O1CN016Wo1XZ1dSg4HhJn0M_!!6000000003735-2-tps-200-200.png"
  },
  {
    title: "Compile on demand",
    content: "Compilation speed is greatly improved, improving development efficiency.",
    icon:"https://img.alicdn.com/imgextra/i1/O1CN01y7KgLZ26MNTamgba7_!!6000000007647-2-tps-200-200.png"
  },
  {
    title:"Plugin system",
    content:"Powerful plug-in system to meet in-depth customization needs.",
    icon:"https://img.alicdn.com/imgextra/i2/O1CN01ub7E7l1QT3O8vEbCq_!!6000000001976-2-tps-200-200.png"
  },
  {
    title:"Built-in state management",
    content:"Simple to use, suitable for team collaboration.",
    icon:"https://img.alicdn.com/imgextra/i4/O1CN016Wo1XZ1dSg4HhJn0M_!!6000000003735-2-tps-200-200.png"
  
  }
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  
  return (
    <Layout
      permalink={ "/" }
      description={ "Set up a modern web app by running one command." }
    >
      <div className={ styles.header }>
        <h1>{ siteConfig.title }</h1>
        <h2>{ siteConfig.tagline }</h2>
        <Link className={styles.getStarted} to="/docs/introduction/getting-started">
          <span>Get Started</span>
        </Link>
      </div>
      
      <div className={styles.featuresWrapper}>
        <div className={clsx(styles.features,"container")}>
          {
            features.map(feature => {
              return <div className={styles.feature}>
                <p className={styles.featureImg}>
                  <img src={feature.icon} alt=""/>
                </p>
                <h3>{feature.title}</h3>
                <p className={styles.featureContent}>{feature.content}</p>
              </div>
            })
          }
        </div>
      </div>
      <div className={clsx(styles.hero,'container')}>
        <div className={styles.heroBanner}>
          <h2>Enterprise-level WEB development framework.</h2>
          <p>Full stack development is supported.</p>
        </div>
        <div className={styles.heroItem}>
          <div className={styles.heroContent}>
            <h3>Conventional routing system</h3>
            <p>Files are routes, supporting nested layouts, dynamic paths, API and Middleware definitions.</p>
            <Link to="/docs/guide/Conventional-Routes/Routes" className={styles.heroLink} >
              Read More
            </Link>
          </div>
          <HighlightView code={exampleRoute}/>
        </div>
        <div className={styles.heroItem}>
          <HighlightView code={exampleLoader}/>
          <div className={styles.heroContent}>
            <h3>Isomorphism</h3>
            <p>Data automatic dehydration water injection.</p>
            <Link to="/docs/guide/Conventional-Routes/Routes" className={styles.heroLink} >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
