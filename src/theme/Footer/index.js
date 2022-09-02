import React, { useEffect, useState } from 'react';
import Footer from '@theme-original/Footer';
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { API_PAGE_PATH } from '../constants';

export default function FooterWrapper(props) {
  // customized by shuvi
  const [isApiPage, setIsApiPage] = useState(false);
  const apiUrl = useBaseUrl(API_PAGE_PATH);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsApiPage(pathname === apiUrl);
  }, [pathname, apiUrl]);

  if (isApiPage) {
    return null;
  }

  return (
    <>
      <Footer {...props} />
    </>
  );
}
