import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pisces.bbystatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
