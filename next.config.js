/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [{ source: '/skill&tech', destination: '/skills', permanent: true }];
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co.com',
            port: '',
            pathname: '/**',
          },
        ],
    },
};

export default nextConfig;
