/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Change this to match your repository name
    basePath: '/Makeup-Atelier',
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: '/Makeup-Atelier',
    },
};

export default nextConfig;
