export default function manifest() {
  return {
    name: "Spiking PWA",
    short_name: "PWA & Serwist",
    description: "Spiking PWA with a Serwist",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    icons: [
      {
        src: "/PWA_192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "/PWA_512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
