/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.burgerking.lv',
        port: '',
        pathname: '/images/optimized/products/**',
      },
    ],
  },
};

export default nextConfig;
