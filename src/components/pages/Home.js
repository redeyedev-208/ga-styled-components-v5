import React from 'react';
import { PageLayout } from 'components/common';

export default function Home() {
  return (
    <PageLayout>
      <h1>Home</h1>
      <h2>Web Standards</h2>
      <p>
        W3C standards define an open web platform for application development.
        The web has the unprecedented potential to enable developers to build
        rich interactive experiences, that can be available on any device. The
        platform continues to expand, but web users have long ago rallied around
        HTML as the cornerstone of the web. Many more technologies that W3C and
        its partners are creating extend the web and give it full strength,
        including CSS, SVG, WOFF, WebRTC, XML, and a growing variety of APIs.
      </p>
      <h2>Why W3C Web Standards</h2>
      <p>
        Web standards are the building blocks of the web. They are the blue
        prints of how to implement browsers, blogs, graphic editors, search
        engines, and many more software that power our experience on the web.
        They enable developers to build rich interactive experiences that can be
        available on any device.
      </p>
    </PageLayout>
  );
}
