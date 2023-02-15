import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteBasicURL = 'https://pungnyeon.netlify.app';

export default function MetaDatas({ title, pageURL, desc }) {
  return (
    <Helmet>
      <title>{title} - 풍년마켓</title>
      <meta
        property="og:title"
        content="주말 농장 농산물 직거래 플랫폼, 풍년마켓"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteBasicURL}${pageURL}`} />
      <meta property="og:image" content="%PUBLIC_URL%/full-logo.png" />
      <meta property="og:site_name" content={`${title} - 풍년마켓`} />
      <meta property="og:description" content={desc} />
      <meta
        name="description"
        lang="ko"
        content="주말농장 농산물 직거래 플랫폼 풍년마켓"
      />
      <meta name="author" content="프로젝트 팀 십전백기"></meta>
    </Helmet>
  );
}
