/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // If you're exporting a static site
  images: {
    unoptimized: true, // Disable Next.js's image optimization
  },
};

export default nextConfig;