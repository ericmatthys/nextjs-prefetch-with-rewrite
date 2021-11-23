import Head from 'next/head';
import React from 'react';

export const getStaticProps = async (
  context
) => {
  if (typeof context.params?.country !== 'string') {
    throw new Error('Missing country');
  }

  return {
    revalidate: 3600,
    props: {
      country: context.params.country,
      slug: context.params.slug,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
};

export default function RestrictedPage({
  country,
  slug,
}) {
  return (
    <div>
      <Head>
        <title>Restricted</title>
      </Head>

      <main>
        <h1>Restricted</h1>
        <div>{country}</div>
        <div>{slug}</div>
      </main>
    </div>
  );
}

