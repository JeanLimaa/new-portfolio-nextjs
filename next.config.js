/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.jsdelivr.net',
        },
        {
          protocol: 'https',
          hostname: 'viz.mediapipe.dev',
        },
        {
          protocol: 'https',
          hostname: 'devicon-website.vercel.app',
        },
        {
          protocol: 'https',
          hostname: 'img.icons8.com',
        },
      ],
      /* domains: ['cdn.jsdelivr.net', 'viz.mediapipe.dev', 'devicon-website.vercel.app', 'img.icons8.com'], */
    }
  };
  
