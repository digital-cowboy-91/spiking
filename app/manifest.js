export default function manifest() {
    return {
      name: 'Next.js PWA',
      short_name: 'NextPWA',
      description: 'A Progressive Web App built with Next.js',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: '/PWA_192.svg',
          sizes: '192x192',
          type: 'image/svg',
        },
        {
            src: '/PWA_512.svg',
            sizes: '512x512',
            type: 'image/svg',
          },
      ],
    }
  }