/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/portfolio",
    output: "export",
    images: {
        domains: ['skillicons.dev'],
        unoptimized: true,
    }
};

export default nextConfig;
