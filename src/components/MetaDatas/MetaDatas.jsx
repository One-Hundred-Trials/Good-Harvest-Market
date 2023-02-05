import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MetaDatas({
  headTitle,
  siteName,
  title,
  siteUrl,
  desc,
}) {
  return (
    <Helmet>
      <title>{headTitle}</title>
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={desc} />
    </Helmet>
  );
}
