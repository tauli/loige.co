/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-9c1722dc847c5bd25211.js"
  },
  {
    "url": "app-bdf457e6b71a490ddc00.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-678824396980a5f5de0a.js"
  },
  {
    "url": "index.html",
    "revision": "0a0af68a18ed55027916bb2ab292c3c3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9e26c7405b12c502bd11503b559159b7"
  },
  {
    "url": "component---src-templates-blog-index-js-1cb1a218e5506b194bb2.js"
  },
  {
    "url": "1-527466e0d42c3396e302.js"
  },
  {
    "url": "3-6fb33c4cf554d6c6522c.js"
  },
  {
    "url": "0-e101169b1e9077a3f42a.js"
  },
  {
    "url": "static/d/424/path---index-6a9-VeXgVGwp4hBlUHkSD99qtvdoPA.json",
    "revision": "4d56fb95b4102cce7937ef0b22b50cc9"
  },
  {
    "url": "component---src-pages-404-js-5313e5e1e1543573ee82.js"
  },
  {
    "url": "2-5e066291b82b3ae8661b.js"
  },
  {
    "url": "static/d/272/path---404-html-516-62a-KqRdEop0uwTv6w5AKcTzBeEJo.json",
    "revision": "3e7273d3d8cb0f7fab533af55a833e9e"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "7c3ae84bf002c1e4612785a6cc95ce0c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
