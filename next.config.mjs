/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/portfolio",
    // output: "export",
    // basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    images: {
        domains: ['skillicons.dev'],
        unoptimized: true,
    }
};

export default nextConfig;
