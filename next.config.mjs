import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: "app/sw.js",
  swDest: "public/sw.js",
  reloadOnOnline: true,
  cacheOnNavigation: true,
});

export default withSerwist({
  // Your Next.js config
});
