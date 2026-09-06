import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home() {
  // Redirects root landing page directly to the intro documentation page
  return <Redirect to="./intro" />;
}