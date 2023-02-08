import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MetaDatas({ title, desc }) {
  return (
    <Helmet>
      <title>{title} - 풍년마켓</title>
      <meta
        property="og:title"
        content="주말 농장 농산물 직거래 플랫폼, 풍년마켓"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pungnyeon.netlify.app" />
      <meta property="og:image" content="%PUBLIC_URL%/full-logo.png" />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={desc} />
    </Helmet>
  );
}
