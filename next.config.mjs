/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/portfolio",
    output: "export",  // <=== enables static exports
    images: {
        domains: ['skillicons.dev']
    }
};

export default nextConfig;
